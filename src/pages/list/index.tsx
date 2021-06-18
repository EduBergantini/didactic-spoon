import React, {useEffect, useMemo, useState} from "react"

import ContentHeader from "../../components/content-header";
import HistoryCard from "../../components/history-card";
import SelectInput from "../../components/select-input";
import { ListContainer, FilterContainer, ListContent } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatToCurrency from "../../utils/format-currency";
import listOfMonths from "../../utils/months";
import { useApplicationTheme } from "../../contexts/theme-context";

interface IListProps {
    match: {
        params: {
            type: string;
        }
    }
}

interface IListData {
    id: number,
    description: string;
    amount: number;
    frequency: string;
    date: Date;
    tagColor: string;

}

const List: React.FC<IListProps> = ({ match }) => {
    const currentTheme = useApplicationTheme();
    const currentDate = new Date();
    const [data, setData] = useState<IListData[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<string>((currentDate.getMonth()+1).toLocaleString());
    const [selectedYear, setSelectedYear] = useState<string>(currentDate.getFullYear().toLocaleString());
    const [selectedFrequencies, setSelectedFrequencies] = useState<string[]>(['recorrente', 'eventual']);
    const {type} = match.params;

    const balanceTypeData = useMemo(() => {
        const isBalanceEntryPage: boolean = type === "entradas";
        return {
            title: isBalanceEntryPage ? "Entradas": "Saídas",
            color: isBalanceEntryPage 
            ? currentTheme.theme.colors.info 
            : currentTheme.theme.colors.warning,
            dataset: isBalanceEntryPage ? gains : expenses
        }
    }, [type]);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
                   return {
                       value: index+1,
                       label: month
                   }
               });
    }, [])

    const years = useMemo(() => {
        const yearsWithData: number[] = [];
        balanceTypeData.dataset.forEach(item => {
            var date = new Date(item.date);
            var currentItemYear = date.getFullYear();

            if(!yearsWithData.includes(currentItemYear)) {
                yearsWithData.push(currentItemYear);
            }
        });

        setSelectedYear(yearsWithData[yearsWithData.length-1].toString())

        return yearsWithData.map(item => {
            return {
                value: item,
                label: item.toString()
            }
        });
    }, [balanceTypeData]);

    useEffect(() => {
        const filteredData = balanceTypeData.dataset.filter(item => {
            const dataDate = new Date(item.date);
            return (dataDate.getMonth()+1).toString() === selectedMonth 
                && dataDate.getFullYear().toString() === selectedYear
                && selectedFrequencies.includes(item.frequency);
        });

        const listData = filteredData.map((item, index) => {
            return {
                id: index,
                description: item.description,
                amount: parseFloat(item.amount),
                frequency: item.frequency,
                date: new Date(item.date),
                tagColor: item.frequency === "recorrente" 
                ? currentTheme.theme.colors.success
                : currentTheme.theme.colors.warning
            }
        })

        setData(listData);

    }, [selectedMonth, selectedYear, selectedFrequencies, balanceTypeData]);


    const handleFrequencyClick = (frequency: string) => {
        const selectedFrequencyIndex = selectedFrequencies.findIndex(item => item === frequency);
        if (selectedFrequencyIndex >= 0) {
            const result = selectedFrequencies.filter(item => item !== frequency);
            setSelectedFrequencies(result);
        }else {
            setSelectedFrequencies(prevState => {
                return [...prevState, frequency];
            });
        }

    }

    return (
        <ListContainer>
            <ContentHeader title={balanceTypeData.title} lineColor={balanceTypeData.color}>
                <SelectInput options={months} onSelectInputChange={e => setSelectedMonth(e.target.value)} defaultValue={selectedMonth}/>
                <SelectInput options={years}  onSelectInputChange={e => setSelectedYear(e.target.value)} defaultValue={selectedYear}/>
            </ContentHeader>
            <FilterContainer>
                <button 
                    type="button" 
                    className={`tag-filter tag-filter-recurrent ${selectedFrequencies.includes('recorrente') && 'tag-activated'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >Recorrentes</button>
                <button 
                    type="button" 
                    className={`tag-filter tag-filter-eventual ${selectedFrequencies.includes('eventual') && 'tag-activated'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >Eventuais</button>
            </FilterContainer>
            <ListContent>
            {
                data.map(item => (
                    <HistoryCard
                                 key={item.id}
                                 tagColor={item.tagColor}
                                 title={item.description}
                                 subtitle={item.date.toLocaleDateString("pt-BR")}
                                 amount={formatToCurrency(item.amount)} />)
                )
            }
                
            </ListContent>
        </ListContainer>
    );
};

export default List;
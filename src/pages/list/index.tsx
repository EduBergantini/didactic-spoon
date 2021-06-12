import React, {useEffect, useMemo, useState} from "react"

import ContentHeader from "../../components/content-header";
import HistoryCard from "../../components/history-card";
import SelectInput from "../../components/select-input";
import { ListContainer, FilterContainer, ListContent } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatToCurrency from "../../utils/format-currency";
import listOfMonths from "../../utils/months";

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
    const currentDate = new Date();
    const [data, setData] = useState<IListData[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<string>((currentDate.getMonth()+1).toLocaleString());
    const [selectedYear, setSelectedYear] = useState<string>(currentDate.getFullYear().toLocaleString());
    const {type} = match.params;

    const title = useMemo(() => {
        return {
            text: type === "entradas" ? "Entradas": "Saídas",
            color: type === "entradas" ? "#f7931b" : "#e44c4e"
        }
    }, [type]);

    const dataset = useMemo(() => {
        return type === "entradas" ? gains : expenses;
    }, [type])

    useEffect(() => {
        const filteredData = dataset.filter(item => {
            const dataDate = new Date(item.date);
            return (dataDate.getMonth()+1).toString() === selectedMonth 
                && dataDate.getFullYear().toString() === selectedYear;
        });

        const listData = filteredData.map((item, index) => {
            return {
                id: index,
                description: item.description,
                amount: parseFloat(item.amount),
                frequency: item.frequency,
                date: new Date(item.date),
                tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e"
            }
        })

        setData(listData);

    }, [selectedMonth, selectedYear, dataset]);

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
        dataset.forEach(item => {
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
    }, [dataset]);

    return (
        <ListContainer>
            <ContentHeader title={title.text} lineColor={title.color}>
                <SelectInput options={months} onSelectInputChange={e => setSelectedMonth(e.target.value)} defaultValue={selectedMonth}/>
                <SelectInput options={years}  onSelectInputChange={e => setSelectedYear(e.target.value)} defaultValue={selectedYear}/>
            </ContentHeader>
            <FilterContainer>
                <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
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
import React, {useEffect, useMemo, useState} from "react"

import ContentHeader from "../../components/content-header";
import HistoryCard from "../../components/history-card";
import SelectInput from "../../components/select-input";
import { ListContainer, FilterContainer, ListContent } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatToCurrency from "../../utils/format-currency";

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

    useEffect(() => {
        const requestData = type === "entradas" ? gains : expenses;
        const filteredData = requestData.filter(item => {
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

    }, [selectedMonth, selectedYear, type]);

    const months = [
        {value: 1, label: "Janeiro"},
        {value: 2, label: "Fevereiro"},
        {value: 3, label: "Março"},
        {value: 4, label: "Abril"},
        {value: 5, label: "Maio"},
        {value: 6, label: "Junho"},
        {value: 7, label: "Julho"},
        {value: 8, label: "Agosto"},
        {value: 9, label: "Setembro"},
        {value: 10, label: "Outubro"},
        {value: 11, label: "Novembro"},
        {value: 12, label: "Dezembro"},
    ];

    const years = [
        {value: 2021, label: "2021"},
        {value: 2020, label: "2020"},
        {value: 2019, label: "2019"},
        {value: 2018, label: "2018"},
    ];

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
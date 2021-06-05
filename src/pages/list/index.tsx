import React from "react"
import ContentHeader from "../../components/content-header";
import HistoryCard from "../../components/history-card";
import SelectInput from "../../components/select-input";
import { ListContainer, FilterContainer, ListContent } from "./styles";

const Dashboard: React.FC = () => {
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
            <ContentHeader title="Dashboard" lineColor="#e44c4e">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>
            <FilterContainer>
                <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
            </FilterContainer>
            <ListContent>
                <HistoryCard tagColor="#e44c4e" title="Conta de Luz" subtitle="01/01/2001" amount="R$ 79,98" />
            </ListContent>
        </ListContainer>
    );
};

export default Dashboard;
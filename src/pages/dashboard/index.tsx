import React from "react"
import ContentHeader from "../../components/content-header";
import SelectInput from "../../components/select-input";
import { DashboardContainer } from "./styles";

const Dashboard: React.FC = () => {
    const options = [
        {value: 1, label: "Teste 1"},
        {value: 2, label: "Teste 2"},
        {value: 3, label: "Teste 3"},
        {value: 4, label: "Teste 4"},
        {value: 5, label: "Teste 5"},
        {value: 6, label: "Teste 6"},
    ];

    return (
        <DashboardContainer>
            <ContentHeader title="Dashboard" lineColor="#e44c4e">
                <SelectInput options={options}/>
                <SelectInput options={options}/>
            </ContentHeader>
        </DashboardContainer>
    );
};

export default Dashboard;
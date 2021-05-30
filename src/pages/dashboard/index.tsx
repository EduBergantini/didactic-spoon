import React from "react"
import ContentHeader from "../../components/content-header";
import { DashboardContainer } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <DashboardContainer>
            <ContentHeader></ContentHeader>
        </DashboardContainer>
    );
};

export default Dashboard;
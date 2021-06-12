import React, { useMemo, useState } from "react"
import ContentHeader from "../../components/content-header";
import SelectInput from "../../components/select-input";
import { DashboardContainer } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listOfMonths from "../../utils/months";


const Dashboard: React.FC = () => {
    const currentDate = new Date();
    const [selectedMonth, setSelectedMonth] = useState<string>((currentDate.getMonth()+1).toLocaleString());
    const [selectedYear, setSelectedYear] = useState<string>(currentDate.getFullYear().toLocaleString());

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
        [...gains, ...expenses].forEach(item => {
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
    }, []);

    return (
        <DashboardContainer>
            <ContentHeader title="Dashboard" lineColor="#4e41f0">
            <SelectInput options={months} onSelectInputChange={e => setSelectedMonth(e.target.value)} defaultValue={selectedMonth}/>
                <SelectInput options={years}  onSelectInputChange={e => setSelectedYear(e.target.value)} defaultValue={selectedYear}/>
            </ContentHeader>
        </DashboardContainer>
    );
};

export default Dashboard;
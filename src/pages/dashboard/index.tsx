import React, { useMemo, useState } from "react"
import ContentHeader from "../../components/content-header";
import SelectInput from "../../components/select-input";
import { DashboardContainer, DashboardContent } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listOfMonths from "../../utils/months";
import WalletBox from "../../components/wallet-box";
import { IconEnums } from "../../utils/images";


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

            <DashboardContent>
                <WalletBox 
                    title="saldo"
                    amount={103.25}
                    label="atualizado com base nas entradas e saídas"
                    icon={IconEnums.DOLLAR}
                    color="#4e41f0"
                />

                <WalletBox 
                    title="entradas"
                    amount={23000.13}
                    label="atualizado com base nas entradas e saídas"
                    icon={IconEnums.ARROW_UP}
                    color="#f7931b"
                />

                <WalletBox 
                    title="saídas"
                    amount={19234.76}
                    label="atualizado com base nas entradas e saídas"
                    icon={IconEnums.ARROW_DOWN}
                    color="#e44c4e"
                />

            </DashboardContent>
        </DashboardContainer>
    );
};

export default Dashboard;
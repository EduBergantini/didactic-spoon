import React, { useMemo, useState } from "react"
import ContentHeader from "../../components/content-header";
import SelectInput from "../../components/select-input";
import { DashboardContainer, DashboardContent } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listOfMonths from "../../utils/months";
import WalletBox from "../../components/wallet-box";
import { IconEnums } from "../../utils/images";
import WalletEvaluation from "../../components/wallet-evaluation";
import RelationChart from "../../components/relation-chart";


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

    const totalExpenses = useMemo(() => {
        let total: number = 0;
        expenses.forEach(item => {
            const date = new Date(item.date);
            if(date.getFullYear() === parseInt(selectedYear)
            && date.getMonth() +1 === parseInt(selectedMonth))
                total += Number(item.amount);

        });
        return total;
    }, [selectedYear, selectedMonth]);

    const totalProfit = useMemo(() => {
        let total: number = 0;
        gains.forEach(item => {
            const date = new Date(item.date);
            if(date.getFullYear() === parseInt(selectedYear)
            && date.getMonth() +1 === parseInt(selectedMonth))
                total += Number(item.amount);

        });
        return total;
    }, [selectedYear, selectedMonth]);

    const finalBalance = useMemo(() => {
        return totalProfit-totalExpenses;
    }, [totalProfit, totalExpenses]);

    const message = useMemo(() => {
        if(finalBalance > 0) {
            return {
                title: "Muito Bem!",
                icon: IconEnums.HAPPY_EMOJI,
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo",
            }
        } else {
            return {
                title: "Que triste!",
                icon: IconEnums.SAD_EMOJI,
                description: "Nesse mes você gastou mais do que deveria",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecesárias",
            }
        }
    }, [finalBalance]);

    const relationProfitLoss = useMemo(() => {
        const total = totalProfit+totalExpenses;
        const profitPercentage = (totalProfit/total)*100;
        const lossPercentage = (totalExpenses/total)*100;
        return [{
            name: "Entradas",
            value: totalProfit,
            percentage: profitPercentage,
            color: "#f7931b",
        },
        {
            name: "Saídas",
            value: totalExpenses,
            percentage: lossPercentage,
            color: "#e44c4e",
        }];

    }, [totalExpenses, totalProfit])

    return (
        <DashboardContainer>
            <ContentHeader title="Dashboard" lineColor="#4e41f0">
            <SelectInput options={months} onSelectInputChange={e => setSelectedMonth(e.target.value)} defaultValue={selectedMonth}/>
                <SelectInput options={years}  onSelectInputChange={e => setSelectedYear(e.target.value)} defaultValue={selectedYear}/>
            </ContentHeader>

            <DashboardContent>
                <WalletBox 
                    title="saldo"
                    amount={finalBalance}
                    label="atualizado com base nas entradas e saídas"
                    icon={IconEnums.DOLLAR}
                    color="#4e41f0"
                />

                <WalletBox 
                    title="entradas"
                    amount={totalProfit}
                    label="atualizado com base nas entradas e saídas"
                    icon={IconEnums.ARROW_UP}
                    color="#f7931b"
                />

                <WalletBox 
                    title="saídas"
                    amount={totalExpenses}
                    label="atualizado com base nas entradas e saídas"
                    icon={IconEnums.ARROW_DOWN}
                    color="#e44c4e"
                />

                <WalletEvaluation
                    title={message.title}
                    icon={message.icon}
                    description={message.description}
                    footerText={message.footerText}
                />

                <RelationChart data={relationProfitLoss} />

            </DashboardContent>
        </DashboardContainer>
    );
};

export default Dashboard;
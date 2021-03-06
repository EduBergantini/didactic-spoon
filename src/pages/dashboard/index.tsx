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
import HistoryChart from "../../components/history-chart";
import MonthlyRecurrentEventualChart from "../../components/monthly-recurrent-eventual-chart";
import { useApplicationTheme } from "../../contexts/theme-context";


const Dashboard: React.FC = () => {
    const currentTheme = useApplicationTheme();
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
                description: "Sua carteira est?? positiva!",
                footerText: "Continue assim. Considere investir o seu saldo",
            }
        } else {
            return {
                title: "Que triste!",
                icon: IconEnums.SAD_EMOJI,
                description: "Nesse mes voc?? gastou mais do que deveria",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desneces??rias",
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
            color: currentTheme.theme.colors.info,
        },
        {
            name: "Sa??das",
            value: totalExpenses,
            percentage: lossPercentage,
            color: currentTheme.theme.colors.warning,
        }];

    }, [totalExpenses, totalProfit])

    const profitLossHistory = useMemo(() => {
        return listOfMonths.map((_, index) => {
            let entryAmount = 0;
            gains.forEach(item => {
                const date = new Date(item.date);

                if(date.getMonth() === index && date.getFullYear().toString() === selectedYear) {
                    entryAmount += Number(item.amount);
                }
            });

            let lossAmount = 0;
            expenses.forEach(item => {
                const date = new Date(item.date);

                if(date.getMonth() === index && date.getFullYear().toString() === selectedYear) {
                    lossAmount += Number(item.amount);
                }
            });

            return {
                monthIndex: index,
                month: listOfMonths[index].substr(0, 3),
                profit: entryAmount,
                loss: lossAmount
            }
        }).filter((item) => {
            const currentDate = new Date();
            return currentDate.getMonth() >= item.monthIndex;
        });
    }, [selectedYear])

    const relationLossEventualRecurrent = useMemo(() => {
        let recurrentAmount = 0;
        let eventualAmount = 0;

        expenses.filter((loss) => {
            const lossDate = new Date(loss.date);
            return (lossDate.getMonth()+1).toString() === selectedMonth
                && lossDate.getFullYear().toString() === selectedYear;
        })
        .forEach((item) => {
            const amount = Number(item.amount);
            if(item.frequency === "recorrente") {
                return recurrentAmount += amount;
            } else {
                eventualAmount += amount;
            }
        });

        const totalAmount = recurrentAmount + eventualAmount;

        return [
            {
                name: "Recorrentes",
                amount: recurrentAmount,
                percentage: (recurrentAmount/totalAmount)*100,
                color: currentTheme.theme.colors.success
            },
            {
                name: "Eventuais",
                amount: eventualAmount,
                percentage: (eventualAmount/totalAmount)*100,
                color: currentTheme.theme.colors.warning
            }
        ];
    }, [selectedMonth, selectedYear]);

    const relationProfitEventualRecurrent = useMemo(() => {
        let recurrentAmount = 0;
        let eventualAmount = 0;

        gains.filter((loss) => {
            const lossDate = new Date(loss.date);
            return (lossDate.getMonth()+1).toString() === selectedMonth
                && lossDate.getFullYear().toString() === selectedYear;
        })
        .forEach((item) => {
            const amount = Number(item.amount);
            if(item.frequency === "recorrente") {
                return recurrentAmount += amount;
            } else {
                eventualAmount += amount;
            }
        });

        const totalAmount = recurrentAmount + eventualAmount;

        return [
            {
                name: "Recorrentes",
                amount: recurrentAmount,
                percentage: (recurrentAmount/totalAmount)*100,
                color: currentTheme.theme.colors.success
            },
            {
                name: "Eventuais",
                amount: eventualAmount,
                percentage: (eventualAmount/totalAmount)*100,
                color: currentTheme.theme.colors.warning
            }
        ];
    }, [selectedMonth, selectedYear]);

    return (
        <DashboardContainer>
            <ContentHeader title="Dashboard" lineColor={currentTheme.theme.colors.success}>
            <SelectInput options={months} onSelectInputChange={e => setSelectedMonth(e.target.value)} defaultValue={selectedMonth}/>
                <SelectInput options={years}  onSelectInputChange={e => setSelectedYear(e.target.value)} defaultValue={selectedYear}/>
            </ContentHeader>

            <DashboardContent>
                <WalletBox 
                    title="saldo"
                    amount={finalBalance}
                    label="atualizado com base nas entradas e sa??das"
                    icon={IconEnums.DOLLAR}
                    color={currentTheme.theme.colors.success}
                />

                <WalletBox 
                    title="entradas"
                    amount={totalProfit}
                    label="atualizado com base nas entradas e sa??das"
                    icon={IconEnums.ARROW_UP}
                    color={currentTheme.theme.colors.info}
                />

                <WalletBox 
                    title="sa??das"
                    amount={totalExpenses}
                    label="atualizado com base nas entradas e sa??das"
                    icon={IconEnums.ARROW_DOWN}
                    color={currentTheme.theme.colors.warning}
                />

                <WalletEvaluation
                    title={message.title}
                    icon={message.icon}
                    description={message.description}
                    footerText={message.footerText}
                />

                <RelationChart data={relationProfitLoss} />

                <HistoryChart 
                    data={profitLossHistory}
                    profitLineColor={currentTheme.theme.colors.info}
                    lossLineColor={currentTheme.theme.colors.warning}
                />

                <MonthlyRecurrentEventualChart
                    title="Sa??das"
                    data={relationLossEventualRecurrent}/>

                <MonthlyRecurrentEventualChart
                    title="Entradas"
                    data={relationProfitEventualRecurrent}/>


            </DashboardContent>
        </DashboardContainer>
    );
};

export default Dashboard;
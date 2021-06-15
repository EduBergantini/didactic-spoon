import React from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip } from "recharts";
import formatToCurrency from "../../utils/format-currency";
import {MonthlyRecurrentEventualChartContainer, MonthlyRecurrentEventualMainChartContainer, MonthlyRecurrentEventualSubtitleContainer, SubTitle, SubtitleContainer} from "./styles";

interface IMonthlyRecurrentEventualChart {
    title: string;
    data: {
        name: string;
        amount: number;
        percentage: number;
        color: string;
    }[]
}

export const MonthlyRecurrentEventualChart: React.FC<IMonthlyRecurrentEventualChart> = ({title, data}) => (
    <MonthlyRecurrentEventualChartContainer>
        <MonthlyRecurrentEventualSubtitleContainer>
            <h2>{title}</h2>
            <SubtitleContainer>
                {
                    data.map((item, index) => (
                        <SubTitle 
                            key={index}
                            color={item.color}>
                            <div>{isNaN(item.percentage) ? 0 : item.percentage.toFixed(1)}%</div>
                            <span>{item.name}</span>
                        </SubTitle>
                    ))
                }
            </SubtitleContainer>
        </MonthlyRecurrentEventualSubtitleContainer>
        <MonthlyRecurrentEventualMainChartContainer>
            <ResponsiveContainer>
                <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor: ">
                        {
                            data.map((item, index) => (
                                    <Cell key={index} fill={item.color} cursor="pointer"/>
                                )
                            )
                        }
                        </Bar>
                        <Tooltip 
                            cursor={{fill: "none"}}
                            formatter={(value: number|string) => formatToCurrency(Number(value))} />
                </BarChart>
            </ResponsiveContainer>
        </MonthlyRecurrentEventualMainChartContainer>
    </MonthlyRecurrentEventualChartContainer>
);

export default MonthlyRecurrentEventualChart;
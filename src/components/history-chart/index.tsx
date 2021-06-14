import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { HistoryChartArea, HistoryChartContainer, HistoryChartHeader, HistorySubtitle, HistorySubtitleContainer } from "./styles";
import formatToCurrency from "../../utils/format-currency";

interface IHistoryChartProps {
    data: {
        month: string;
        profit: number;
        loss: number;
    }[],
    profitLineColor: string;
    lossLineColor: string;
}

const HistoryChart: React.FC<IHistoryChartProps> = ({data, profitLineColor, lossLineColor}) => (
    <HistoryChartContainer>
        <HistoryChartHeader>
            <h2>Histórico de saldo</h2>
            <HistorySubtitleContainer>
                <HistorySubtitle color={profitLineColor}>
                    <div></div>
                    <span>Entradas</span>
                </HistorySubtitle>
                <HistorySubtitle color={lossLineColor}>
                    <div></div>
                    <span>Saídas</span>
                </HistorySubtitle>
            </HistorySubtitleContainer>
        </HistoryChartHeader>
        

        <HistoryChartArea>
            <ResponsiveContainer>
                <LineChart 
                    data={data}
                    margin={{top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cacbcc" />
                    <XAxis dataKey="month" stroke="#ededec" />
                    <Tooltip 
                        formatter={(value: number|string) => { return formatToCurrency(Number(value)); }}
                    />
                    <Line 
                        type="monotone"
                        dataKey="profit"
                        name="Entradas"
                        stroke={profitLineColor}
                        strokeWidth={5}
                        dot={{r: 5}}
                        activeDot={{r: 8}} />
                    <Line 
                        type="monotone"
                        dataKey="loss"
                        name="Saídas"
                        stroke={lossLineColor}
                        strokeWidth={5}
                        dot={{r: 5}}
                        activeDot={{r: 8}} />
                </LineChart>
            </ResponsiveContainer>
        </HistoryChartArea>
    </HistoryChartContainer>
)

export default HistoryChart;

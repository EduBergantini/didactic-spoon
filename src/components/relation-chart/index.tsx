import React from "react";
import { GraphicContainer, InformationContainer, RelationChartContainer, SubTitle, SubtitleContainer, Title } from "./styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


interface IRelationChartProps {
    data: {
        name: string;
        value: number;
        percentage: number;
        color: string;
    }[]
}

const RelationChart: React.FC<IRelationChartProps> = ({ data }) => (
    <RelationChartContainer>
        <InformationContainer>
            <Title>Relação</Title>
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
        </InformationContainer>

        <GraphicContainer>
            <ResponsiveContainer>
                <PieChart>
                    <Pie 
                        data={data}
                        labelLine={false}
                        dataKey="percentage">
                        {
                            data.map((item, index) => (
                                <Cell 
                                    key={index}
                                    fill={item.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </GraphicContainer>
    </RelationChartContainer>
)

export default RelationChart;
import React from "react";

import { HistoryCardContainer, HistoryTag } from "./styles";

interface IHistoryCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryCard: React.FC<IHistoryCardProps> = ({tagColor, title, subtitle, amount}) => {
    return (
        <HistoryCardContainer>
            <HistoryTag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </HistoryCardContainer>
    );
};

export default HistoryCard;
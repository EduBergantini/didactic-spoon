import React from "react";

import { HistoryCardContainer, HistoryTag } from "./styles";

interface IHistoryCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryCard: React.FC<IHistoryCardProps> = ({cardColor, tagColor, title, subtitle, amount}) => {
    return (
        <HistoryCardContainer color={cardColor}>
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
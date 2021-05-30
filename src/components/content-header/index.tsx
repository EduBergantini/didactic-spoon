import React from "react"
import { ContainerHeaderContainer, FiltersControl, Title } from "./styles";

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({title, lineColor, children}) => {
    

    return (
        <ContainerHeaderContainer>
            <Title lineColor={lineColor}>{title}</Title>
            <FiltersControl>
                {children}
            </FiltersControl>
        </ContainerHeaderContainer>
    )
};

export default ContentHeader;
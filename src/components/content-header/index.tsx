import React from "react"
import { ContainerHeaderContainer, FiltersControl, Title } from "./styles";

const ContentHeader: React.FC = () => {
    return (
        <ContainerHeaderContainer>
            <Title>Título</Title>
            <FiltersControl>
                <button>Botão A</button>
                <button>Botão B</button>
            </FiltersControl>
        </ContainerHeaderContainer>
    )
};

export default ContentHeader;
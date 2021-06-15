import styled from "styled-components";

interface ITitleProps {
    lineColor: string;
}

export const ContainerHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 420px) {
        flex-direction: column;
    }
`;
export const Title = styled.h2<ITitleProps>`
    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor};
    }

    @media(max-width: 420px) {
        font-size: 22px;
        margin-bottom: 15px;
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 5px solid ${props => props.lineColor};
        }
    }
`;
export const FiltersControl = styled.div`
    display: flex;
    @media(max-width: 420px) {
        margin-bottom: 15px;
    }
`;

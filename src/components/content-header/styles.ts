import styled from "styled-components";

export const ContainerHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
interface ITitleProps {
    lineColor: string;
}
export const Title = styled.h2<ITitleProps>`
    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor};
    }
`;
export const FiltersControl = styled.div`
    display: flex;
`;

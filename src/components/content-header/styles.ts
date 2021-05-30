import styled from "styled-components";

export const ContainerHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.h2`
    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
`;
export const FiltersControl = styled.div``;

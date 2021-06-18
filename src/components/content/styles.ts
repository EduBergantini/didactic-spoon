import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.fontPrimary};
    padding: 25px;
    height: calc(100vh -70px);
    overflow-y: scroll;
    /* scrollbar-width: 10px;
    scrollbar-color: ${props => props.theme.colors.secondary}; */
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
    
`;
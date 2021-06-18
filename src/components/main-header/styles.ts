import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primaryFontColor};
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.detailsColor};
`;

export const Profile  = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Welcome  = styled.h3``;

export const UserName = styled.span``;

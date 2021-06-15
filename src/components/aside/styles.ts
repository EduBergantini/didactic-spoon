import { Link } from "react-router-dom";
import styled from "styled-components";

export const AsideContainer = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.white}
`;
export const AsideHeader = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;
export const LogoImage = styled.img`
    width: 40px;
    height: 40px;
`;
export const Title = styled.h3`
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 20px;    
`;
export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 7px 0;
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: x-large;
        margin-right: 5px;
    }
`;


import { Link } from "react-router-dom";
import styled, {css} from "styled-components";

interface IMobileAsideContainerProps {
    isMenuOpen: boolean;
}
interface IBackgroundImage {
    logoImg: string;
}

export const AsideContainer = styled.div<IMobileAsideContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.detailsColor};
    color: ${props => props.theme.colors.primaryFontColor};

    @media(max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        height: ${props => props.isMenuOpen? "100vh" : "70px"};
        overflow: hidden;
        width: 200px;
        
        ${props => !props.isMenuOpen && css`
            border-right: none;
            border-bottom: 1px solid ${props => props.theme.colors.detailsColor};
        `}
    }
`;
export const AsideHeader = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;
export const LogoImage = styled.div<IBackgroundImage>`
    background-color: ${props => props.theme.colors.primaryFontColor};
    mask: url(${props => props.logoImg}) no-repeat center / contain;
    width: 40px;
    height: 40px;
    @media(max-width: 600px) {
        display: none;
    }
`;
export const Title = styled.h3`
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
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
export const ToggleMenu = styled.button`
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    border: 1px solid ${props => props.theme.colors.primaryFontColor};
    color: ${props => props.theme.colors.primaryFontColor};
    background-color: transparent;
    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const MenuToggleContainer = styled.div<IMobileAsideContainerProps>`
    display: none;
    @media(max-width: 600px) {
        display: ${props => props.isMenuOpen ? "block" : "none"};
        position: absolute;
        bottom: 30px;
    }
`;
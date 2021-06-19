import React from "react";
import logoSvg from "../../assets/logo.svg";
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp, MdClose, MdMenu } from "react-icons/md";
import { AsideContainer, AsideHeader, LogoImage, Title, MenuContainer, MenuItemLink, ToggleMenu, MenuToggleContainer } from "./styles";
import { useAuthentication } from "../../contexts/auth-context";
import { useState } from "react";
import { useApplicationTheme } from "../../contexts/theme-context";
import Toggle from "../toggle";

const Aside: React.FC = () => {
    const { signOut } = useAuthentication();
    const { toggleTheme, theme } = useApplicationTheme();

    const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState<boolean>(() => theme.title === "dark");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleChangeThemeEvent = () => {
        setIsDarkThemeEnabled(!isDarkThemeEnabled);
        toggleTheme();
    }

    return (
        <AsideContainer isMenuOpen={isMenuOpen}>
            <AsideHeader>
                <ToggleMenu onClick={handleToggleMenu}>
                    {isMenuOpen? <MdClose/> : <MdMenu />}
                </ToggleMenu>

                <LogoImage logoImg={logoSvg} />
                <Title>Piggy Bank</Title>
            </AsideHeader>

            <MenuContainer>
                <MenuItemLink to="/" title="Link para o dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink to="/listar/entradas" title="Link para entradas na carteira">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink to="/listar/saidas" title="Link para saídas na carteira">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemLink to="/" onClick={signOut} title="Link para sair da aplicação">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>

            <MenuToggleContainer isMenuOpen={isMenuOpen}>
                <Toggle 
                    leftLabel="Light"
                    rightLabel="Dark"
                    checked={isDarkThemeEnabled}
                    onChange={handleChangeThemeEvent}
                    />
            </MenuToggleContainer>
        </AsideContainer>
    );
};

export default Aside;
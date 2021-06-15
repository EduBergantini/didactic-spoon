import React from "react";
import logoSvg from "../../assets/logo.svg";
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp } from "react-icons/md";
import { AsideContainer, AsideHeader, LogoImage, Title, MenuContainer, MenuItemLink } from "./styles";
import { useAuthentication } from "../../contexts/auth-context";

const Aside: React.FC = () => {

    const { signOut } = useAuthentication();

    return (
        <AsideContainer>
            <AsideHeader>
                <LogoImage src={logoSvg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
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
        </AsideContainer>
    );
};

export default Aside;
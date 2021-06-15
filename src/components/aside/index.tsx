import React from "react";
import logoSvg from "../../assets/logo.svg";
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp } from "react-icons/md";
import { AsideContainer, AsideHeader, LogoImage, Title, MenuContainer, MenuItemLink } from "./styles";

const Aside: React.FC = () => {
    return (
        <AsideContainer>
            <AsideHeader>
                <LogoImage src={logoSvg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </AsideHeader>

            <MenuContainer>
                <MenuItemLink href="/" title="Link para o dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/listar/entradas" title="Link para entradas na carteira">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/listar/saidas" title="Link para saídas na carteira">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="/sair" title="Link para sair da aplicação">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </AsideContainer>
    );
};

export default Aside;
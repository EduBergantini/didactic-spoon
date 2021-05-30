import React from "react";
import Aside from "../aside";
import Content from "../content";
import MainHeader from "../main-header";
import { LayoutGrid } from "./styles";

const Layout: React.FC = ({children}) => {
    return (
        <LayoutGrid>
            <MainHeader></MainHeader>
            <Aside></Aside>
            <Content>
                {children}
            </Content>
        </LayoutGrid>
    );
};

export default Layout;
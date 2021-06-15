import React, {useMemo} from "react";
import { useState } from "react";
import { useApplicationTheme } from "../../contexts/theme-context";
import emojis from "../../utils/emojis";
import Toggle from "../toggle";
import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
    const {toggleTheme, theme} = useApplicationTheme();
    const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState<boolean>(() => theme.title === "dark");

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    const handleChangeThemeEvent = () => {
        setIsDarkThemeEnabled(!isDarkThemeEnabled);
        toggleTheme();
    };

    return (
        <Container>
            <Toggle 
                leftLabel="Light"
                rightLabel="Dark"
                checked={isDarkThemeEnabled}
                onChange={handleChangeThemeEvent}
                />

            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Usuário #1</UserName>
            </Profile>
        </Container>
    );
};

export default MainHeader;
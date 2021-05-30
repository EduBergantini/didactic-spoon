import React, {useMemo} from "react";
import emojis from "../../utils/emojis";
import Toggle from "../toggle";
import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    return (
        <Container>
            <Toggle></Toggle>

            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Usuário #1</UserName>
            </Profile>
        </Container>
    );
};

export default MainHeader;
import React from "react";
import { SignInContainer, SignInForm, SignInLogo, SignInTitle } from "./styles";

import LogoImageSvg from "../../assets/logo.svg";
import CustomInputText from "../../components/custom-text-input";
import { useState } from "react";
import { useAuthentication } from "../../contexts/auth-context";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { signIn } = useAuthentication();

    return (
        <SignInContainer>
            <SignInLogo>
                <img src={LogoImageSvg} alt="Piggy Bank Logo" />
                <h2>Piggy Bank</h2>
            </SignInLogo>

            <SignInForm onSubmit={() => {signIn(email, password)}}>
                <SignInTitle>Entrar</SignInTitle>
                <CustomInputText type="email" placeholder="Digite seu e-mail" onChange={((evt) => setEmail(evt.target.value))} required />
                <CustomInputText type="password" placeholder="Digite sua senha" onChange={((evt) => setPassword(evt.target.value))} required />
                <button type="submit">Acessar</button>
            </SignInForm>
        </SignInContainer>
    );
};

export default SignIn;
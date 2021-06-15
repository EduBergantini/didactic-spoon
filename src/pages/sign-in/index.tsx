import React from "react";
import { SignInContainer, SignInForm, SignInLogo, SignInTitle } from "./styles";

import LogoImageSvg from "../../assets/logo.svg";
import CustomInputText from "../../components/custom-text-input";

const SignIn: React.FC = () => {
    return (
        <SignInContainer>
            <SignInLogo>
                <img src={LogoImageSvg} alt="BackOffice" />
                <h2>BackOffice</h2>
            </SignInLogo>

            <SignInForm onSubmit={() => {console.log("submit!")}}>
                <SignInTitle>Entrar</SignInTitle>
                <CustomInputText type="email" placeholder="Digite seu e-mail" required />
                <CustomInputText type="password" placeholder="Digite sua senha" required />
                <button type="submit">Acessar</button>
            </SignInForm>
        </SignInContainer>
    );
};

export default SignIn;
import styled from "styled-components";

export const SignInContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
`;
export const SignInLogo =  styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    > h2 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    }

    > img {
        width: 50px;
        height: 50px;
    }

`;
export const SignInForm =  styled.form`
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.tertiary};

    > button {
        width: 100%;
        margin: 7px 0;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.warning};
        transition: opacity .3s;
        &:hover {
            opacity: .7s;
        }

    }
`;
export const SignInTitle =  styled.div`
    color: ${props => props.theme.colors.white};
    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
`;
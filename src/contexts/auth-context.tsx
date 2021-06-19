import React, {createContext, useState, useContext} from "react";

interface IAuthContext {
    isLoggedIn: boolean;
    signIn(email: string, password: string): boolean;
    signOut(): void;
}

const AuthenticationContext = createContext<IAuthContext>({} as IAuthContext);

const AuthenticationProvider: React.FC = ({ children }) => {
    const authStorageKey = "BackOffice:SignInData:SignedIn";
    const [isLogged, setIsLogged] = useState<boolean>(() => {
        const storageInformation = localStorage.getItem(authStorageKey);
        return !!storageInformation;
    });

    const signIn = (email: string, password: string) => {
        if(email === "teste@email.com" && password === "123Mudar!") {
            localStorage.setItem(authStorageKey, "true");
            setIsLogged(true);
            return true;
        } else {
            alert("Usuário ou senha incorretos!");
            return false;
        }
    }

    const signOut = () => {
        localStorage.removeItem(authStorageKey);
        setIsLogged(false);
    }

    return (
        <AuthenticationContext.Provider value={{isLoggedIn: isLogged, signIn, signOut}}>
            { children }
        </AuthenticationContext.Provider>
    )
}

function useAuthentication(): IAuthContext {
    const context = useContext(AuthenticationContext);
    return context;
}

export {AuthenticationProvider, useAuthentication};
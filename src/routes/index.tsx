import { BrowserRouter } from "react-router-dom";
import { useAuthentication } from "../contexts/auth-context";

import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

const Routes = () => {
    const {isLoggedIn} = useAuthentication();
    return (
        <BrowserRouter>
            {
                isLoggedIn
                ? <AppRoutes /> 
                : <AuthRoutes />
            }
        </BrowserRouter>
    )
}

export default Routes;
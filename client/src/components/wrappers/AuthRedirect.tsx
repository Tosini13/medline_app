import axios from "axios";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { ERoutes } from "../../models/routes";
import { useGetCurrentUser } from "../../queries/users/getCurrentUser";

type TAuthRedirectProps = {};

const AuthRedirect: React.FC<TAuthRedirectProps> = ({ children }) => {
    const location = useLocation();
    const data = useGetCurrentUser();
    const user = data?.data;

    useEffect(() => {
        const AUTH_TOKEN = localStorage.getItem('token') ?? '';
        axios.defaults.headers.common['x-access-token'] = AUTH_TOKEN;
    }, [user]);

    if (!user && location.pathname !== ERoutes.logIn && location.pathname !== ERoutes.signUp) {
        console.log('TRUE', user);
        return <Navigate to={ERoutes.logIn} />
    }
    if (user && (location.pathname === ERoutes.logIn || location.pathname === ERoutes.signUp)) {
        console.log('TRUE', user);
        return <Navigate to={'/'} />
    }

    return (
        <>{children}</>
    );
};

export default AuthRedirect
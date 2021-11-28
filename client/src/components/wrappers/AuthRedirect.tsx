import { observer } from "mobx-react";
import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { ERoutes } from "../../models/routes";
import { AuthStoreContext } from "../../stores/Auth";

type TAuthRedirectProps = {};

const AuthRedirect: React.FC<TAuthRedirectProps> = observer(({ children }) => {
    const authStore = useContext(AuthStoreContext);
    const location = useLocation();

    if (!authStore.isLoggedIn && location.pathname !== ERoutes.logIn && location.pathname !== ERoutes.signUp) {
        return <Navigate to={ERoutes.logIn} />
    }
    if (authStore.isLoggedIn && (location.pathname === ERoutes.logIn || location.pathname === ERoutes.signUp)) {
        return <Navigate to={'/'} />
    }

    return (
        <>{children}</>
    );
});

export default AuthRedirect
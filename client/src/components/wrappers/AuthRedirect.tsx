import { observer } from "mobx-react";
import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { ERoutes } from "../../models/routes";
import { AuthStoreContext } from "../../stores/Auth";
import Loading from "../global/loading/Loading";

type TAuthRedirectProps = {};

const AuthRedirect: React.FC<TAuthRedirectProps> = observer(({ children }) => {
    const authStore = useContext(AuthStoreContext);
    const location = useLocation();

    const nonAuthPaths = [ERoutes.logIn, ERoutes.signUp, ERoutes.resetPassword, ERoutes.checkToken, ERoutes.setPassword]

    authStore.check();

    if (authStore.isLoggedIn === undefined) {
        return <Loading />;
    }

    if (!authStore.isLoggedIn && !nonAuthPaths.includes(location.pathname as ERoutes)) {
        return <Navigate to={ERoutes.logIn} />
    }
    if (authStore.isLoggedIn && (nonAuthPaths.includes(location.pathname as ERoutes))) {
        return <Navigate to={'/'} />
    }

    return (
        <>{children}</>
    );
});

export default AuthRedirect
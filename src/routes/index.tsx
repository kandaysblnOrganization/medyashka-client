import React, {FC, useEffect, useState} from 'react';
import {
    Navigate,
    Route,
    Routes, useLocation, useNavigate
} from "react-router-dom";
import {authRoutes, publicRoutes} from "./constants/routesList";
import {Layout} from "../layouts";
import {useTypedSelector} from "../hooks/redux/useTypedSelector";
import {useActions} from "../hooks/redux/useActions";

const RouteComponent: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {
        isAuth
    } = useTypedSelector(state => state.user);
    const {
        userCheckAuth
    } = useActions();

    useEffect(() => {
        (async () => {
            await checkAuth();
        })()
    }, [])

    const checkAuth = async () => {
        await setIsLoading(true);
        await userCheckAuth();
        await setIsLoading(false);
    }
    return (
        <>
            {Boolean(!isLoading) && (
                <Routes key="mainRoutes">
                    <Route path="/" element={<Layout isAuth={isAuth}/>}>
                        <>
                            {(isAuth && !isLoading) && (
                                <>
                                    {authRoutes.map(route =>
                                        <Route key={route.id} path={route.path} element={<route.element/>}/>)}
                                </>
                            )}
                            {publicRoutes.map(route => (
                                <>
                                    {route.index
                                        ? <Route key={route.id} index element={<route.element/>}/>
                                        : <Route key={route.id} path={route.path} element={<route.element/>}/>
                                    }
                                </>
                            ))}
                            <Route key="notFound" path="*" element={<Navigate to={'/'}/>}/>
                        </>
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default RouteComponent;
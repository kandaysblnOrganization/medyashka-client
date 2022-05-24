import React, {FC, useEffect} from 'react';
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import {authRoutes, publicRoutes} from "./constants/routesList";
import {Layout} from "../layouts";
import {useTypedSelector} from "../hooks/redux/useTypedSelector";
import {useActions} from "../hooks/redux/useActions";

const RouteComponent: FC = () => {
    const {
        isAuth
    } = useTypedSelector(state => state.user);
    const {
        userCheckAuth
    } = useActions();

    useEffect(() => {
        userCheckAuth();
    }, [])
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout isAuth={isAuth}/>}>
                    <>
                        {isAuth && (
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
                        <Route path="*" element={<Navigate to={'/'}/>}/>
                    </>
                </Route>
            </Routes>
        </>
    );
};

export default RouteComponent;
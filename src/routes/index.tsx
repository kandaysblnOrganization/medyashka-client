import React, {FC} from 'react';
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import {authRoutes, publicRoutes} from "./constants/routesList";
import {Layout} from "../layouts";

const RouteComponent: FC = () => {
    const isAuth = false;
    return (
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
    );
};

export default RouteComponent;
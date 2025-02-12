import React, {useCallback} from 'react';
import {AppRouteProps, routerConfig} from "../config/RouterConfig";
import {Route, Routes} from "react-router-dom";


const AppRouter = () => {
    const render = useCallback((route: AppRouteProps, index: number) => {
        return (
            <Route
                key={index}
                path={route.path}
                element={route.element}
            />
        )
    }, [])
    return (
        <Routes>
            {Object.values(routerConfig).map(render)}
        </Routes>
    );
};

export default AppRouter;
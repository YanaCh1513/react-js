import React from "react";
import { Route, Navigate, Outlet } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { selectIsAuth } from "../store/profile/selectors";

//  this doesn't work
export default function PrivateRoute1({ authenticated, ...rest }) {
    return authenticated
        ? (<Route {...rest} />)
        : (<Navigate to={{ pathname: "/login" }} />)
}

export const PrivateRoute = ({ component }) => {
    const isAuth = useSelector(selectIsAuth)

    if (!isAuth) {
        return <Navigate to="/login" />
    }

    return component ? component : <Outlet /> // component is alwais undefined
}
import React from "react";
import { Route, Navigate } from 'react-router-dom'

export default function PublicRoute({ authenticated, ...rest }) {
    return !authenticated
        ? (<Route {...rest} />)
        : (<Navigate to={{ pathname: "/charts" }} />)
}
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utilies';

function PublicRoute({ component: Component, restriced = false, ...rest }) {
    return (
        <Route {...rest} render = {props => (
            isLogin() && restriced 
            ?
            <Redirect to={"/"} />
            :
            <Component {...props} />
        )}
            
        />
    );
}

export default PublicRoute;
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render = {props => (
            isLogin() 
            ?
            <Component {...props} />
            :
            <Redirect to={"/Login"} />
        )}

        />
    );
}

export default PrivateRoute;
import React from 'react';

import Index from "./components/Index.jsx";

import {Route, DefaultRoute} from 'react-router';

export default (
    <Route name="home" path="/" handler={Index}>
        <DefaultRoute handler={Index}/>
    </Route>
);
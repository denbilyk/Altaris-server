import "../styles/main.scss";
import React from "react";
import Router from 'react-router';
import routes from './Routes.jsx';
import injectTapEventPlugin from "react-tap-event-plugin";


injectTapEventPlugin();
Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("content"));
});

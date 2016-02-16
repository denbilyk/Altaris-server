import React from 'react';
import ModuleView from './module-view/ModuleView.react.jsx'
import mui from 'material-ui'
import {Toolbar, ToolbarGroup , ToolbarTitle} from 'material-ui'
var ThemeManager = new mui.Styles.ThemeManager();


export default class PageHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="Welcome!" />
                    </ToolbarGroup>
                </Toolbar>
                <ModuleView id={"0xB6"} humid={35} temp={17}/>
            </div>
        )
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }
}

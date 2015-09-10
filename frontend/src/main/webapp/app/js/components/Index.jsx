import React from 'react';
import ModuleView from './module-view/ModuleView.react.jsx'

export default class PageHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello!!
                <ModuleView id={"0xB6"} humid={35} temp={17}/>
            </div>
        )
    }

;
}

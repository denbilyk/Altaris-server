import React from 'react';
import './ModuleView.scss'
import tpl from './ModuleView.jsx'

export default class ModuleView extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        let params = {
            id: this.props.id,
            humid: this.props.humid,
            temp: this.props.temp
        };
        return tpl(params);
    }

}
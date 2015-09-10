import React from 'react';

export default (context)=> {

    return (
        <div className="device-module">
            <div className="header">Device ID: {context.id}</div>
            <div className="status">
                <div className="logo"></div>
                <div className="humid">Humidity: {context.humid}%</div>
                <div className="temp">Temperature: {context.temp}&#x2103;</div>
            </div>
        </div>
    );
}
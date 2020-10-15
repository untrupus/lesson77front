import React from 'react';
import './SingleMessage.css';

const SingleMessage = props => {
    return (
        <div className="singleMessage">
            <div className="messageHead">
                <p className="name"><input type="checkbox"/>{props.name}</p>
                <span><b>{props.datetime}</b></span>
                <span>Id: {props.id}</span>
                <span className="triangle">&#10148;</span>
            </div>
            <div className="messageBody">
                <img src={props.src} className="img" alt="message"/>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default SingleMessage;
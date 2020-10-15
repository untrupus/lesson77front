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
                {props.src ? <img src={"http://localhost:8000/uploads/" + props.src} className="img" alt="message"/> : null}
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default SingleMessage;
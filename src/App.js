import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {showModal} from "./store/actionTypes";
import SingleMessage from "./components/SingleMessage/SingleMessage";
import Modal from "./components/Modal/Modal";
import './App.css';

function App() {
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <p className="thread"
                onClick={() => dispatch(showModal())}
            >[Start a New Thread]</p>
            {modal ? <Modal/> : null}

            <SingleMessage
                name="Anonymous"
                datetime="10/14/20(Wed)15:16:48"
                src="https://i.4cdn.org/lgbt/1602668289744s.jpg"
                id="sdjkdkjs^&%"
                text="I want everyone to know what a dumb nympho slut I am, imagine they take one look at the room and then just bend me over cause they know I won't fight back"
            />
            <SingleMessage
                name="Anonymous"
                datetime="10/14/20(Wed)15:16:48"
                src="https://i2-prod.mirror.co.uk/incoming/article4142547.ece/ALTERNATES/s1200c/MAIN-jlaw-4chan.jpg"
                id="sdjkdkjs^&%"
                text="I want everyone to know what a dumb nympho slut"
            />
        </div>
    );
}

export default App;

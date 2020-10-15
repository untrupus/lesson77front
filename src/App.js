import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {showModal, getMessages} from "./store/actionTypes";
import SingleMessage from "./components/SingleMessage/SingleMessage";
import Modal from "./components/Modal/Modal";
import './App.css';

function App() {
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages);

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    const messageList = messages.map(message => {
        return (
            <SingleMessage
                name={message.name ? message.name : 'Anonymous'}
                datetime={message.datetime.substr(0, 19).replace('T', ' ')}
                src="https://i.4cdn.org/lgbt/1602668289744s.jpg"
                id={message.id}
                key={message.id}
                text={message.text}
            />
        )
    });

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

            {messageList}
        </div>
    );
}

export default App;

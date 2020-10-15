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
                src={message.image}
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

            {messageList}
        </div>
    );
}

export default App;

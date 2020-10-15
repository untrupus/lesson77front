import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {closeModal, postMessage} from "../../store/actionTypes";
import './Modal.css';

const Modal = () => {
    const dispatch = useDispatch();

    const [message, setMessage] = useState({
        name: '',
        text: ''
    });

    const onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setMessage(prevState => ({...prevState, [name]: value}));
    };

    const sendMessage = () => {
        dispatch(postMessage(message));
        setMessage({name: '', text: ''});
        dispatch(closeModal());
    };

    return (
        <div className="backdrop">
            <div className="modal">
                <input type="text"
                       name="name"
                       value={message.name}
                       className="field"
                       placeholder="Name"
                       onChange={onChangeHandler}
                />
                <input type="text"
                       name="text"
                       value={message.text}
                       className="field"
                       placeholder="Message"
                       onChange={onChangeHandler}
                />
                <button type="button" className="btn"
                        onClick={sendMessage}
                >Post
                </button>
                <button type="button" className="btn"
                        onClick={() => dispatch(closeModal())}
                >Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
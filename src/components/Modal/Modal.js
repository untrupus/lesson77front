import React, {useState, useRef} from 'react';
import {useDispatch} from "react-redux";
import {closeModal, postMessage} from "../../store/actionTypes";
import './Modal.css';

const Modal = () => {
    const dispatch = useDispatch();

    const [message, setMessage] = useState({
        name: '',
        text: '',
        image: ''
    });

    const inputRef = useRef();

    const onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setMessage(prevState => ({...prevState, [name]: value}));
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setMessage(prevState => ({
            ...prevState,
            [name]: file
        }));
    }

    const sendMessage = () => {
        const formData = new FormData();
        Object.keys(message).forEach(key => {
            formData.append(key, message[key]);
        });
        dispatch(postMessage(formData));
        setMessage({name: '', text: '', image: ''});
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
                       required={true}
                       onChange={onChangeHandler}
                />
                <input type="file"
                       name="image"
                       className="field"
                       ref={inputRef}
                       onChange={fileChangeHandler}
                />
                <div className="btns">
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
        </div>
    );
};

export default Modal;
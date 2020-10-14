import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../store/actionTypes";
import './Modal.css';

const Modal = () => {
    const modal = useSelector(state => state.modal);
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

    return (
        <div className="backdrop" onClick={() => dispatch(closeModal())}>
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
                <button type="button" className="btn">Post</button>
            </div>
        </div>
    );
};

export default Modal;
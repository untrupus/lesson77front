import {
    CLOSE_MODAL,
    SHOW_MODAL,
    POST_MESSAGE_ERROR,
    POST_MESSAGE_SUCCESS,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_ERROR,
} from "./actions";

import axiosOrder from "../axiosOrder";

export const showModal = () => {
  return {type: SHOW_MODAL}
};

export const closeModal = () => {
  return {type: CLOSE_MODAL}
};

const postMessageSuccess = () => {
    return {type: POST_MESSAGE_SUCCESS};
};
const postMessagesError = error => {
    return {type: POST_MESSAGE_ERROR, error};
};

export const postMessage = (data) => {
    return async dispatch => {
        try {
            await axiosOrder.post('', data);
            dispatch(postMessageSuccess());
        } catch (e) {
            dispatch(postMessagesError(e.response.data));
        }
    };
};

const fetchMessagesSuccess = value => {
    return {type: FETCH_MESSAGES_SUCCESS, value};
};

const fetchMessagesError = error => {
    return {type: FETCH_MESSAGES_ERROR, error};
};

export const getMessages = () => {
    return async dispatch => {
        try {
            const response = await axiosOrder();
            dispatch(fetchMessagesSuccess(response.data));
        } catch (e) {
            dispatch(fetchMessagesError(e))
        }
    };
};
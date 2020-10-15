import {
    CLOSE_MODAL,
    SHOW_MODAL,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_ERROR,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_ERROR,
} from "./actions";

const initialState = {
    modal: false,
    error: {},
    messages: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, modal: true}
        case CLOSE_MODAL:
            return {...state, modal: false}
        case FETCH_MESSAGES_SUCCESS:
            return {...state, messages: action.value}
        case FETCH_MESSAGES_ERROR:
            return {...state, getError: action.error}
        case POST_MESSAGE_SUCCESS:
            return state;
        case POST_MESSAGE_ERROR:
            return {...state, error: action.error}
        default:
            return state;
    }
};

export default reducer;
import {
    CLOSE_MODAL,
    SHOW_MODAL,
} from "./actions";

const initialState = {
    modal: false,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, modal: true}
        case CLOSE_MODAL:
            return {...state, modal: false}
        default:
            return state;
    }
};

export default reducer;
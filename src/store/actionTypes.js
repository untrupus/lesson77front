import {
    CLOSE_MODAL,
    SHOW_MODAL,
} from "./actions";

import axiosOrder from "../axiosOrder";

export const showModal = () => {
  return {type: SHOW_MODAL}
};

export const closeModal = () => {
  return {type: CLOSE_MODAL}
};
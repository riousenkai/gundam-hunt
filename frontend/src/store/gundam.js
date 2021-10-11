import { csrfFetch } from "./csrf";

const GET_ALL_GUNDAMS = "gundam/getAllGundams"

const getAllGundams = (gundams) => {
    return {
        type: GET_ALL_GUNDAMS,
        payload: gundams
    }
}

const initialState = { gundams: null, gundam: null };

const gundamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GUNDAMS:
        return {...state, gundams: action.payload}
    default:
      return state;
  }
};

export default gundamReducer;

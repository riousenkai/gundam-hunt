import { csrfFetch } from "./csrf";

const GET_ALL_GUNDAMS = "gundam/getAllGundams"

const getAllGundams = (gundams) => {
    return {
        type: GET_ALL_GUNDAMS,
        payload: gundams
    }
}

export const getGundams = () => async (dispatch) => {
    const res = await csrfFetch(`/api/gundam`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await res.json()
    dispatch(getAllGundams(data))
}

const initialState = { gundams: null, gundam: null };

const gundamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GUNDAMS:
        return {...state, gundams: action.payload.gundam}
    default:
      return state;
  }
};

export default gundamReducer;

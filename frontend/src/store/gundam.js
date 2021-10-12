import { csrfFetch } from "./csrf";

const GET_ALL_GUNDAMS = "gundam/getAllGundams"
const GET_ONE_GUNDAM = "gundam/getOneGundam"

const getOneGundam = (gundam) => {
    return {
        type: GET_ALL_GUNDAMS,
        payload: gundam
    }
}

const getAllGundams = (gundams) => {
    return {
        type: GET_ALL_GUNDAMS,
        payload: gundams
    }
}

export const singleGundam = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/gundam/${id}`)
    const data = await res.json()
    dispatch(getOneGundam(data))
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
    case GET_ONE_GUNDAM:
        return {...state, gundam: action.payload}
    default:
      return state;
  }
};

export default gundamReducer;

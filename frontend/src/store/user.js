import { csrfFetch } from './csrf';

const GET_USER = "user/getUser"

const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user,
    }
}

export const retrieveUser = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/profile/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    })
    const data = await res.json()
    dispatch(getUser(data))
}

const userReducer = (state = {user: null}, action) => {
    switch(action.type) {
        case GET_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export default userReducer;

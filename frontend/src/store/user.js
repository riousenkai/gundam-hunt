import { csrfFetch } from './csrf';

const GET_USER = "user/getUser"
const GET_ALL_USERS = "user/getAllUsers"

const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user,
    }
}

const getAllUsers = (users) => {
    return {
        type: GET_ALL_USERS,
        payload: users,
    }
}

export const retrieveAllUsers = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    })
    const data = await res.json()
    dispatch(getAllUsers(data))
}

export const retrieveUser = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/profile/${userId}`, {
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
            return {...state, user: action.payload.user}
        case GET_ALL_USERS:
            return {...state, users: action.payload}
        default:
            return state;
    }
}

export default userReducer;

const UserReducer = (state = {user: null}, action) => {
    switch(action.type) {
        case GET_USER:
            return {...state, user: action.payload}
    }
}

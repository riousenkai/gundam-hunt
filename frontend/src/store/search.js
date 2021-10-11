import { csrfFetch } from "./csrf";

const SEARCH_GUNDAMS = "gundam/searchGundams";
const SEARCH_USERS = "gundam/searchUsers"

const searchGundams = (gundams) => {
  return {
    type: SEARCH_GUNDAMS,
    payload: gundams,
  };
};

const searchUsers = (users) => {
  return {
    type: SEARCH_USERS,
    payload: users,
  }
}

export const searchFiveUsers = (results) => async (dispatch) => {
  const res = await csrfFetch(`/api/search/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ results })
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(searchUsers(data));
  }
};


export const searchFiveGundams = (results) => async (dispatch) => {
  const res = await csrfFetch(`/api/search/gundams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ results })
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(searchGundams(data));
  }
};

const initialState = { gundams: {}, users: {} };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_GUNDAMS:
      return { ...state, gundams: action.payload };
    case SEARCH_USERS:
      return { ...state, users: action.payload}
    default:
      return state;
  }
};

export default searchReducer;

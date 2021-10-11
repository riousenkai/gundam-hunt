import { csrfFetch } from "./csrf";

const SEARCH_GUNDAMS = "gundam/searchGundams";

const searchGundams = (gundams) => {
  return {
    type: SEARCH_GUNDAMS,
    payload: gundams,
  };
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

const initialState = { gundams: null, users: null };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_GUNDAMS:
      return { ...state, gundams: action.payload };
    default:
      return state;
  }
};

export default searchReducer;

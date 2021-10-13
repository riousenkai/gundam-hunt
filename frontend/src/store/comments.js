import { csrfFetch } from "./csrf";

const GET_COMMENTS = "comments/getGundamComments";

const getGundamComments = (comments, gundamId) => {
  return {
    type: GET_COMMENTS,
    comments,
    gundamId,
  };
};

export const getComments = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`);
  const data = await res.json();
  dispatch(getGundamComments(data, id));
};

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, [action.gundamId]: [...action.comments] };
    default:
      return state;
  }
};

export default commentReducer;

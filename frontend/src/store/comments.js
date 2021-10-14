import { csrfFetch } from "./csrf";

const GET_COMMENTS = "comments/getGundamComments";
const GET_USER_COMMENTS = "comments/getUserComments"

const getGundamComments = (comments, gundamId) => {
  return {
    type: GET_COMMENTS,
    comments,
    gundamId,
  };
};

const getUserComments = (comments) => {
  return {
    type: GET_USER_COMMENTS,
    comments,
  }
}

export const getComments = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`);
  const data = await res.json();
  dispatch(getGundamComments(data, id));
};

export const editComment = (comment, id, commentId) => async(dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  })
  const data = await res.json();
  dispatch(getGundamComments(data, id))
}

export const deleteComment = (id, commentId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await res.json();
  dispatch(getGundamComments(data, id))
}

export const createComment = (payload, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  })
  const data = await res.json();
  dispatch(getGundamComments(data, id))
}

export const getLimitedComment = (userId) => async (dispatch) => {
  const res = await fetch(`/api/comments/user/${userId}/limit`)
  const data = await res.json()
  dispatch(getUserComments(data))
}

const initialState = { 0: []};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, [action.gundamId]: action.comments};
    case GET_USER_COMMENTS:
      return { ...state, user: action.comments}
    default:
      return state;
  }
};

export default commentReducer;

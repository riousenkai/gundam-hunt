import { csrfFetch } from "./csrf";

const GET_ALL_GUNDAMS = "gundam/getAllGundams";
const GET_ONE_GUNDAM = "gundam/getOneGundam";
const CREATE_GUNDAM = "gundam/createGundam";
const GET_USER_GUNDAMS = "gundam/obtainUserGundams";

const getOneGundam = (gundam) => {
  return {
    type: GET_ONE_GUNDAM,
    payload: gundam,
  };
};

const getAllGundams = (gundams) => {
  return {
    type: GET_ALL_GUNDAMS,
    payload: gundams,
  };
};

const createGundam = (gundam) => {
  return {
    type: CREATE_GUNDAM,
    payload: gundam,
  };
};

const obtainUserGundams = (gundams, id) => {
  return {
    type: GET_USER_GUNDAMS,
    payload: gundams,
    id,
  };
};

export const singleGundam = (id) => async (dispatch) => {
  const res = await fetch(`/api/gundam/${id}`);
  const data = await res.json();
  dispatch(getOneGundam(data));
};

export const getGundams = () => async (dispatch) => {
  const res = await csrfFetch(`/api/gundam`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(getAllGundams(data));
};

export const getUserGundams = (id) => async (dispatch) => {
  const res = await fetch(`/api/gundam/user/${id}`);
  const data = res.json();
  dispatch(obtainUserGundams(data, id));
};

export const makeGundam = (gundam) => async (dispatch) => {
  const res = await csrfFetch(`/api/gundam`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gundam),
  });
  const data = await res.json();
  dispatch(createGundam(data));
  return data.id;
};

export const deleteGundam = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/gundam/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = res.json();
  dispatch(getAllGundams(data));
};

export const fixGundam = (gundam, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/gundam/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gundam),
  });
  const data = await res.json();
  dispatch(createGundam(data));
  return data.id;
};

const initialState = { gundams: null, users: null };

const gundamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GUNDAMS:
      return { ...state, gundams: action.payload.gundam };
    case GET_ONE_GUNDAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_GUNDAM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_USER_GUNDAMS:
      return { ...state, users: { [action.id]: action.payload } };
    default:
      return state;
  }
};

export default gundamReducer;

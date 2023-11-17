import {
  CREATE_USER_SUCCESS,
  DELETE_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_USER_BY_NAME_SUCCESS,
} from "../Actions/action";

export const userReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      console.log("put user in saga ?:-", action);

      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const userReducerById = (state = { userById: {} }, action) => {
  switch (action.type) {
    case GET_USER_BY_ID_SUCCESS:
      console.log("put userId in saga ?:-", action);

      return { ...state, userById: action.userId };
    default:
      return state;
  }
};
export const userReducerByName = (state = { userbyName: {} }, action) => {
  switch (action.type) {
    case GET_USER_BY_NAME_SUCCESS:
      console.log("put USER NAME in saga ?:-", action);

      return { ...state, userById: action.userId };
    default:
      return state;
  }
};

export const deleteReducerById = (state = { deleteById: {} }, action) => {
  switch (action.type) {
    case DELETE_USER_BY_ID_SUCCESS:
      console.log("delete userId in saga ?:-", action);

      return { ...state, deleteById: action.Id }; // Corrected from action.userId to action.deleteById
    default:
      return state;
  }
};
const initialState = {
  users: [],
};

export const modifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.user.id ? action.user : user
        ),
      };
    default:
      return state;
  }
};

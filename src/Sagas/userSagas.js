import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID,
  DELETE_USER,
  DELETE_USER_BY_ID_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  CREATE_USER,
  UPDATE_USER,
  GET_USER_BY_NAME,
  GET_USER_BY_NAME_SUCCESS,
  GET_USER_BY_NAME_FAILURE
} from "../Actions/action";
import {
  usersFetch,
  getUserByIdApi,
  deleteUserByIdApi,
  createUser,
  updateUserApi,
  getUserByUsernameApi,
} from "../Apis/api";

function* workGetWorkerFetch() {
  try {
    const user = yield call(usersFetch);
    yield put({ type: GET_USER_SUCCESS, user });
  } catch (error) {
    console.error(error);
  }
}

function* getUserById(action) {
  try {
    console.log("call userId in saga:-", action);

    const userId = yield call(getUserByIdApi, action.userId);
    console.log("call userId in saga:-", userId);
    yield put({ type: GET_USER_BY_ID_SUCCESS, userId });
  } catch (error) {
    yield put({ type: GET_USER_BY_ID_FAILURE, error });
  }
}
function* getUserByUserName(action) {
  try {
    console.log("call userId in saga:-", action);

    const userName = yield call(getUserByUsernameApi, action.userName);
    console.log("call userId in saga:-", userName);
    yield put({ type: GET_USER_BY_NAME_SUCCESS, userName });
  } catch (error) {
    yield put({ type: GET_USER_BY_NAME_FAILURE, error });
  }
}
function* deleteUserById(action) {
  const Id = yield call(deleteUserByIdApi, action.Id);
  console.log("call deleteId in saga:-", Id);
  yield put({ type: DELETE_USER_BY_ID_SUCCESS, Id });
}

function* createUserSaga(action) {
  try {
    console.log("in createUserSaga ,hit reaching here?:-", action);
    const user = yield call(createUser, action.userdata);
    yield put({ type: CREATE_USER_SUCCESS, user });
  } catch (error) {
    // Handle error
  }
}

function* updateUserSaga(action) {
  console.log("in updateUserSaga ,hit reaching here?:-", action);

  try {
    const user = yield call(updateUserApi, action.userId, action.userData);
    yield put({ type: UPDATE_USER_SUCCESS, user });
  } catch (error) {
    // Handle error
  }
}

export function* watchGetUser() {
  yield takeEvery(GET_USER, workGetWorkerFetch);
}

export function* watchGetUserById() {
  yield takeEvery(GET_USER_BY_ID, getUserById);
}
export function* watchGetUserByUserName() {
  yield takeEvery(GET_USER_BY_NAME, getUserByUserName);
}
export function* watchDeleteUserById() {
  yield takeEvery(DELETE_USER, deleteUserById);
}
export function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUserSaga);
}
export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUserSaga);
}

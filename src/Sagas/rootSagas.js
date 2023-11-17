import { all } from "redux-saga/effects";
import {
  watchCreateUser,
  watchDeleteUserById,
  watchGetUser,
  watchGetUserById,
  watchUpdateUser,
  watchGetUserByUserName
} from "./userSagas";

export default function* rootSaga() {
  yield all([
    watchGetUser(),
    watchGetUserById(),
    watchDeleteUserById(),
    watchCreateUser(),
    watchUpdateUser(),
    watchGetUserByUserName()
  ]);
}

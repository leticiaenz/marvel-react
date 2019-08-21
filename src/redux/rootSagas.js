/* Effects */
import { all, takeLatest } from "redux-saga/effects";
import { charactersSagas } from "./characters/sagas";
import { characterDetailsSagas } from "./characterDetails/sagas";
import { Types as CharacterTypes } from "./characters/types";
import { Types as CharacterDetailsTypes } from "./characterDetails/types";

export default function* rootSagas() {
  // here we initialize all the sagas from different files
  yield all([
    takeLatest(CharacterTypes.REQUEST, charactersSagas),
    takeLatest(CharacterDetailsTypes.REQUEST, characterDetailsSagas)
  ]);
}

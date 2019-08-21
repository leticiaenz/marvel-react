//sagas
import { call, put } from "redux-saga/effects";
import CharacterService from "../../services/characters";

import { Creators as CharacterCreators } from "../characters/types";

export function* charactersSagas(action) {
  try {
    const response = yield call(
      CharacterService.getCharacters,
      action.payload.data
    );

    yield put(CharacterCreators.addCharacterSucess(response.data.data.results));
  } catch (err) {
    console.log(err);
  }
}

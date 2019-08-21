//sagas
import { call, put } from "redux-saga/effects";
import CharacterService from "../../services/characters";

import { Creators as CharacterDetailsCreators } from "../characterDetails/types";

export function* characterDetailsSagas(action) {
  try {
    const response = yield call(
      CharacterService.getCharacterDetail,
      action.payload.data
    );

    yield put(
      CharacterDetailsCreators.addCharacterDetailSucess(
        response.data.data.results[0]
      )
    );
  } catch (err) {
    console.log(err);
  }
}

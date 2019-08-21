import { Types as CharacterTypes } from "./types";

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function Characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CharacterTypes.SUCESS:
      return { data: [...action.payload.data], loading: false };
    case CharacterTypes.REQUEST:
      return { ...state, loading: true };
    case CharacterTypes.FAILURE:
      return state;
    default:
      return state;
  }
}

import { Types as CharacterDetailsTypes } from "./types";

const INITIAL_STATE = null;

export default function CharacterDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CharacterDetailsTypes.SUCESS:
      return { ...action.payload.data };
    case CharacterDetailsTypes.REQUEST:
      return state;
    case CharacterDetailsTypes.FAILURE:
      return state;
    case CharacterDetailsTypes.RESET:
      return null;
    default:
      return state;
  }
}

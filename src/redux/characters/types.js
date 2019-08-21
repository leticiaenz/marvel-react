// types
export const Types = {
  REQUEST: "CHARACTER_REQUEST",
  SUCESS: "CHARACTER_SUCESS",
  FAILURE: "CHARACTER_FAILURE"
};

// dispatchs
export const Creators = {
  addCharacterRequest: data => ({
    type: Types.REQUEST,
    payload: { data }
  }),

  addCharacterSucess: data => ({
    type: Types.SUCESS,
    payload: { data }
  }),

  addCharacterFailure: data => ({
    type: Types.FAILURE,
    payload: { data }
  })
};

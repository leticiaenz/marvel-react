// types
export const Types = {
  REQUEST: "CHARACTER_DEATIL_REQUEST",
  SUCESS: "CHARACTER_DEATIL_SUCESS",
  FAILURE: "CHARACTER_DEATIL_FAILURE",
  RESET: "CHARACTER_DEATIL_RESET"
};

// dispatchs
export const Creators = {
  addCharacterDetailRequest: data => ({
    type: Types.REQUEST,
    payload: { data }
  }),

  addCharacterDetailSucess: data => ({
    type: Types.SUCESS,
    payload: { data }
  }),

  resetCharacterDetail: data => ({
    type: Types.RESET,
    payload: { data }
  }),

  addCharacterDetailFailure: data => ({
    type: Types.FAILURE,
    payload: { data }
  })
};

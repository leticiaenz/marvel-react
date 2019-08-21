/* Modules */
import { combineReducers } from "redux";

/* Reducers */
import { reducer as formReducer } from "redux-form";

import Characters from "./characters/reducer";
import CharactersDetails from "./characterDetails/reducer";

// all the reducers are in one place
const rootReducers = combineReducers({ Characters, CharactersDetails });

export default rootReducers;

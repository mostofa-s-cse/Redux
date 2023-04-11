import { actionType } from "./ActionType";

export const initialState = {
  firstname: "",
  lastname: "",
  gender: "",
  course: "",
  countryCode: "",
  phone: "",
  term: false,
  // count: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionType.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    default:
      return state;
  }
};

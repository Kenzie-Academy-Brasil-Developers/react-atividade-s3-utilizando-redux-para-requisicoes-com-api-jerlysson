import { ADD_DIGIMONS } from "./actionType";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      const { digimon } = action;
      return [...state, digimon];
    default:
      return state;
  }
};

export default digimonsReducer;

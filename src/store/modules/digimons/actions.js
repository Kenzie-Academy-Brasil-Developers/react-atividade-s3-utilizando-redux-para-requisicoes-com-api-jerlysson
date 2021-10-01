import { ADD_DIGIMONS } from "./actionType";

export const addDigimon = (digimon) => ({
  type: ADD_DIGIMONS,
  digimon,
});

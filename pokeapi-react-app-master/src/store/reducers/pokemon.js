import { ADD_POKEMON } from '../constants/action-types';

// state: {
//   [pokemonId]: Pokemon,
// }
const pokemon = (state = {}, action) => {
  switch (action.type) {
    case ADD_POKEMON: {
      return {
        ...state,
        [action.pokemon.id]: action.pokemon
      };
    }
    default:
      return state;
  }
};

export default pokemon;

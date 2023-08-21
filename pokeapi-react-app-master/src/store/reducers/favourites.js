import { ADD_FAVOURITES } from '../constants/action-types';

// state = Array<Pokemon>
const favourites = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVOURITES: {
      return action.favourites;
    }
    default:
      return state;
  }
};

export default favourites;

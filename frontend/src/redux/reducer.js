import { combineReducers } from 'react-redux';
import { ADD_USER, DELETE_USER } from './actions';

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        posts: [...state.user, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        posts: state.user.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
    posts: userReducer
});
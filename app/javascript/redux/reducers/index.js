// app/javascript/redux/reducers/index.js
import { combineReducers } from 'redux';

const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import registerReducer from './reducers/registerReducer';

const rootReducer = combineReducers({
  register: registerReducer
});

export default rootReducer;

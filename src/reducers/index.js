import { combineReducers } from 'redux';

import tracks from './reducers';
import filtered from './filter';


const combineReducer = combineReducers({tracks, filtered})


export default combineReducer;

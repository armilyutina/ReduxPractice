import { createStore } from 'redux';
import rootReducer from './reducers/index'
import INITIAL_STATE from './INITIAL_STATE'


const configureStore = preloadState => (
  createStore(
    rootReducer,
    preloadState
  )
);


const store = configureStore({ })

export default store;

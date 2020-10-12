import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import { save } from 'redux-localstorage-simple';

const configureStore = preloadState => (
  createStore(
    rootReducer,
    preloadState,
    applyMiddleware(save({ namespase: 'playlist'}))
  )
);


const store = configureStore({ })

export default store;

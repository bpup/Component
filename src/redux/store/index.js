import Reducers from 'REDUCER'
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
let store = createStore(Reducers,applyMiddleware(thunkMiddleware));

export default store;
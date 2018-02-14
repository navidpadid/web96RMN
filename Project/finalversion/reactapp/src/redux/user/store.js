import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import reduceruser from './Reducers'
import reducerOnline from './componentPlayer/reducerOnline'


//import rootReducer from './modules/index'

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);


const reducer = combineReducers({
    router: routerReducer,
    form: formReducer,
    reducerOnline,
    reduceruser,
});


export default createStore(
    reducer,
    initialState,
    composedEnhancers
)



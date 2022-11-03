import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App.js'
import './index.css'

//will define the reducers as the file that contains the function to be called automatically when dispatch(type, payload) is called
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'))
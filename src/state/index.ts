import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import mint2 from './mint2/reducer'

const store = configureStore({
    reducer: {
      mint2
    },
    //https://redux-toolkit.js.org/api/configureStore
    devTools: true

    
    
})


export default store

export type AppDispatch = typeof store.dispatch


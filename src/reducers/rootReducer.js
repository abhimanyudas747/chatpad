import {combineReducers} from 'redux';
import messengerBodyReducer from './messengerBodyReducer';
import appReducer from './appReducer'
import sidebarReducer from './sidebarReducer'

const rootReducer = combineReducers({
    messengerBodyReducer: messengerBodyReducer,
    appReducer: appReducer,
    sidebarReducer: sidebarReducer

})

export default rootReducer;
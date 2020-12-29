import {combineReducers} from 'redux';
import messengerBodyReducer from './messengerBodyReducer';
import appReducer from './appReducer'

const rootReducer = combineReducers({
    messengerBodyReducer: messengerBodyReducer,
    appReducer: appReducer
})

export default rootReducer;
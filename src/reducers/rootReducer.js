import {combineReducers} from 'redux';
import messengerBodyReducer from './messengerBodyReducer';

const rootReducer = combineReducers({
    messengerBodyReducer: messengerBodyReducer
})

export default rootReducer;
import {combineReducers} from 'redux';
import userReducer from './user_reducer'
import sensorReducer from './sensor_reducer'

const GlobalState = (combineReducers({
    user: userReducer,
    sensor: sensorReducer
}))

export default GlobalState;
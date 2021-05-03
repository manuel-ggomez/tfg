import {combineReducers} from 'redux';
import userReducer from './user_reducer'
import sensorReducer from './sensor_reducer'
import topicReducer from './topic_reducer'

const GlobalState = (combineReducers({
    user: userReducer,
    sensor: sensorReducer,
    topic: topicReducer
}))

export default GlobalState;
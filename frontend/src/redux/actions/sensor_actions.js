import axios from 'axios';

export const createSensor = sensor => dispatch => {
    axios.post('/sensor/create', sensor)
        .then(res => {
            dispatch(getSensors())
        })
}

export const getSensors = () => dispatch => {
    axios.get('/sensor/getSensors')
        .then(res => {
            dispatch({
                type: 'GET_SENSORS',
                payload: res.data
            })
        })
}

export const deleteSensor = (id) => dispatch => {
    axios.delete('/sensor/delete/'+id)
        .then(res => {
            if (res.data) {
                dispatch(getSensors())
            }
        })
}

export const resetSensorError = () => dispatch => {
    dispatch({
        type: 'SENSOR_ERROR',
        payload: ""
    })
}

export const resetSensorSuccess = () => dispatch => {
    dispatch({
        type: 'SENSOR_SUCCESS',
        payload: ""
    })
}
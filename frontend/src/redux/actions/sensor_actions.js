import axios from 'axios';

export const createSensor = sensor => dispatch => {
    axios.post('/sensor/create', sensor)
        .then(res => {
            if (res.data.id !== undefined) {
                dispatch(getSensors())
                dispatch({
                    type: 'SENSOR_SUCCESS',
                    payload: "Sensor creado con éxito"
                })
            } else {
                let error = res.data.split(' ')[0]
                switch(error){
                    case "name":
                        error = "Ya existe un sensor con este nombre"
                        break;
                    case "ip":
                        error = "Ya existe un sensor con esta dirección IP"
                        break;
                    case "mac":
                        error = "Ya existe un sensor con esta dirección MAC"
                        break;
                    default:
                        error = ""
                }
                dispatch({
                    type: 'SENSOR_ERROR',
                    payload: error
                })
            }
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
                dispatch({
                    type: 'SENSOR_SUCCESS',
                    payload: "Sensor eliminado con éxito"
                })
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
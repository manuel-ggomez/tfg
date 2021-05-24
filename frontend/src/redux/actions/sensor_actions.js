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

export const openSensor = (ip) => dispatch => {
    axios.put('/sensor/openSensor', {ip})
    .then(res => {
        console.log(res.data)
        if (res.data) {
            dispatch({
                type: 'SENSOR_OPENED',
                payload: true
            })
        }
    })
}

export const openSubsistema = (name) => dispatch => {
    axios.put('/sensor/openSubsistema', {name})
    .then(res => {
        console.log(res.data)
        if (res.data) {
            dispatch({
                type: 'SENSOR_OPENED',
                payload: true
            })
        }
    })
}

export const runScript = () => dispatch => {
    axios.put('/sensor/runScript')
    .then(res => {
        console.log(res.data)
        if (res.data) {
            dispatch({
                type: 'SCRIPT_STATE',
                payload: true
            })
        }
    })
}

export const stopScript = () => dispatch => {
    axios.put('/sensor/stopScript')
    .then(res => {
        console.log(res.data)
        if (res.data) {
            dispatch({
                type: 'SCRIPT_STATE',
                payload: false
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
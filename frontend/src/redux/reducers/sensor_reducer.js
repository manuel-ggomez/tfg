const initialState = {
    sensors: [],
    sensorOpened: false,
    sensorStatus: false,
    scriptState: false,
    error: "",
    success: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case 'GET_SENSORS':
            return {
                ...state,
                sensors: action.payload
            }
        case 'SENSOR_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'SENSOR_SUCCESS':
            return {
                ...state,
                success: action.payload
            }
        case 'SENSOR_OPENED':
            return {
                ...state,
                sensorOpened: action.payload,
                sensorStatus: !state.sensorStatus
            }
        case 'SCRIPT_STATE':
            return {
                ...state,
                scriptState: action.payload
            }
        default:
            return state;
    }
}

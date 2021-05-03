const initialState = {
    sensors: [],
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
        default:
            return state;
    }
}

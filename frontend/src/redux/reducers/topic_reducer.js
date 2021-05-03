const initialState = {
    topics: [],
    error: "",
    success: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case 'GET_TOPICS':
            return {
                ...state,
                topics: action.payload
            }
        case 'TOPIC_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'TOPIC_SUCCESS':
            return {
                ...state,
                success: action.payload
            }
        default:
            return state;
    }
}

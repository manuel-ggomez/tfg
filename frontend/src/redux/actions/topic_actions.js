import axios from 'axios';

export const createTopic = (name) => dispatch => {
    axios.post('/topic/create', {name})
        .then(res => {
            if (res.data) {
                dispatch(getTopics())
                dispatch({
                    type: 'TOPIC_SUCCESS',
                    payload: "Topic creado con éxito"
                })
            } else {
                dispatch({
                    type: 'TOPIC_ERROR',
                    payload: "Ya existe un topic con este nombre"
                })
            }
        })
}

export const getTopics = () => dispatch => {
    axios.get('/topic/getTopics')
        .then(res => {
            dispatch({
                type: 'GET_TOPICS',
                payload: res.data
            })
        })
}

export const deleteTopic = (name) => dispatch => {
    axios.delete('/topic/delete/'+name)
        .then(res => {
            if (res.data) {
                dispatch(getTopics())
                dispatch({
                    type: 'TOPIC_SUCCESS',
                    payload: "Topic eliminado con éxito"
                })
            }
        })
}

export const resetTopicError = () => dispatch => {
    dispatch({
        type: 'TOPIC_ERROR',
        payload: ""
    })
}

export const resetTopicSuccess = () => dispatch => {
    dispatch({
        type: 'TOPIC_SUCCESS',
        payload: ""
    })
}
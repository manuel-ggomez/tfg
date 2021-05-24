import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createTopic, getTopics, deleteTopic, resetTopicError, resetTopicSuccess} from '../../redux/actions/topic_actions'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



class Topics extends Component {
    constructor(props){
      super(props);
      this.state = {
          topics: null,
          name: ""
      }
      this.createTopic = this.createTopic.bind(this)
      this.closeAlert = this.closeAlert.bind(this)
    }

    componentDidMount() {
      this.props.getTopics()
    }

    componentDidUpdate(prevProps) {
        if (this.props.topic !== prevProps.topic) {
            this.setState({
                topics: this.props.topic.topics
            })
        }
    }

    createTopic(e){
        e.preventDefault()
        this.props.createTopic(this.state.name)
    }

    deleteTopic(name) {
        this.props.deleteTopic(name)
    }

    closeAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.resetTopicError()
        this.props.resetTopicSuccess()
    }

    
    render() {
        const topics = this.state.topics
        if (topics !== null) {
            const topicList = topics.map((topic) => {
                return(
                    <div>
                        {topic}
                        <button onClick={this.deleteTopic.bind(this, topic)}>Borrar</button>
                    </div>
                )
            })

            return(
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{color: 'white', marginBottom: '20px'}}>Broker KAFKA</h2>
                    {topics.length > 0 ? 
                    <div>{topicList}</div> : <h5 style={{color: 'white'}}>No hay topics</h5>}
                    <div>
                    <form style={{width: "200px"}} onSubmit={this.createTopic} className='form' >
                        <TextField
                            variant="filled"
                            margin="normal"
                            onChange={(e) => {this.setState({name: e.target.value})}} 
                            required
                            fullWidth
                            autoComplete="off"
                            id="name"
                            label="Nombre del topic"
                            autoFocus
                            InputProps={{
                                style: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className='submit'
                        >
                            Crear
                        </Button>
                        </form>
                    </div>
                <Snackbar open={this.props.topic.success !== ""} autoHideDuration={3000} onClose={this.closeAlert}>
                    <MuiAlert onClose={this.closeAlert} severity="success" variant="filled">
                        {this.props.topic.success}
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={this.props.topic.error !== ""} autoHideDuration={3000} onClose={this.closeAlert}>
                    <MuiAlert onClose={this.closeAlert} severity="error" variant="filled">
                        {this.props.topic.error}
                    </MuiAlert>
                </Snackbar>
                </div>
            )

        } else {
            return(
                <div className="backgroundMain" style={{color: 'white'}}>
                    CARGANDO
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, {createTopic, getTopics, deleteTopic, resetTopicError, resetTopicSuccess})(Topics);
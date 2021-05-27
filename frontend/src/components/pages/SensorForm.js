import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

export default class SensorForm extends Component {
    handleClose(value, event){
        event.preventDefault()
        this.props.handleClose(value)
    }

    handleChange(type, event){
        this.props.handleChange(event.target.value, type)
    }

    render() {
        return(
            <Dialog
                aria-labelledby="confirmation-dialog-title"
                open={this.props.open}
                maxWidth="xs"
                fullWidth
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle id="confirmation-dialog-title">
                    <div style={{display: "flex", alignItems: 'center'}}>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                            Crear sensor
                        </Typography>
                        <Button onClick={this.handleClose.bind(this, false)} color="secondary">
                            <CloseIcon />
                        </Button>
                    </div>
                </DialogTitle>

                <DialogContent dividers>
                    <form id="sensorForm" style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}} onSubmit={this.handleClose.bind(this, true)}>
                        <FormControl variant="outlined" style={{width: "100%", marginBottom: "20px"}}>
                            <InputLabel>Nombre del sensor</InputLabel>
                            <Input value={this.props.name} onChange={this.handleChange.bind(this, 'name')} required autoComplete="off" />
                        </FormControl>
                        <InputLabel id="typeSelect" style={{marginLeft: '14px'}}>Tipo de sensor</InputLabel>
                        <Select
                            fullWidth
                            labelId="typeSelect"
                            value={this.props.type}
                            onChange={this.handleChange.bind(this, 'type')}
                            style={{marginBottom: '20px'}}
                            >
                            <MenuItem value={"wifi"}>WiFi</MenuItem>
                            <MenuItem value={"bluetooth"}>Bluetooth</MenuItem>
                            <MenuItem value={"rf"}>Radio Frecuencia</MenuItem>
                            <MenuItem value={"rm"}>Redes Móviles</MenuItem>
                            <MenuItem value={"ciberseguridad"}>Ciberseguridad</MenuItem>
                        </Select>
                        {this.props.type === "ciberseguridad" ?
                        <>
                            <InputLabel id="subtypeSelect" style={{marginLeft: '14px'}}>Subtipo</InputLabel>
                            <Select
                                fullWidth
                                labelId="subtypeSelect"
                                value={this.props.subtype}
                                onChange={this.handleChange.bind(this, 'subtype')}
                                style={{marginBottom: '20px'}}
                                >
                                <MenuItem value={"siem"}>Siem</MenuItem>
                                <MenuItem value={"fw"}>Firewall</MenuItem>
                                <MenuItem value={"ids"}>IDS</MenuItem>
                                <MenuItem value={"trafico"}>Tráfico</MenuItem>
                            </Select>
                    </>
                    : null}
                    <FormControl variant="outlined" style={{width: "100%", marginBottom: "20px"}}>
                            <InputLabel>Dirección IP</InputLabel>
                            <Input value={this.props.ip} onChange={this.handleChange.bind(this, 'ip')} required />
                        </FormControl>
                        <FormControl variant="outlined" style={{width: "100%"}}>
                            <InputLabel>Dirección MAC</InputLabel>
                            <Input value={this.props.mac} onChange={this.handleChange.bind(this, 'mac')} required />
                        </FormControl>
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button type="submit" color="primary" form="sensorForm" variant="contained">
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
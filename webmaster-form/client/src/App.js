import React, {Component} from 'react';
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleChange.bind(this);
        this.send.bind(this);
    }

    send = event => {

    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log("changed");
    };

    render() {
        return (
            <div className="Login">
                <h1>Contacter le webmaster</h1>
                <FormGroup controlId="name" bsSize="large">
                    <FormLabel>Nom</FormLabel>
                    <FormControl autoFocus type="email" value={this.state.name} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="message" bsSize="large">
                    <FormLabel>Message</FormLabel>
                    <FormControl as="textarea" value={this.state.message} onChange={this.handleChange}/>
                </FormGroup>
                <Button
                    onClick={this.send}
                    block
                    bsSize="large"
                    type="submit"
                >
                    Connexion
                </Button>
            </div>
        )
            ;
    }
}

export default App;

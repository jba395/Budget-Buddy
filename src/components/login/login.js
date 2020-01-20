import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
      super();

      // use these refs to extract values from the React Form
      // to get specific values, perform this.variable.current.value
      this.username = React.createRef();
      this.password = React.createRef();
    }

    login(username, password) {
      // let response = await axios.get()
      // this console log worked!
      // console.log(username, password);
      let params = {
        username: username,
        password: password
      }

      axios.post('localhost:3000/login', params)
      .then(response => {
        console.log(response);
      })
      return null;
    }

    render() {
        return(
            <div className = 'loginForm'>
            <h2>Welcome back!</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" className = 'usernameBox'
                  ref = {this.username}
                />
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" className = 'passwordBox'
                  ref = {this.password}
                />
              </Form.Group>
              
              <Button onClick = { () => {
                this.login(this.username.current.value, this.password.current.value);
              }} 
                variant="primary" type="submit" className = 'submit'>
                Submit
              </Button>
            </Form>
            </div>
        )
    }
}

export default Login;
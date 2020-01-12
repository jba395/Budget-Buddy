import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';

class Login extends React.Component {
    render() {
        return(
            <div className = 'loginForm'>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter Username" className = 'usernameBox'/>
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className = 'passwordBox'/>
              </Form.Group>
              
              <Button variant="primary" type="submit" className = 'submit'>
                Submit
              </Button>
            </Form>
            </div>
        )
    }
}

export default Login;
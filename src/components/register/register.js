import React from 'react';
import './register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Register extends React.Component {
    render() {
        return(
            <div className = 'loginForm'>
            <h2>We're glad you're here!</h2>

            <Form>
            <Form.Group controlId = 'firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type = 'firstName' placeholder = 'Enter your first name'
                className = 'firstNameBox'
                />
                    
            </Form.Group>
            
            <Form.Group controlId = 'lastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type = 'lastName' placeholder = 'Enter your last name'
                className = 'lastNameBox'
                />
                
            </Form.Group>

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
            </div>        )
    }
}

export default Register;
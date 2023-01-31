import React from "react"
import { Button, Card, Col, Form, Row, Alert } from "react-bootstrap"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setAuthenticated, setToken } from "../redux/appState"
import { useNavigate } from "react-router-dom"

class LoginPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isAuthenticated: false,
            bearerToken: '',
            isAlert: false,
            alertMessage: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        switch(event.target.name) {
            case 'username' : 
                this.setState({ username: event.target.value })
                break
            case 'password' :
                this.setState({ password: event.target.value })
                break
            default :
                break
        }
    }

    handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:4000/login', { ...this.state }, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            console.log('login response : ', response)
            if(response.status == 200) {
                this.setState({ isAlert: false,  alertMessage: ''})
                this.props.setAuthenticated(true)
                this.props.setToken(response.data.data.token)
            } else {
                this.setState({ isAlert: true, alertMessage: response.data.message })
            }
        }).catch(error => {
            console.log('login error : ', error)
            this.setState({ isAlert: true, alertMessage: error })
        })
    }

    render() {
        return (
            <>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Card>
                                <Card.Header>
                                    Login
                                </Card.Header>
                                <Card.Body>
                                    { this.state.isAlert && <Alert variant="danger" onClose={ this.setState({ isAlert: false }) }>
                                        <Alert.Heading>Error!</Alert.Heading>
                                        You're not authorized
                                    </Alert> }
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name="username" placeholder="Your username" value={this.state.username} onChange={this.handleChange}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Input your password" value={this.state.password} onChange={this.handleChange}></Form.Control>
                                    </Form.Group>
                                    <Button type="submit" variant="success" style={{ width: '100%' }} className="mt-4">Login</Button>
                                </Card.Body>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }

}

export default LoginPage

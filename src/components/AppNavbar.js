import React from "react"
import { Container, Navbar } from "react-bootstrap"

class AppNavbar extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">
                            <strong>GitHub</strong> Jobs
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default AppNavbar

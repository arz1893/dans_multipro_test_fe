import React from "react";
import { Button, Card, Container, ListGroup, Row } from "react-bootstrap";

class ContainerJobList extends React.Component {
    state = {
        jobList: []
    }

    render() {
        return (
            <>
                <Row className="mt-5">
                    <Card>
                        <Card.Body>
                            <h2 style={{ marginLeft: '25px' }}>Job List</h2>
                            <hr/>
    
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <a href="#"><h3>Data Engineer</h3></a>
                                        <span className="text-muted">
                                            Trade Republic
                                        </span> - 
                                        <span className="text-success">
                                            <strong>Full Time</strong>
                                        </span>
                                    </div>
                                    <div>
                                        <div>Berlin</div>
                                        <div className="text-muted">1 day ago</div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <a href="#"><h3>Data Engineer</h3></a>
                                        <span className="text-muted">
                                            Trade Republic
                                        </span> - 
                                        <span className="text-success">
                                            <strong>Full Time</strong>
                                        </span>
                                    </div>
                                    <div>
                                        <div>Berlin</div>
                                        <div className="text-muted">1 day ago</div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>

                            <Button type="button" variant="primary" style={{ width: '100%' }}>More Jobs</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </>
        )
    }
}

export default ContainerJobList

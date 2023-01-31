import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

class SearchForm extends React.Component {
    state = {
        jobDescription: null,
        location: null,
        isFullTime: false
    }

    render() {
        return (
            <>
                <Form id="search_form" className="mt-5">
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control type="text" placeholder="Filter by title, benefits, companies, expertise"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col}>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Filter by city, state, zip code or country"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs="auto">
                            <Form.Label></Form.Label>
                            <Form.Check
                                label="Full Time Only"
                                name="isFullTime"
                                type="checkbox"
                                className="mt-3"
                            ></Form.Check>
                        </Col>
                        <Col xs="auto">
                            <Button variant="secondary" type="button" style={{ marginTop: '32px' }}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }
}

export default SearchForm;

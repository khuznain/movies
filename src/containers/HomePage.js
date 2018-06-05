import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

class HomePage extends Component {
    render () {
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <h2 className="title">Popular Movies</h2>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomePage;
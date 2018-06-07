import React from 'react';
import { Row, Col } from 'reactstrap';
import moment from 'moment';

function PosterInfo({ data }) {
    return (
        <div>
            <Row>
                <h3>{ data.title || data.name }</h3>
            </Row>
            <Row>
                <Col xs={4}>
                    <span><i className="fa fa-star" aria-hidden="true"></i> {data.vote_average} </span>
                </Col>
                <Col xs={4}>
                    <span><i className="fa fa-heart" aria-hidden="true"></i> {data.vote_count} </span>
                </Col>
                <Col xs={4}>
                    <span><i className="fa fa-calendar" aria-hidden="true"></i> { moment(data.release_date).format('MMMM Do YYYY') }</span>
                </Col>
            </Row>
            <Row>
                <div style={{ paddingTop: '12px' }}>
                    <h2 className="title">Overview</h2>
                    <p>
                        {data.overview}
                    </p>
                </div>
            </Row>
        </div>
    )
}

export default PosterInfo;

import React from 'react';
import { Row, Col } from 'reactstrap';
import moment from 'moment';

function PosterInfo({ movie }) {
    return (
        <div>
            <Row>
                <h3>{movie.title}</h3>
            </Row>
            <Row>
                <Col xs={4}>
                    <span><i className="fa fa-star" aria-hidden="true"></i> {movie.vote_average} </span>
                </Col>
                <Col xs={4}>
                    <span><i className="fa fa-heart" aria-hidden="true"></i> {movie.vote_count} </span>
                </Col>
                <Col xs={4}>
                    <span><i className="fa fa-calendar" aria-hidden="true"></i> { moment(movie.release_date).format('MMMM Do YYYY') }</span>
                </Col>
            </Row>
            <Row>
                <div style={{ paddingTop: '12px' }}>
                    <h2 className="title">Overview</h2>
                    <p>
                        {movie.overview}
                    </p>
                </div>
            </Row>
        </div>
    )
}

export default PosterInfo;

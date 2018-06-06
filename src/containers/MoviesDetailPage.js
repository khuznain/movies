import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { fetchMovie, fetchMovieCast, fetchTrailer } from '../redux/actions/index.js';
import Poster from '../components/poster.js';
import PosterInfo from '../components/poster-info.js';
import CastList from '../components/cast-list.js';
import TrailerList from '../components/trailer-list.js';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';

class MoviesDetailPage extends Component {
    
    componentDidMount() {
        const id = +this.props.match.params.id;
        this.props.fetchMovie(id);
        this.props.fetchMovieCast(id);
        this.props.fetchTrailer(id);
    }

    render () {
        const { movie, casts, trailers } = this.props;
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <Poster posterPath={ movie.poster_path} />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <PosterInfo movie={movie}/>
                                        <CastList casts={casts.slice(0, CAST_MAX_NUM)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <TrailerList data={trailers.slice(0, TRAILER_MAX_NUM)} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieStore.movie,
        casts: state.movieStore.casts,
        trailers: state.movieStore.trailers,
        loading: state.movieStore.loading,
        errors: state.movieStore.errors
    }
}

export default connect(mapStateToProps, { fetchMovie, fetchMovieCast, fetchTrailer })(MoviesDetailPage);
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/actions/index.js';
import MovieCard from '../components/movie-card';

class MoviesList extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render () {
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <h2 className="title">Popular Movies</h2>
                                <div className="row">
                                    {
                                        this.props.movies.map(movie => <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" style={{ padding: 0}} key={movie.id}> <MovieCard  movie={movie} /> </div>)
                                    }
                                </div>
                                { this.props.movies.length >= 20 && <button className="btn btn-info mx-auto d-block">Load More....</button> }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies : state.movieStore.movies,
        loading: state.movieStore.loading,
        errors: state.movieStore.errors
    }
}
  
export default connect(mapStateToProps, { fetchMovies })(MoviesList);
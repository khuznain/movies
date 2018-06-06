import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchMovies, loadMore } from '../redux/actions/index.js';
import MovieCard from '../components/movie-card';

class MoviesList extends Component {

    state = {
        // set Page Count 1 because initially page will be one latter will increase page size
        pageCount: 1
    }

    componentDidMount() {
        //Call Initialize Movies Data
        this.props.fetchMovies();
    }

    onClick = (id) => {
        this.props.history.push(`/movies/${id}`);
    }

    onLoadMore = () => {
        //Increase PageCount to get more data as api return data per page 
        this.setState({ pageCount: this.state.pageCount + 1 });

        //Call to Load more date
        this.props.loadMore(this.state.count);
    }

    render () {
        const { movies } = this.props;
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <h2 className="title">Popular Movies</h2>
                                <div className="row">
                                    {
                                        movies.map(movie => <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" style={{ padding: 0}} key={movie.id}> <MovieCard  movie={movie} onClick={this.onClick} /> </div>)
                                    }
                                </div>
                                { movies.length >= 20 && <button onClick={this.onLoadMore} className="btn btn-info mx-auto d-block">Load More....</button> }
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
  
export default connect(mapStateToProps, { fetchMovies, loadMore })(MoviesList);
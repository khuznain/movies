import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/actions/index.js';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render () {
        // console.log(this.props.movies);
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

function mapStateToProps(state) {
    return {
        movies : state.movieStore.movies,
        loading: state.movieStore.loading,
        errors: state.movieStore.errors
    }
}
  
export default connect(mapStateToProps, { fetchMovies })(HomePage);
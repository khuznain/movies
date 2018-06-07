import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { fetchShow, fetchTrailer, fetchShowTrailer } from '../redux/actions/index.js';
import Poster from '../components/poster.js';
import PosterInfo from '../components/poster-info.js';
import CastList from '../components/cast-list.js';
import TrailerList from '../components/trailer-list.js';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import CreatedBy from '../components/created-list';

class ShowDetailPage extends Component {
    
    componentDidMount() {
        const id = +this.props.match.params.id;
        this.props.fetchShow(id);
        this.props.fetchShowTrailer(id);
    }

    render () {
        const { show, trailers } = this.props;
        console.log(trailers);
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <Poster posterPath={ show.poster_path} />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <PosterInfo data={show} />
                                        <CreatedBy data={show.created_by} />
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
        show: state.showStore.show,
        trailers: state.showStore.trailers,
    }
}

export default connect(mapStateToProps, { fetchShow, fetchTrailer, fetchShowTrailer }) (ShowDetailPage);
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PosterCard from '../components/poster-card';
import { fetchShows, loadMoreShows }  from '../redux/actions/index.js';

class ShowList extends Component {

    state = {
        pageCount: 1
    }

    componentDidMount() {
        this.props.fetchShows();
    }

    onClick = (id) => {
        this.props.history.push(`/shows/${id}`);
    }

    onLoadMore = () => {
        //Increase PageCount to get more data as api return data per page 
        this.setState({ pageCount: this.state.pageCount + 1 });

        //Call to Load more date
        this.props.loadMoreShows(this.state.count);
    }

    render () {
        const { shows } = this.props;
        console.log(shows);
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <h2 className="title">Popular Shows</h2>
                                <div className="row">
                                    {
                                        shows.map(show => 
                                            <div 
                                                className="col-lg-3 col-md-6 col-sm-4 col-xs-12" 
                                                style={{ padding: 0}} key={show.id}>
                                                <PosterCard  data={show} onClick={this.onClick} />
                                            </div>)
                                    }
                                </div>
                                { shows.length >= 20 && 
                                    <button 
                                        onClick={this.onLoadMore}
                                        className="btn btn-info mx-auto d-block">Load More....</button> }
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
        shows : state.showStore.shows,
        loading: state.showStore.loading,
        errors: state.showStore.errors
    }
}
  
export default connect(mapStateToProps, { fetchShows, loadMoreShows })(ShowList);
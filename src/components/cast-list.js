import React from 'react';
import { Col } from 'reactstrap';
import Cast from './cast';

function CastList({ casts }) {
    var castList = casts.map(function(cast) {
        if(cast.profile_path != null) {
            return(
            <Col xs={4} sm={3} md={2} key={cast.cast_id} >
                <Cast cast={cast} />
            </Col>
            );
        }
    });

    return (
        <div>
            <div className="row"> 
                <div style={{ paddingTop: '4px', paddingBottom: '3px' }}>
                    <h2 className="title">Casts</h2>
                </div>
            </div>
            <div className="row">
                { castList }
            </div>
        </div>
    )
}

export default CastList;

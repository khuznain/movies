import React from 'react';
import { Col } from 'reactstrap';
import Creater from './Creater';

function CreatedBy({ data }) {
    if( data ) {
        var createrList = data.map(function(creater) {
            if(creater.profile_path != null) {
                return(
                <Col xs={4} sm={3} md={2} key={creater.id} >
                    <Creater creater={creater} />
                </Col>
                );
            }
        });   
    }

    return (
        <div>
            <div className="row"> 
                <div style={{ paddingTop: '4px', paddingBottom: '3px' }}>
                    <h2 className="title">Creater</h2>
                </div>
            </div>
            <div className="row">
                { createrList }
            </div>
        </div>
    )
}

export default CreatedBy;

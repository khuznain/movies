import React from 'react';
import Trailer from './trailer';
import { Col } from 'reactstrap';

const TrailerList = ( { data }) => {
    let trailers = data.map(function(trailer) {
        return(
          <Col xs={12} sm={6} md={4} key={trailer.id} >
            <Trailer trailer={trailer.key} />
          </Col>
        );
      });
  
      const style = {
        marginTop: '15px',
        paddingLeft: '20px'
      };
  
      const titleStyle = {
        paddingLeft: '20px'
      };
      
      if (trailers.length != 0){
        return(
          <div style={{ paddingTop: '10px'}}>
            <h3 style={titleStyle}>Trailers</h3>
            <div style={style} className="row">{trailers}</div>
          </div>
        );
      } else
        return null;
}

export default TrailerList;
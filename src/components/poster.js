import React from 'react';

function Poster({ posterPath }) {
    return (
        <div className="poster-image" style={{ marginLeft: '27px' }}>
            <img className="img-thumbnail" width="250" height="250" src={ 'http://image.tmdb.org/t/p/w500/' + posterPath } alt="" />
        </div>
    )
}

export default Poster;

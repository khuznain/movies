import React from 'react';

function cast({ cast }) {
    return (
        <div>
            <img className="img-thumbnail" src={ 'http://image.tmdb.org/t/p/w185/' + cast.profile_path } alt="" />
        </div>
    );
}

export default cast

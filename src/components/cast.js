import React from 'react';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

function cast({ cast }) {
    return (
        <div>
            <img className="img-thumbnail" src={ URL_IMG + IMG_SIZE_SMALL + cast.profile_path } alt={cast.name} />
        </div>
    );
}

export default cast

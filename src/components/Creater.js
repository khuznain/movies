import React from 'react';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

function Creater({ creater }) {
    return (
        <div>
            <img className="img-thumbnail" src={ URL_IMG + IMG_SIZE_SMALL + creater.profile_path } alt={creater.name} />
        </div>
    );
}

export default Creater;

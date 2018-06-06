import React from 'react';
import { URL_YOUTUBE } from '../const';

function Trailer( { trailer }) {
    return <iframe src={ URL_YOUTUBE + trailer} allowFullScreen />
}

export default Trailer;

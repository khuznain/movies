import React from 'react'

function Trailer( { trailer }) {
    return <iframe src={ 'https://www.youtube.com/embed/' + trailer} allowFullScreen />
}

export default Trailer;

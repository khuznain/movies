import React from 'react';
import './movie-card.css';
import moment from 'moment';

function MovieCard( { movie }) {
    return (
        <div className="movie-card card" style={{ padding: '0px'}}>
            <img className="card-img-top" src={ 'http://image.tmdb.org/t/p/w185/' + movie.poster_path } alt="" />
            <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p className="card-title">{movie.title}</p>
                    <span><i className="fa fa-heart" aria-hidden="true"></i> {movie.vote_count}</span>
                </div>
                <p className="text-justify" style={{ fontSize: '15px', marginBottom: '0px'}}>{movie.overview.substring(0, 100) + '...'}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <span><i className="fa fa-calendar" aria-hidden="true"></i> { moment(movie.release_date).format('MMMM Do YYYY') }</span>
                        <div className="card-footer-badge float-right badge badge-warning badge-pill">{movie.vote_average + '/10'}</div>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default MovieCard;

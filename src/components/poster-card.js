import React from 'react';
import moment from 'moment';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

function PosterCard( { data, onClick }) {
    return (
        <div className="movie-card card" style={{ padding: '0px', cursor : 'pointer' }} onClick={() => onClick(data.id)}>
            <img className="card-img-top" src={ URL_IMG + IMG_SIZE_SMALL + data.poster_path } alt="" />
            <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p className="card-title">{data.title}</p>
                    <span><i className="fa fa-heart" aria-hidden="true"></i> {data.vote_count}</span>
                </div>
                <p className="text-justify" style={{ fontSize: '15px', marginBottom: '0px'}}>{data.overview.substring(0, 70) + '...'}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <span><i className="fa fa-calendar" aria-hidden="true"></i> { moment(data.release_date).format('MMMM Do YYYY') }</span>
                        <div className="card-footer-badge float-right badge badge-warning badge-pill">{data.vote_average + '/10'}</div>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default PosterCard;

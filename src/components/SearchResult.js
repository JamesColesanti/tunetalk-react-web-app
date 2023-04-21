import React from 'react';
import './SearchResult.css'

function SearchResult ({ albumDetail }) {
    const artistsString = albumDetail.artists.map(artist => artist.name).join(', ');
    const releaseYearString = albumDetail.release_date ? albumDetail.release_date.substring(0, albumDetail.release_date.indexOf('-')) : '';
    const typeString = albumDetail.album_type;
    const auxiliaryText = (typeString ? typeString.charAt(0).toUpperCase() + typeString.slice(1) + " • " : '') +
        releaseYearString + " • " +
        albumDetail.total_tracks + " track" + (albumDetail.total_tracks === 1 ? '' : 's');

    return (
        <div className="mt-1 search-result-container">
            <div className={"like-dislike-container"}>
                <button className={"like-dislike-button"} style={{borderBottom: "1px solid whitesmoke"}}>
                    <i className="bi bi-hand-thumbs-up"></i>
                </button>
                <button className={"like-dislike-button"} style={{borderTop: "1px solid whitesmoke"}}>
                    <i className="bi bi-hand-thumbs-down"></i>
                </button>
            </div>
            <img className="album-cover" width="150" height="150" src={albumDetail.images[0].url} alt={albumDetail.name + ' Cover'}/>
            <div className="h-100 ps-2 pt-1 flex-fill wd-text-ellipses overflow-hidden">
                <span className="wd-bold-text wd-font-size-32 wd-text-ellipses">
                    {albumDetail.name}
                </span><br/>
                <span>
                    {artistsString}
                </span><br/><br/>
                {auxiliaryText ?? <span className="wd-text-ellipses">{auxiliaryText}</span>}
            </div>
        </div>
    );
};
export default SearchResult;
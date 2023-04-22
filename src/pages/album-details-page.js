import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {findAlbumDetailsThunk} from "../services/albums-thunks";
import "./AlbumDetailsPage.css";

function AlbumDetailsPage () {
    const {albumDetail, loading} = useSelector((state) => state.albumDetail)
    const dispatch = useDispatch();
    const {albumId} = useParams();

    const artistsString = albumDetail.artists ? albumDetail.artists.map(artist => artist.name).join(', ') : '';

    useEffect(() => {
        dispatch(findAlbumDetailsThunk(albumId));
    }, [dispatch, albumId]);

    console.log(albumDetail);

    if (loading || !albumDetail.images) {
        return <div>Loading...</div>
    }
    return (
        <div className="container">
            <div className="album-details-container">
                <img className="album-cover" width="300" height="300" src={albumDetail.images[0].url} alt={albumDetail.name + ' Cover'}/>
            </div>
            <span className="wd-bold-text wd-font-size-32 wd-text-ellipses">
                    {albumDetail.name}
                </span><br/>
            <span>
                    {artistsString}
                </span><br/><br/>
        </div>
    );
}
export default AlbumDetailsPage;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {findAlbumDetailsThunk} from "../services/albums-thunks";
import "./AlbumDetailsPage.css";
import {findReviewsForAlbumThunk} from "../services/reviews-thunks";
import AlbumReviewItem from "../reviews/album-review-item";
import CreateReview from "../components/create-review";

function AlbumDetailsPage () {
    const {albumDetail, aLoading} = useSelector((state) => state.albumDetail)
    const {reviewsForAlbum, rLoading} = useSelector((state) => state.reviewsForAlbum)
    const {currentUser} = useSelector((state) => state.currentUser)
    const dispatch = useDispatch();
    const {albumId} = useParams();

    useEffect(() => {
        dispatch(findAlbumDetailsThunk(albumId));
        dispatch(findReviewsForAlbumThunk(albumId));
    }, [dispatch, albumId]);

    if (aLoading || !albumDetail.albumInfo || !albumDetail.tracks) {
        return <div>Loading...</div>
    }

    const artistsString = albumDetail.albumInfo ? albumDetail.albumInfo.artists.map(artist => artist.name).join(', ') : '';
    const releaseYearString = albumDetail.albumInfo ? albumDetail.albumInfo.release_date.substring(0, albumDetail.albumInfo.release_date.indexOf('-')) : '';
    const typeString = albumDetail.albumInfo ? albumDetail.albumInfo.type : '';
    const auxiliaryText = (typeString ? typeString.charAt(0).toUpperCase() + typeString.slice(1) + " • " : '') +
        releaseYearString + " • " +
        albumDetail.albumInfo.total_tracks + " track" + (albumDetail.albumInfo.total_tracks === 1 ? '' : 's');


    return (
        <div className="container">
            <div className="mt-2 album-details-container flex-column flex-md-row p-3">
                <img className="big-album-cover me-md-3" width="300" height="300" src={albumDetail.albumInfo.images[0].url} alt={albumDetail.albumInfo.name + ' Cover'}/>
                <div className={"flex-fill"}>
                    <span className="wd-bold-text wd-font-size-32 wd-text-ellipses">
                        {albumDetail.albumInfo.name}
                    </span><br/>
                    <span>
                        {artistsString}
                    </span><br/><br/>
                    {auxiliaryText ?? <span className="wd-text-ellipses">{auxiliaryText}</span>}
                </div>
            </div>
            <div>
                <div className={"text-muted d-flex justify-content-between"}>
                    <h4>Recent Reviews</h4>
                    <h4>{reviewsForAlbum.length} reviews</h4>
                </div>
                {
                    currentUser && <CreateReview aid={albumId}/>
                }
                {
                    !rLoading && reviewsForAlbum.map(review => <AlbumReviewItem key={review.id} reviewDetail={review}/> )
                }
            </div>
        </div>
    );
}
export default AlbumDetailsPage;
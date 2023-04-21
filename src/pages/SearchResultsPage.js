import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {findAlbumsThunk} from "../services/albums-thunks";
import AlbumItem from '../albums/album-item';

function SearchResultsPage () {
    const {albums, loading} = useSelector((state) => state.albums)
    const dispatch = useDispatch();
    let [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(findAlbumsThunk(searchTerm));
    }, [dispatch, searchTerm]);

    return (
        <div className="SearchResultsPage">
            <input className="form-control me-sm-2 pb-2" type="search"
                placeholder="Search"
                onChange={(event) => setSearchTerm(event.target.value)}/>
            {
                loading &&
                <li className="list-group-item">
                Loading...
                </li>
            }
            {
                albums.map(album => <AlbumItem key={album.id} album={album}/> )
            }
        </div>
    );
}
export default SearchResultsPage;
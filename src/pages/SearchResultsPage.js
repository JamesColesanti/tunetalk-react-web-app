import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {findAlbumsThunk} from "../services/albums-thunks";
import SearchResult from "../components/SearchResult";

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
            <div className={"row"} style={{margin: "auto"}}>
                <div className={"col-4"}></div>
                <div className={"pl-1 pr-1 col-8"}>
                    {
                        albums.map(album => <SearchResult key={album.id} albumDetail={album}/> )
                    }
                </div>
            </div>
        </div>
    );
}
export default SearchResultsPage;
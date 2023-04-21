import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {findAlbumsThunk} from "../services/albums-thunks";
import SearchResult from "../components/SearchResult";
import {useSearchParams} from "react-router-dom";

function SearchResultsPage () {
    const {albums, loading} = useSelector((state) => state.albums)
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("name");

    useEffect(() => {
        dispatch(findAlbumsThunk(searchTerm));
    }, [dispatch, searchTerm]);

    return (
        <div className="SearchResultsPage">
            <input className="form-control me-sm-2 pb-2" type="search"
                placeholder="Search" value={searchTerm}
                onChange={(event) => setSearchParams({ ...searchParams, name: event.target.value})}/>
            {
                loading ?? <li className="list-group-item">
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
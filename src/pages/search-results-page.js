/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {findAlbumsThunk} from "../services/albums-thunks";
import SearchResult from "../components/search-result";
import {useSearchParams} from "react-router-dom";
import {debounce} from "lodash";

function SearchResultsPage () {
    const {albums, loading} = useSelector((state) => state.albums)
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("name");
    const [userInput, setUserInput] = useState(searchTerm ?? '');

    useEffect(() => {
        if (searchTerm) {
            dispatch(findAlbumsThunk(searchTerm));
        }
    }, [dispatch, searchTerm]);

    const handleSearchTermChange = event => {
        setSearchParams({
            ...searchParams,
            name: event.target.value
        });
    };

    const debouncedChangeHandler = useCallback(
        debounce(handleSearchTermChange, 150)
        , []);

    return (
        <div className="m-1">
            <input className="form-control me-sm-2 pb-2" type="search"
                placeholder="Search" value={userInput}
                onChange={(event) => {
                    setUserInput(event.target.value);
                    debouncedChangeHandler(event);
                }
                }/>
            {
                loading ?? 
                <li className="list-group-item">
                    Loading...
                </li>

            }
            <div className={"row"} style={{margin: "auto"}}>
                <div className={"col-4"}></div>
                <div className={"pl-1 pr-1 col-8"}>
                    {
                        albums.map(album => <SearchResult key={album.id} albumDetail={album}/>)
                    }
                </div>
            </div>
        </div>
    );
}
export default SearchResultsPage;
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const AlbumItem = ({ album }) => {
    return(
        <li className="list-group-item">
             <div className="row">
                    <div class="col-1">
                        <img class="wd-album-image ps-2 pb-2"
                            src={ album.images[0].url }/>
                    </div>
                    <div class="col-11 ps-5">
                        <div class="ps-1">
                            <span className="fw-bolder wd-font-size-16">
                                {album.name}
                            </span>
                            <div>
                                { album.artists[0].name }
                            </div>
                        </div>
                    </div>
                </div>
        </li>
    );
};
export default AlbumItem;
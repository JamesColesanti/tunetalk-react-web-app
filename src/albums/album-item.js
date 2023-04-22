/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const AlbumItem = ({ album }) => {
    return(
        <li className="list-group-item mt-1">
             <div className="row">
                    <div class="col-1">
                        <img class="wd-album-image ps-2 pb-2"
                            src={ album.images[0].url }/>
                    </div>
                    <div class="col-11 ps-5">
                        <div class="ps-1">
                            <a href= '/details/${album.id}' className="fw-bolder wd-font-size-16 text-decoration-none">
                                {album.name}
                            </a>
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
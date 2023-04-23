/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const UserItem = ({ userDetails }) => {
    return(
        <div className="mt-1 search-result-container">
            {/* <img className="album-cover" width="150" height="150" src={albumDetail.images[0].url} alt={albumDetail.name + ' Cover'}/> */}
            <div className="h-100 ps-2 pt-1 flex-fill wd-text-ellipses overflow-hidden">
                <span className="wd-bold-text wd-font-size-32 wd-text-ellipses">
                    {userDetails.username}
                </span>
                <br/>
                <span className="wd-bold-text wd-font-size-32 wd-text-ellipses">
                    Role: {userDetails.isAdmin ? <span>Admin</span> : <span>User</span>}
                </span>
                <br/>
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" className="btn btn-primary">Primary</button>
  <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a className="dropdown-item" href="#">Dropdown link</a>
      <a className="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
</div>
              
            </div>
        </div>
    );
};
export default UserItem;
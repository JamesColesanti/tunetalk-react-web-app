import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findAllUsersThunk } from '../services/users-thunks';
import UserItem from '../users/user-item';

function AdminScreen() {
  const {allUsers, loading} = useSelector((state) => state.allUsers)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllUsersThunk());
    }, [dispatch]);

  return (
        <div className="container">
            <div>
                <div className={"text-muted pt-4"}>
                    <h4>Current Users</h4>
                </div>
                {
                    loading ??
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    allUsers.length !== 0 && allUsers.map(user => <UserItem key={user._id} userDetails={user}/> )
                }
            </div>
        </div>
    );
  }
  
  export default AdminScreen;
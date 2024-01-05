import { profileThunk } from "../services/users-thunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function CurrentUserContext({ children }) {
  const dispatch = useDispatch();
  const getProfile = async () => {
    await dispatch(profileThunk());
  };
  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  return children;
}

export default CurrentUserContext;
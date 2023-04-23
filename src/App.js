import "bootswatch/dist/quartz/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/home-page";
import SearchResultsPage from "./pages/search-results-page";
import AlbumDetailsPage from "./pages/album-details-page";
import ProfilePage from "./pages/profile-page";
import albumsReducer from "./albums/albums-reducer";
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import RegisterScreen from "./pages/register";
import CurrentUserContext from "./redux/current-user-context";
import currentUserReducer from "./users/current-user-reducer";
import LoginScreen from "./pages/login";
import reviewReducer from "./reviews/review-reducer";
import albumDetailsReducer from "./services/album-details-reducer";
import reviewsForAlbumReducer from "./reviews/reviews-for-album-reducer";
import Navbar from "./components/nav-bar";
import allUsersReducer from "./users/all-users-reducer";
import AdminScreen from "./pages/admin-page";
import reviewsForUserReducer from "./reviews/reviews-for-user-reducer";
import userReducer from "./users/user-reducer";
import UserProfilePage from "./pages/user-profile-page";

const store = configureStore({reducer: {
    albums: albumsReducer,
    currentUser: currentUserReducer,
    reviews: reviewReducer,
    albumDetail: albumDetailsReducer,
    reviewsForAlbum: reviewsForAlbumReducer,
    reviewsForUser: reviewsForUserReducer,
    allUsers: allUsersReducer,
    user: userReducer
}});

function App() {
  return (
    <Provider store={store}>
      <CurrentUserContext>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path={"/search"} element={<SearchResultsPage/>} />
            <Route path={"/details/:albumId"} element={<AlbumDetailsPage/>} />
            <Route path={"/profile"} element={<ProfilePage/>} />
            <Route path={"/profile/:uid"} element={<UserProfilePage/>} />
            <Route path={"/register"} element={<RegisterScreen/>} />
            <Route path={"/login"} element={<LoginScreen/>} />
            <Route path={"/admin"} element={<AdminScreen/>} />
          </Routes>
        </BrowserRouter>
      </CurrentUserContext>
    </Provider>
  );
}

export default App;

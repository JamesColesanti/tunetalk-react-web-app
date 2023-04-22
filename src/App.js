import "bootswatch/dist/quartz/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AlbumDetailsPage from "./pages/AlbumDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/navbar";
import albumsReducer from "./albums/albums-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import RegisterScreen from "./pages/register";
import CurrentUserContext from "./redux/current-user-context";
import usersReducer from "./users/users-reducer";
import LoginScreen from "./pages/login";
import reviewReducer from "./reviews/review-reducer";

const store = configureStore({reducer: {
  albums: albumsReducer, users: usersReducer, reviews: reviewReducer
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
            <Route path={"/album/:albumId"} element={<AlbumDetailsPage/>} />
            <Route path={"/profile"} element={<ProfilePage/>} />
            <Route path={"/register"} element={<RegisterScreen/>} />
            <Route path={"/login"} element={<LoginScreen/>} />
          </Routes>
        </BrowserRouter>
      </CurrentUserContext>
    </Provider>
  );
}

export default App;

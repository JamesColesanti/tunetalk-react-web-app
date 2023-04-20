import "bootswatch/dist/quartz/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AlbumDetailsPage from "./pages/AlbumDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/navbar";

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path={"/search/*"} element={<SearchResultsPage/>} />
          <Route path={"/album/:albumId"} element={<AlbumDetailsPage/>} />
          <Route path={"/profile"} element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

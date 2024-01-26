import { Route, Routes } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies';
import MovieDetails from "components/MovieDetails/MovieDetails";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Casts from "./Casts/Casts";
import Reviews from "./Reviews/Reviews";
import SharedLayout from "./SharedLayout/SharedLayout";

const AppRoutes = () => {
    return (
        <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movie_id" element={<MovieDetails />}>
          <Route path="credits" element={<Casts />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>  
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
    )
}

export default AppRoutes;
import { Route, Routes } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header/Header";
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies';
import MovieDetails from "components/MovieDetails/MovieDetails";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Casts from "./Casts/Casts";
import Reviews from "./Reviews/Reviews";


export const App = () => {
  return (
    <div>
      <Header></Header>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movie_id" element={<MovieDetails />}>
          <Route path="credits" element={<Casts />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>  
        <Route path="*" element={<NotFoundPage /> } />
      </Routes>
    </div>
  )
};

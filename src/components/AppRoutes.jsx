import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home/Home')); 
const Movies = lazy(() => import('../pages/Movies/Movies')); 
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails')); 
const Casts = lazy(() => import('./Casts/Casts')); 
const Reviews = lazy(() => import('./Reviews/Reviews')); 
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage')); 


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
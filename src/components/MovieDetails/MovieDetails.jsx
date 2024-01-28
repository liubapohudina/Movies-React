import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "services/api";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "components/Loader/Loader";
import styles from '../MovieDetails/moviedetails.module.css';


const MovieDetails = () => {
    const [loading, setloading] = useState(false);
    const [movieInfo, setMovieInfo] = useState('');

    const { movie_id } = useParams();
    const navigate = useNavigate();
    const location = useLocation()
    const backLink = location.state?.from ?? '/';

    

    useEffect(() => {
        setloading(true)
        const fetchMovDetails = async () => {
            try {
                const resp = await getMovieDetails(movie_id);
                setMovieInfo(resp);
            
            }
            catch (error) {
                toast.error("Something wrong...")
            }
            finally {
                setloading(false);
            }
        }
        fetchMovDetails()
    }, [movie_id])
    
    const goBack = () => { navigate(backLink) };

    const score = (movieInfo.vote_average * 10).toFixed(1);
    const PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

    return (
        <main>
            {loading && <Loader/>}
            {movieInfo && (
                <>
            <button type="button" onClick={goBack}>Go to back</button>
                <div className={styles.boxMovie}>
                        {movieInfo.backdrop_path ? (<img src={PATH_IMAGE + movieInfo.backdrop_path} alt={movieInfo.original_title} />) : <div className={styles.error}>Sorry, the path to image is broken or ampty</div>}
                <div>        
                <h2>{movieInfo.original_title}</h2>
                <h3>User score: {score}</h3>
                <h3>Overview:</h3>
                <p>{movieInfo.overview}</p>
                <h3>Genres:</h3>
                <ul>
                    {movieInfo.genres.map(({ id, name }) => (<li key={id} id={id}>{name}</li>))}
                            </ul>
                </div>
                </div>
                <div className={styles.boxInfo}>
                    <h3>Addition information</h3>
                    <ul className={styles.linkList}>
                            <li>
                                <Link to='credits' state={{from: '/'}}>Casts</Link>
                            </li>
                            <li>
                                <Link to='reviews' state={{from: '/'}}>Reviews</Link>
                            </li>
                        </ul>
                    <Outlet/>    
                </div>    
            </>)}
            </main>
)
}

export default MovieDetails;
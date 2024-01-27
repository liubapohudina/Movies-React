import { useParams, useNavigate } from "react-router-dom";
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
    
    const goBack = () => { navigate(-1) };

    const score = (movieInfo.vote_average * 10).toFixed(1);
    const PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

    return (
        <section>
            {loading && <Loader/>}
            {movieInfo && (
                <>
            <button type="button" onClick={goBack}>Go to back</button>
                <div className={styles.boxMovie}>
                        <img src={PATH_IMAGE + movieInfo.backdrop_path} alt={movieInfo.original_title} />
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
                                <Link to='credits'>Casts</Link>
                            </li>
                            <li>
                                <Link to='reviews'>Reviews</Link>
                            </li>
                        </ul>
                    <Outlet/>    
                </div>    
            </>)}
            </section>
)
}

export default MovieDetails;
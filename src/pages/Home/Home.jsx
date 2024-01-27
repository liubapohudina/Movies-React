import styles from './home.module.css'
import MoviesList from "components/MovieList/MovieList";
import { getPopularMovies } from "services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Loader } from "components/Loader/Loader";

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    


    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const resp = await getPopularMovies();
                setMovies(resp.results?.length ? resp.results : [])
            }
            catch (error) {
                toast.error("Something wrong...")
            }
            finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, []);
    return (
        <div className={styles.boxListMovies}>
            {loading && <Loader />}
            <h1 className={styles.h}>Popular movies</h1>
            {Boolean(movies) ? <MoviesList movies={movies} /> : <p>Sorry, we don`t have movies for this query</p>}
            </div>
    )
 }

export default Home;
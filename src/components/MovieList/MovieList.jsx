import { getPopularMovies } from "services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styles from '../MovieList/movieList.module.css'
import { Loader } from "components/Loader/Loader";

const MoviesList = () => {
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


    const elements = movies.map(({ id, title }) => (<li id={id} key={id}>
        <Link className={styles.link} to={`/movies/${id}`}>{title}</Link>
    </li>))

    return (
        <div>
            {loading && <Loader />}
            {movies &&
                <ul className={styles.list}>{elements}</ul>
            }
        </div>
            )
}
export default MoviesList;


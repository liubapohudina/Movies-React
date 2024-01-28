
import { Link, useLocation } from "react-router-dom";
import styles from '../MovieList/movieList.module.css';


const MoviesList = ({movies, page}) => {
    const location = useLocation();


    const elements = movies.map(({ id, title }) => (<li id={id} key={id}>
        <Link className={styles.link} to={`/movies/${id}`} state={{from: location}}>{title}</Link>
    </li>))

    return (
        <div>
            {movies &&
                <ul className={styles.list}>{elements}</ul>
            }
        </div>
            )
}
export default MoviesList;


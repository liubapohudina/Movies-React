import { Loader } from "components/Loader/Loader";
import MoviesList from "components/MovieList/MovieList";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovieSearch } from "services/api";
import styles from './movies.module.css';

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [showBtnLoadMore, setShowBtnLoadMore] = useState(false); 
    const [totalresults, setTotalresults] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('query');
    const page = searchParams.get('page');


    const handleClickSubmit = ({ search }) => {
        setSearchParams({query: search, page : 1})
    }

    useEffect(() => {
        if (!search) {
            return;
        }
        setLoading(true);
        const fetchSearchMovie = async() => {
            try {
                const resp = await getMovieSearch(search, page);
                setMovies(resp.results);
                setTotalresults(resp.total_results);
                if (resp.results.length === 0) {
                    toast.info("Sorry, we don`t have movies for this query. Please, enter another word!")
                }
                if (resp.total_results >= 21) {
                    setShowBtnLoadMore(true);
                } else {
                    setShowBtnLoadMore(false);
                }
            }
            catch {
             toast.error("Something wrong...")
            }
            finally {
                setLoading(false)
            }
        }
        fetchSearchMovie();
        
    }, [page, search, setSearchParams])

    useEffect(() => {
           if (totalresults) {
          toast.info(`We found ${totalresults} movies!`)
    }
    }, [totalresults])
    

    const btnLoadMore = () => setSearchParams({query: search, page: Number(page) + 1});

    return (
        <main className={styles.box}>
            <h1 className="hidden">Search</h1>
            <Searchbar handleClickSubmit={handleClickSubmit} />
            {loading && <Loader/>}
            {Boolean(movies.length) && <MoviesList movies={movies} />}
            {showBtnLoadMore && <button className={styles.btn} onClick={btnLoadMore} type="button">Next page</button>}
        </main>
    )

}

export default Movies;
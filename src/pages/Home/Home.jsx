import styles from './home.module.css'
import MoviesList from "components/MovieList/MovieList";

const Home = () => {
    return (
        <div className={styles.boxListMovies}>
            <h1 className={styles.h}>Popular movies</h1>
            <MoviesList/>
            </div>
    )
//     const [popularMovies, setPopularMovies] = useState();
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getPopularMovies();
//                 console.log(data)
//                 if (data && data.results) {
//                     setPopularMovies(data.results);
//                 }
//             } catch (error) {
//                 console.error("Error fetching popular movies:", error);
//             }
//         };

//         fetchData();
//     }, [setPopularMovies]);

 
//     return (
//         <MoviesList layout={popularMovies} />
//     )
 }

export default Home;
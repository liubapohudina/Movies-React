import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getMovieReviews } from "services/api";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import ReviewsItem from "./ReviewsItem/ReviewsItem";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { movie_id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchReviews = async () => {
            try {
                const resp = await getMovieReviews(movie_id)
                setReviews(resp.results)
            }
            catch {
               toast.error("Something wrong...")
            }
            finally {
                setLoading(false);
            }
        }
        fetchReviews();
    },[movie_id])
    return (
        <div>
            {loading && <Loader />}
            {Boolean(reviews.length) ? <ReviewsItem datareviews={reviews} /> : <p>We don`t have any information for this query</p>}
       </div>
   )
}

export default Reviews
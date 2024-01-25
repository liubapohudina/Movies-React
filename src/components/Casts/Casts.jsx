import { Loader } from "components/Loader/Loader";
import { getMovieCasts } from "services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CastItem from "./CastItem/CastItem";

const Casts = () => {

    const [loading, setLoading] = useState(false);
    const [casts, setCasts] = useState([]);

    const {movie_id} = useParams();
    

    useEffect(() => {
        setLoading(true);
        const fetchCasts = async () => {
            try {
                const resp = await getMovieCasts(movie_id);
                setCasts(resp.cast?.length ? resp.cast : [])
        }
        catch {
         toast.error("Something wrong...")
        }
        finally {
            setLoading(false)
        }
        }
        fetchCasts();
    }, [movie_id])
    return (
        <div>
            {loading && <Loader />}
            {Boolean(casts.length) ? <CastItem datacast={casts} /> : <p>We don`t have any information for this query</p>}
        </div>
   )
}

export default Casts;
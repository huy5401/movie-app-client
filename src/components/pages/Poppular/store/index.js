import { useState } from "react";
import { Alert } from "react-bootstrap";
import tmdbApi, { movieType } from "../../../../api/tmdbApi";


const usePopular = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const fetchApi = async () => {
        setIsLoading(true)
        const url = movieType.popular;
        try {

            const dataResult = await tmdbApi.getMoviesList(url, { params: { page: 2 } });
            const { results } = dataResult;
            setIsLoading(false)
            setPopularMovie(results)

        } catch (error) {
            Alert.log("sdfsdf");
        }
    }


    return {
        isLoading,
        popularMovie,
        fetchApi
    }
}

export default usePopular
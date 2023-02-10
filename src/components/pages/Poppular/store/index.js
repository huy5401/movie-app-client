import { useState } from "react";
import { Alert } from "react-bootstrap";
import tmdbApi, { movieType } from "../../../../api/tmdbApi";


const usePopular = () => {
    const [popularMovie, setPopularMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const fetchApi = async (page=1) => {
        setIsLoading(true)
        const url = movieType.popular;
        try {

            const dataResult = await tmdbApi.getMoviesList(url, { params: { page: page } });
            // const { results } = dataResult;
            console.log(dataResult)
            setIsLoading(false)
            setPopularMovie(dataResult)
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
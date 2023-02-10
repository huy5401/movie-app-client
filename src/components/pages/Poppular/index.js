import React, { useEffect } from 'react'
import MovieList from '../../MovieList';
import usePopular from './store';

export default function Popular() {

    const {isLoading, popularMovie, fetchApi } = usePopular()
    useEffect(() => {
        fetchApi();
    },[])

    return (
        <div>
            {!isLoading ? 
            <MovieList data={popularMovie}></MovieList> 
            : <>loadding ...</>}
        </div>
    )
}

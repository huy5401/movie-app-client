import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../../api/tmdbApi';
import MovieList from '../../MovieList';
import CardMovieSkeleton from '../../Skeleton/ListMovie/CardMovieSkeleton';

export default function SearchResult() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchResult, setSearchResult] = useState({});
    const { keyword } = useParams();
    console.log(keyword)
    const fetchApi = async () => {
        setIsLoading(true)
        try {
            const cate = 'multi'
            const result = await tmdbApi.search(cate, keyword);
            console.log(result)
            setIsLoading(false);
            setSearchResult(result);
        } catch (error) {
            Alert.log("error");
        }
    }

    useEffect(() => {
        fetchApi();
        console.log("aaaa");
    }, [keyword]);
    console.log(searchResult);
    return (
        <div>
            <div style={{color:'white'}}>{`Kết quả tìm kiếm cho: "${keyword}"`}</div>
            <div>
                {!isLoading ? <>{
                    (searchResult.results.length !== 0) ? <MovieList data={searchResult}></MovieList> : <div style={{color:'white'}}>Không có kết quả</div>
                }
                    
                </>
                    : <CardMovieSkeleton></CardMovieSkeleton>}
            </div>
        </div>
    )
}

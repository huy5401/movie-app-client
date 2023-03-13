import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import tmdbApi, { movieType } from '../../../api/tmdbApi';
import MovieList from '../../MovieList';
import styles from '../../MovieList/MovieList.module.scss'
import classNames from 'classnames/bind';
import CardMovieSkeleton from '../../Skeleton/ListMovie/CardMovieSkeleton';

const cx = classNames.bind(styles)
export default function Upcomming() {

    // const {isLoading, popularMovie, fetchApi } = usePopular()
    const [upcomingMovie,setUpcommingMovie ] = useState({});
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const fetchApi = async () => {
        setIsLoading(true)
        const url = movieType.upcoming;
        try {
            const dataResult = await tmdbApi.getMoviesList(url, { params: { page: page } });
            console.log(dataResult)
            setIsLoading(false)
            setUpcommingMovie(dataResult)
        } catch (error) {
            Alert.log("error");
        }
    }
    
    const pageCount = 500;
    
    const handlePageClick = (data) => {
        setPage(data.selected);
      }
    useEffect(() => {
        fetchApi();
    },[page]);
    return (
        <div>
            {!isLoading ? <>
                <MovieList data={upcomingMovie}></MovieList> 
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    marginPagesDisplayed={4}
                    containerClassName={cx('pagination')}
                    pageClassName={cx('page-item')}
                    previousClassName={cx('page-item','direction-item')}
                    nextClassName={cx('page-item','direction-item')}
                    breakClassName={cx('page-item')}
                    activeClassName={cx('active')}
                    renderOnZeroPageCount={false}
                    forcePage={page}
                />
            </>
            : <CardMovieSkeleton></CardMovieSkeleton>}
        </div>
        
    )
}

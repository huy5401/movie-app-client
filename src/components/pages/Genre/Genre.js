import React from 'react'
import 'swiper/swiper.css';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Alert } from 'antd';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import tmdbApi from '../../../api/tmdbApi';
import MovieList from '../../MovieList';
import CardMovieSkeleton from '../../Skeleton/ListMovie/CardMovieSkeleton';
import styles from '../../MovieList/MovieList.module.scss';

const cx = classNames.bind(styles);

export default function Genre() {
  const { genreId } = useParams();
  const [page, setPage] = useState(1)
  // const [listMovie, setListMovie] = useState({})
  const [listMovie, setListMovie] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchApi = async () => {
    setIsLoading(true)
    try {
      setIsLoading(true)
      const dataResult = await tmdbApi.discoverMovie({ params: { page: page, sort_by: "popularity.desc", with_genres: genreId } });
      setListMovie(dataResult.results)
      setIsLoading(false)
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
  }, [page, genreId]);
  
  return (
    <div>
      {!isLoading ? <>
        <MovieList data={listMovie}></MovieList>
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
          previousClassName={cx('page-item', 'direction-item')}
          nextClassName={cx('page-item', 'direction-item')}
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

import React, { useEffect, useState } from 'react'
import styles from './MovieList.module.scss';
import classNames from 'classnames/bind';
import MovieCard from '../MovieCard';
import ReactPaginate from 'react-paginate';

const cx = classNames.bind(styles);

export default function MovieList({ data, isLoading }) {
  // const [currentItems, setCurrentItems] = useState([]);
  // const [itemOffset, setItemOffset] = useState(0);
  // console.log("movie list ", typeof data.results);
  // const itemsPerPage = 10;
  // const endOffset = itemOffset + itemsPerPage;
  // const pageCount = data.total_pages;
  // console.log(pageCount)
  const {results} = data;
  const pageCount = 500;
  return (
    <div className={cx('wrapper')}>
      {
        results && results.map(movie => (
          <MovieCard data={movie} key={movie.id}></MovieCard>
        ))
      }
      
    </div>
  )
}

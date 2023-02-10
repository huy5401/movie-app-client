import React, { useEffect, useState } from 'react'
import styles from './MovieList.module.scss';
import classNames from 'classnames/bind';
import MovieCard from '../MovieCard';
import ReactPaginate from 'react-paginate';

const cx = classNames.bind(styles);

export default function MovieList({ data, handleSetPage }) {
  // const [currentItems, setCurrentItems] = useState([]);
  // const [itemOffset, setItemOffset] = useState(0);
  // console.log("movie list ", typeof data.results);
  // const itemsPerPage = 10;
  // const endOffset = itemOffset + itemsPerPage;
  // const pageCount = data.total_pages;
  // console.log(pageCount)
  const handlePageClick = (data) => {
    handleSetPage(data.selected);
  }
  const {results} = data;
  const pageCount = 500;
  return (
    <div className={cx('wrapper')}>
      {
        results && results.map(movie => (
          <MovieCard data={movie} key={movie.id}></MovieCard>
        ))
      }
      {/* <ReactPaginate
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
      /> */}
    </div>
  )
}

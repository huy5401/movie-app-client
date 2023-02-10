import React, { useEffect, useState } from 'react'
import styles from './MovieList.module.scss';
import classNames from 'classnames/bind';
import MovieCard from '../MovieCard';
import ReactPaginate from 'react-paginate';

const cx = classNames.bind(styles);

export default function MovieList({ data }) {
  // const [currentItems, setCurrentItems] = useState([]);
  // const [itemOffset, setItemOffset] = useState(0);
  // console.log("movie list ", typeof data.results);
  // const itemsPerPage = 10;
  // const endOffset = itemOffset + itemsPerPage;
  // const pageCount = data.total_pages;
  // console.log(pageCount)
  const handlePageClick = () => {

  }
  const pageCount = 50;
  console.log("movie list data",data);
  return (
    <div className={cx('wrapper')}>
      {
        data.map(movie => (
          <MovieCard data = {movie}></MovieCard>
        ))
      }
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

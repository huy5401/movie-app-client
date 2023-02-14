import React, { useEffect, useLayoutEffect, useState } from 'react'
import MovieList from '../../MovieList';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import tmdbApi, { category, movieType } from '../../../api/tmdbApi';
import Slider from '../../Slider';

const cx = classNames.bind(styles);
export default function Home() {
  const [listMovie, setListMovie] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      const url = movieType.popular;
      const result = await tmdbApi.getMoviesList(url, { params: { page: 2 } });
      console.log(result);
      setListMovie(result)
    }
    fetchApi();
  }, [])
  return (
    <>
      <div className={cx('wrapper')}>
        <MovieList data={listMovie}></MovieList>
      </div>
    </>
  )
}

import React, { useEffect, useLayoutEffect, useState } from 'react'
import MovieList from '../../MovieList';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import tmdbApi, { movieType } from '../../../api/tmdbApi';
import CardMovieSkeleton from '../../Skeleton/ListMovie/CardMovieSkeleton';

const cx = classNames.bind(styles);
export default function Home() {
  const [listMovie, setListMovie] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const url = movieType.popular;
      setIsLoading(true);
      const result = await tmdbApi.getMoviesList(url, { params: { page: 2 } });
      setIsLoading(false);
      setListMovie(result);
    }
    fetchApi();
  }, [])
  return (
    <div>
      {
        !isLoading ? <><MovieList data={listMovie}></MovieList></> : <CardMovieSkeleton></CardMovieSkeleton>
      }
    </div>

    // <div className={cx('wrapper')}>

    // </div>
  )
}

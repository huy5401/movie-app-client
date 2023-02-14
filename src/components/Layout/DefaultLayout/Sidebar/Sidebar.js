import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import MovieItem from '../../../MovieItem/MovieItem'
import { useState } from 'react'
import tmdbApi, { movieType } from '../../../../api/tmdbApi'
import { Alert } from 'react-bootstrap'

const cx = classNames.bind(styles)
export default function Sidebar() {
  const [upcoming, setUpcoming] = useState({});
  const [trending, setTrending] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchApi = async () => {
    setIsLoading(true)
    const url = movieType.upcoming;
    try {
        const upcomingResult = await tmdbApi.getMoviesList(url, { params: { page: 1 } });
        console.log(upcomingResult)
        setIsLoading(false)
        setUpcoming(upcomingResult)
    } catch (error) {
        Alert.log("error");
    }
}
  return (
    <div className={cx('wrapper')}>
      <div className={cx('upcoming')}>
        <h5>UPCOMING</h5>
        <div className={cx('content')}>
          <ul>
            <li>
              <MovieItem></MovieItem>
            </li>
            <li>
              <MovieItem></MovieItem>
            </li>
            <li>
              <MovieItem></MovieItem>
            </li>
            <li>
              <MovieItem></MovieItem>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('trending')}>
        <h5>TRENDING</h5>
        <div className={cx('trending-time')}>

        </div>
        <div className={cx('content')}>
          <ul>
            <li>
              <MovieItem></MovieItem>
            </li>
            <li>
              <MovieItem></MovieItem>
            </li>
            <li>
              <MovieItem></MovieItem>
            </li>
            <li>
              <MovieItem></MovieItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import MovieItem from '../../../MovieItem/MovieItem'
import { useState } from 'react'
import tmdbApi, { movieType } from '../../../../api/tmdbApi'
import { Alert } from 'react-bootstrap'
import { useEffect } from 'react'

const cx = classNames.bind(styles)
export default function Sidebar() {
  const [upcoming, setUpcoming] = useState({})
  const [trending, setTrending] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const fetchApi = async () => {
    const url_upcoming = movieType.upcoming;
    try {
      setIsLoading(true);
      const dataResult = await tmdbApi.getMoviesList(url_upcoming, { params: { page: 1 } });
      setIsLoading(false);
      setUpcoming(dataResult);
    } catch (error) {
      Alert.log("error");
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <div className={cx('wrapper')}>
      <div className={cx('upcoming')}>
        <h5>UPCOMING</h5>
        <div className={cx('content')}>
          {
            !isLoading ? <ul> {
              upcoming.results.slice(0,6).map(movie => (
                <li key={movie.id}>
                  <MovieItem data={movie}></MovieItem>
                </li>
              ))
            }</ul> : <>loadding ...</>
          }
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
          </ul>
        </div>
      </div>
    </div>
  )
}

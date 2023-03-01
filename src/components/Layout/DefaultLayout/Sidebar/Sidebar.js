import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import MovieItem from '../../../MovieItem/MovieItem'
import { useState } from 'react'
import tmdbApi, { mediaType, movieType, timeWindow } from '../../../../api/tmdbApi'
import { Alert } from 'react-bootstrap'
import { useEffect } from 'react'
import ItemMovieSkeleton from '../../../Skeleton/ItemMovie/ItemMovieSkeleton'

const cx = classNames.bind(styles)
export default function Sidebar() {
  const [upcoming, setUpcoming] = useState({})
  const [trending, setTrending] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const fetchApi = async () => {
    const url_upcoming = movieType.upcoming;
    try {
      setIsLoading(true);
      const upcomingResult = await tmdbApi.getMoviesList(url_upcoming, { params: { page: 1 } });
      const trendingResult = await tmdbApi.getTrending(mediaType.movie, timeWindow.week)
      setIsLoading(false);
      setUpcoming(upcomingResult);
      setTrending(trendingResult);
    } catch (error) {
      Alert.log("error");
    }
  }
  const renderSkeletonHandle = () => {
    let listSkeletonItem = []
    for (var i = 0; i < 4; i++) {
      listSkeletonItem.push(<ItemMovieSkeleton></ItemMovieSkeleton>)
    }
    return listSkeletonItem;
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
              upcoming.results.slice(0, 6).map(movie => (
                <li key={movie.id}>
                  <MovieItem data={movie}></MovieItem>
                </li>
              ))
            }</ul> : <>{renderSkeletonHandle()}</>
          }
        </div>
      </div>
      <div className={cx('trending')}>
        <h5>TRENDING</h5>
        <div className={cx('trending-time')}>

        </div>
        <div className={cx('content')}>
          {
            !isLoading ? <ul> {
              trending.results.slice(0, 6).map(movie => (
                <li key={movie.id}>
                  <MovieItem data={movie}></MovieItem>
                </li>
              ))
            }</ul> : <>{renderSkeletonHandle()}</>
          }
        </div>
      </div>
    </div>
  )
}

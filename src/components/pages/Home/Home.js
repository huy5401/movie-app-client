import React, { useEffect, useLayoutEffect, useState } from 'react'
import MovieList from '../../MovieList';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import tmdbApi, { movieType } from '../../../api/tmdbApi';
import CardMovieSkeleton from '../../Skeleton/ListMovie/CardMovieSkeleton';
import Comment from '../../Comment/Comment';

const cx = classNames.bind(styles);
export default function Home() {
  const [topRate, setTopRate] = useState([]);
  const [mystery, setMystery] = useState([]);
  const [music, setMucic] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const url = movieType.top_rated;
      setIsLoading(true);
      const topRate = await tmdbApi.getMoviesList(url, { params: { page: 1 } });
      const mystery = await tmdbApi.discoverMovie({ params: { page: 2, sort_by: "popularity.desc", with_genres: 9648 } });
      const music = await tmdbApi.discoverMovie({ params: { page: 1, sort_by: "popularity.desc", with_genres: 10402 } });
      setIsLoading(false);
      setTopRate(topRate.results.slice(0,12));
      setMystery(mystery.results.slice(0,8));
      setMucic(music.results.slice(0,8));
    }
    fetchApi();
  }, [])
  // let location = window.location.href;
  return (
    <div>
      <div style={{color: 'var(--active)', fontSize:'2.2rem', padding: '10px 0'}}>TOP RATED</div>
      {
        !isLoading ? <><MovieList data={topRate}></MovieList></> : <CardMovieSkeleton></CardMovieSkeleton>
      }
      {/* <Comment dataHref={location}></Comment> */}
      <div style={{color: 'var(--active)', fontSize:'2.2rem', padding: '10px 0', marginTop:'15px'}}>MYSTERY</div>
      {
        !isLoading ? <><MovieList data={mystery}></MovieList></> : <CardMovieSkeleton></CardMovieSkeleton>
      }
      <div style={{color: 'var(--active)', fontSize:'2.2rem', padding: '10px 0', marginTop:'15px'}}>MUSIC</div>
      {
        !isLoading ? <><MovieList data={music}></MovieList></> : <CardMovieSkeleton></CardMovieSkeleton>
      }
    </div>
  )
}

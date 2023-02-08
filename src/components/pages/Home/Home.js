import React from 'react'
import MovieList from '../../MovieList';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cx('wrapper')}>
      <MovieList></MovieList>
    </div>
  )
}

import React from 'react';
import classNames from 'classnames/bind';
import styles from './MovieItem.module.scss';
import apiConfig from '../../utils/apiConfig';

const cx = classNames.bind(styles);
export default function MovieItem({ data }) {
  // const image_path = data.backdrop_path;
  console.log(data);
  return (
    <> {
      data && <div className={cx('wrapper')}>
        <img src={data.backdrop_path && apiConfig.originalImage(data.backdrop_path)} alt='MovieItemImage'></img>
        <div className={cx('content-right')}>
          <div className={cx('title')}>Black Pander</div>
          <p className={cx('year')}>{data.release_date}</p>
          <div className={cx('rating')}>Rate: {data.vote_average}</div>
        </div>
      </div>
    }
    </>
  )
}

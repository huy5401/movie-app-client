import React from 'react';
import classNames from 'classnames/bind';
import styles from './MovieItem.module.scss';
import apiConfig from '../../utils/apiConfig';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export default function MovieItem({ data }) {
  const countStar = Math.round(data.vote_average/2);
  const star = [];
  for(var i=0; i< countStar; i++){
    star.push(<FontAwesomeIcon icon={faStar} color='#eea300' key={i}></FontAwesomeIcon>)
  }
  // const image_path = data.backdrop_path;
  return (
    <> {
      data && (<Link to={`/movie/${data.id}`} className={cx('movieItemLink')}>
        <div className={cx('wrapper')}>
          <img src={data.backdrop_path && apiConfig.originalImage(data.backdrop_path)} alt='MovieItemImage'></img>
          <div className={cx('content-right')}>
            <div className={cx('title')}>{data.title}</div>
            <p className={cx('year')}>{data.release_date}</p>
            <div className={cx('rating')}>{
              star
            }</div>
          </div>
        </div>
      </Link>)
    }
    </>
  )
}

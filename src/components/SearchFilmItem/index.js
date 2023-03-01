import React from 'react'
import classNames from 'classnames/bind'
import styles from './SearchFilmItem.module.scss'
import { Link } from 'react-router-dom'
import apiConfig from '../../utils/apiConfig'

const cx = classNames.bind(styles)
export default function SearchFilmItem({ data }) {
  return (
    <Link to={`/movie/${data.id}`} className={cx('searchItemLink')}>
      <div className={cx('wrapper')}>
        <div className={cx('imgWrapper')}>
          <img src={apiConfig.originalImage(data.backdrop_path)}></img>
        </div>
        <div>
          <div className={cx('vi-name')}>{data.title}</div>
          <p className={cx('en-name')}>{data.release_date}</p>
        </div>
      </div>
    </Link>
  )
}

import React from 'react'
import classNames from 'classnames/bind'
import styles from './SearchFilmItem.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
export default function SearchFilmItem({ data }) {
  return (
    <Link to={`/movie/${data.id}`} className={cx('searchItemLink')}>
      <div className={cx('wrapper')}>
        <div className={cx('vi-name')}>{data.title}</div>
        <p className={cx('en-name')}>{data.release_date}</p>
      </div>
    </Link>
  )
}

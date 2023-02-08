import React from 'react'
import classNames from 'classnames/bind'
import styles from './SearchFilmItem.module.scss'

const cx = classNames.bind(styles)
export default function SearchFilmItem({data}) {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('vi-name')}>{data.title}</div>
        <p className={cx('en-name')}>{data.release_date}</p>
    </div>
  )
}

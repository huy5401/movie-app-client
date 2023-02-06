import React from 'react'
import classNames from 'classnames/bind'
import styles from './SearchFilmItem.module.scss'

const cx = classNames.bind(styles)
export default function SearchFilmItem() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('vi-name')}>Tình yêu chậm trễ </div>
        <p className={cx('en-name')}>Delayed love</p>
    </div>
  )
}

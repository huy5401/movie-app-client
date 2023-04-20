import React from 'react'
import Header from '../DefaultLayout/Header/Header'
import styles from '../DefaultLayout/DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Footer from '../DefaultLayout/Footer/Footer'
import Slider from '../../Slider'

const cx = classNames.bind(styles)
export function WatchLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('container')}>
        <div className={cx('content')}>
          {children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

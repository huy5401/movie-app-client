import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Slider from '../../Slider'
import Footer from './Footer/Footer'

const cx = classNames.bind(styles)
export default function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('slider')}>
        <div className={cx('title-slider')}>HOT FILM</div>
        <Slider hotMovie></Slider>
      </div>
      <div className={cx('container')}>
        <div className={cx('content')}>
          {children}
        </div>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  )
}

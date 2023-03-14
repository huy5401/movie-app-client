import React from 'react'
import Header from '../DefaultLayout/Header/Header'
import Sidebar from '../DefaultLayout/Sidebar/Sidebar'
import styles from '../DefaultLayout/DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Footer from '../DefaultLayout/Footer/Footer'

const cx = classNames.bind(styles)
export default function MovieDetailLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
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

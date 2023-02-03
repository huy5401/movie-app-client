import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export default function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('container')}>
        <div className={cx('content')}>
          {children}
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  )
}

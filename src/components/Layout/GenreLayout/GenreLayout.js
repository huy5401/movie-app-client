import React from 'react'
import classNames from 'classnames/bind';
import styles from '../DefaultLayout/DefaultLayout.module.scss'
import Header from '../DefaultLayout/Header/Header';
import Sidebar from '../DefaultLayout/Sidebar/Sidebar';
import genreStyles from './GenreLayout.module.scss';

const st = classNames.bind(genreStyles);
const cx = classNames.bind(styles);
export default function GenreLayout({children}) {
  return (
    <div className={cx('wrapper')}>
    <Header></Header>
    <div className={st('breadCrumb')}>
        
    </div>
    <div className={cx('container')}>
      <div className={cx('content')}>
        {children}
      </div>
      <Sidebar></Sidebar>
    </div>
  </div>
  )
}

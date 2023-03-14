import React from 'react'
import classNames from 'classnames/bind';
import styles from '../DefaultLayout/DefaultLayout.module.scss'
import Header from '../DefaultLayout/Header/Header';
import Sidebar from '../DefaultLayout/Sidebar/Sidebar';
import genreStyles from './GenreLayout.module.scss';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../DefaultLayout/Footer/Footer';

const st = classNames.bind(genreStyles);
const cx = classNames.bind(styles);
export default function GenreLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={st('breadCrumb')}>
        {/* <Breadcrumbs></Breadcrumbs> */}
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

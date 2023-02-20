import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import Button from '../../../Button';
import { Link, NavLink } from 'react-router-dom';
import Search from '../../../Search';
import routesConfig from '../../../config/routes';

const cx = classNames.bind(styles)

export default function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('top')}>
        <div className={cx('top-container')}>
          <Link to= {routesConfig.home} className={cx('logo-link')}>
            <img className={cx('logo')} src={images.logo} alt='logo'></img>
          </Link>
          <Search></Search>
          <div className={cx('action')}>
            {/* action */}
          </div>
        </div>
      </div>
      <div className={cx('bottom')}>
        <div className={cx('bot-container')}>
          <ul>
            <li><NavLink to='/' className={(nav) => cx('main-menu',{active:nav.isActive})}>Home</NavLink></li>
            <li><NavLink to={routesConfig.popular} className={(nav) => cx('main-menu',{active:nav.isActive})}>popular</NavLink></li>
            <li><NavLink to='/upcomming' className={(nav) => cx('main-menu',{active:nav.isActive})}>upcomming</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

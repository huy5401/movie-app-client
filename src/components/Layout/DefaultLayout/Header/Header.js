import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import Button from '../../../Button';
import { Link } from 'react-router-dom';
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
            <li className={cx('active')}><Link to='/' className={cx('main-menu')}>Home</Link></li>
            <li><Link to={routesConfig.popular} className={cx('main-menu')}>popular</Link></li>
            <li><Link to='/upcomming' className={cx('main-menu')}>upcomming</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import { Link, NavLink } from 'react-router-dom';
import Search from '../../../Search';
import routesConfig from '../../../config/routes';
import { Dropdown, Space } from 'antd';
import tmdbApi from '../../../../api/tmdbApi';

const cx = classNames.bind(styles)

export default function Header() {
  let items = [];
  useEffect(() => {
    const fetchApi = async () => {
      const result = await tmdbApi.getGenre();
      console.log(result);
      items.splice(0, items.length);
      result.genres.map((item, index) => {
        items.push({
          key: index,
          label: (
            <Link to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          )
        })
      });
    }
    fetchApi();
  }, [])
  return (
    <header className={cx('wrapper')}>
      <div className={cx('top')}>
        <div className={cx('top-container')}>
          <Link to={routesConfig.home} className={cx('logo-link')}>
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
            <li><NavLink to='/' className={(nav) => cx('main-menu', { active: nav.isActive })}>Home</NavLink></li>
            <li><NavLink to={routesConfig.popular} className={(nav) => cx('main-menu', { active: nav.isActive })}>popular</NavLink></li>
            <li><NavLink to={routesConfig.upcomming} className={(nav) => cx('main-menu', { active: nav.isActive })}>upcomming</NavLink></li>
            <li>
              <Dropdown
                rootClassName={cx('listGenre')}
                placement='bottom'
                menu={{ items }}
                overlayClassName={cx('overlayDropdown')}>
                {/* <NavLink to='/upcomming' className={(nav) => cx('main-menu', { active: nav.isActive })}> */}
                <Space className={cx('dropdown')}>
                  genres
                </Space>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

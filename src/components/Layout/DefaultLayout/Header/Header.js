import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper/index';
import SearchFilmItem from '../../../SearchFilmItem';
import Button from '../../../Button';

const cx = classNames.bind(styles)

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  },[])
  return (
    <header className={cx('wrapper')}>
      <div className={cx('top')}>
        <div className={cx('top-container')}>
          <img className={cx('logo')} src={images.logo} alt='logo'></img>
          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={attrs => (
              <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                <PopperWrapper>
                  <div className={cx('search-result-title')}>Search result for: <p>"Delayed"</p></div>
                  <SearchFilmItem></SearchFilmItem>
                  <SearchFilmItem></SearchFilmItem>
                  <SearchFilmItem></SearchFilmItem>
                  <SearchFilmItem></SearchFilmItem>
                </PopperWrapper>
              </div>

            )}>
            <div className={cx('search')}>
              <input type='text' placeholder='Search movies or actor'></input>
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
          <div className={cx('action')}>
              
          </div>
        </div>
      </div>
      <div className={cx('bottom')}>
        <div className={cx('bot-container')}></div>
      </div>
    </header>
  )
}

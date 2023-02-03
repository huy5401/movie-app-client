import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

export default function Header() {
  return (
    <header className={cx('wrapper')}> 
        <div className={cx('top')}>
            <div className={cx('top-container')}>
                <img className={cx('logo')} src={images.logo} alt='logo'></img>
                <div className={cx('search')}>
                  <input type='text' placeholder='Search movies or actor'></input>
                  <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />                  
                  </button>
                </div>
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

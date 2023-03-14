import React from 'react'
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('copyright')}>
                <div>&copy; 2023 Movie Chill Inc. All rights reserved</div>
                <a>Support</a>
                <a>Terms of Use</a>
                <a>Privacy Policy</a>
            </div>
            <div className={cx('icon-contact')}>
                <FontAwesomeIcon icon={faFacebook} className={cx('social-icon')}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram} className={cx('social-icon')}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className={cx('social-icon')}></FontAwesomeIcon>
            </div>
        </div>
    </div>
  )
}

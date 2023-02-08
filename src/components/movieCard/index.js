import React from 'react'
import styles from './movieCard.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

export default function MovieCard() {
    return (
        <Link to='/' className={cx('link-wrap')}>
            <div className={cx('wrapper')}>
                <button>
                    <FontAwesomeIcon icon={faCirclePlay} style={{ color: 'red' }}></FontAwesomeIcon>
                </button>
            </div>
            <h3>Fast & Furious 8</h3>
        </ Link>
    )
}

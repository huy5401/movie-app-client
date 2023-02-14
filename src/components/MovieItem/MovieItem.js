import React from 'react';
import classNames from 'classnames/bind';
import styles from './MovieItem.module.scss';

const cx = classNames.bind(styles);
export default function MovieItem({data}) {
  return (
    <div className={cx('wrapper')}>
        <img src='https://tse4.mm.bing.net/th?id=OIP.WREz-Emdz8Ed9-QPHiBXoAHaEK&pid=Api&P=0' alt='MovieItemImage'></img>
        <div className={cx('content-right')}>
            <div className={cx('title')}>Black Pander</div>
            <p className={cx('year')}>2023</p>
            <div className={cx('rating')}>star</div>
        </div>
    </div>
  )
}

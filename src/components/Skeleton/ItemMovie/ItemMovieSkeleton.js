import React from 'react'
import styles from './ItemMovieSkeleton.module.scss';
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

export default function ItemMovieSkeleton() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('imgWrap')}>
          <Skeleton containerClassName={cx('img')} width={90} height={80}></Skeleton>
        </div>
        <div className={cx('content-right')}>
          <div className={cx('title')}>
            <Skeleton height={44}></Skeleton>
          </div>
        <div className={cx('year')}>
          <Skeleton height={30}></Skeleton>
        </div>
        </div>
    </div>
  )
}

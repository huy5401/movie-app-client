import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './CardMovieSkeleton.module.scss';
import classNames from 'classnames/bind';
import 'react-loading-skeleton/dist/skeleton.css'

const cx = classNames.bind(styles);

export default function CardMovieSkeleton() {
  return (
    <div className={cx('wrapper')}>
      {
        <Skeleton width={160} height={267} count={12} containerClassName={cx('wrapper')} style={{ margin: '0 5px 5px 0' }} ></Skeleton>
      }
    </div>
  )
}

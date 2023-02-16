import React from 'react'
import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function MovieDetail() {
    const {id} = useParams();
    console.log(id);
  return (
    <div className={cx('wrapper')}>MovieDetail</div>
  )
}

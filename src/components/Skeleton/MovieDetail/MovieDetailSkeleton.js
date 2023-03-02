import React from 'react'
import classNames from 'classnames/bind';
import styles from '../../pages/MediaDetail/MovieDetail.module.scss';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);
export default function MovieDetailSkeleton() {
    return (
        <>
            <div className={cx('infor')}>
                <div className={cx('backdrop')}>
                    {/* <img src={apiConfig.originalImage(movieDetail.backdrop_path)} alt='backdrop'></img> */}
                    <Skeleton height={400}></Skeleton>
                </div>
                <div className={cx('detail')}>
                    <div className={cx('title')}>
                        <Skeleton height={50} style={{marginBottom:'10px'}}></Skeleton>
                    </div>
                    
                        <Skeleton height={250}></Skeleton>
                
                    <div className={cx('rating')}>
                        <Skeleton height={60}></Skeleton>
                    </div>
                </div>
            </div>
            <div className={cx('review')}>
                <Skeleton height={150}></Skeleton>
            </div>
        </>
    )
}

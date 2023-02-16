import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';
import { useParams } from 'react-router-dom';
import tmdbApi, { category } from '../../../api/tmdbApi';
import { Alert } from 'react-bootstrap';
import apiConfig from '../../../utils/apiConfig';
import Button from '../../Button';

const cx = classNames.bind(styles);

export default function MovieDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchApi = async () => {
    setIsLoading(true)
    const cate = category.movie;
    try {
      const dataResult = await tmdbApi.detail(cate, id, { params: {} });
      console.log(dataResult)
      setIsLoading(false)
      setMovieDetail(dataResult)
    } catch (error) {
      Alert.log("error");
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);
  console.log(id);
  return (
    <div className={cx('wrapper')}>
      {
        !isLoading ? <> <div className={cx('infor')}>
          <div className={cx('backdrop')}>
            <img src={apiConfig.originalImage(movieDetail.backdrop_path)} alt='backdrop'></img>
            <div className={cx('btn-group')}>
              <Button blue>Download</Button>
              <Button red>Watch</Button>
            </div>
          </div>
          <div className={cx('detail')}>
            <div className={cx('title')}>
              <h2>{movieDetail.title}</h2>
              <p>{movieDetail.release_date}</p>
            </div>
            <div className={cx('detail-content')}></div>
            <div className={cx('rating')}></div>
          </div>
        </div>
          <div className={cx('review')}>
            <div className={cx('review-content')}>
              <h3>Review</h3>
              <div className={cx('review-main')}>{movieDetail.overview}</div>
            </div>
            <div className={cx('tag')}>
              <div className={cx('tag-label')}>Tags</div>
              <span></span>
            </div>
          </div>
        </> : <>loadding</>
      }

    </div>
  )
}

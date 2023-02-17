import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';
import { useParams } from 'react-router-dom';
import tmdbApi, { category } from '../../../api/tmdbApi';
import { Alert } from 'react-bootstrap';
import apiConfig from '../../../utils/apiConfig';
import Button from '../../Button';
import Slider from '../../Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

export default function MovieDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [actor, setActor] = useState([]);
  const [crews, setCrews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchApi = async () => {
    setIsLoading(true)
    const cate = category.movie;
    try {
      const dataResult = await tmdbApi.detail(cate, id, { params: {} });
      const dataActor = await tmdbApi.getActor(id, {params: {}})
      setIsLoading(false)
      setMovieDetail(dataResult);
      setActor(dataActor.cast);
      setCrews(dataActor.crew)
    } catch (error) {
      Alert.log("error");
    }
  }
  useEffect(() => {
    fetchApi();
  }, [id]);
  const getDirector = () => {
    for( var i=0; i< crews.length; i++){
        if(crews[i].job.toString() === "Director" || crews[i].job.toString() === "Casting Director"){
            return crews[i];
        }
    }
    return false;
  }
  const direc = getDirector();
  return (
    <div className={cx('wrapper')}>
      {
        !isLoading ? <>
          <div className={cx('infor')}>
            <div className={cx('backdrop')}>
              <img src={apiConfig.originalImage(movieDetail.backdrop_path)} alt='backdrop'></img>
              <div className={cx('btnGroup')}>
                <Button blue>Download</Button>
                <Button red>Watch</Button>
              </div>
            </div>
            <div className={cx('detail')}>
              <div className={cx('title')}>
                <h2>{movieDetail.title}</h2>
                <p>{movieDetail.release_date}</p>
              </div>
              <div className={cx('detailContent')}>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Status:</dd>
                  <dt>{movieDetail.status}</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Director:</dd>
                  <dt>{direc ? direc.name : "Unknown"}</dt>
                </div>
              </div>
              <div className={cx('rating')}></div>
            </div>
          </div>
          <div className={cx('review')}>
            <div className={cx('reviewContent')}>
              <h3>Review</h3>
              <div className={cx('reviewMain')}>{movieDetail.overview}</div>
            </div>
            <div className={cx('tag')}>
              <span className={cx('tagLabel')}>Tags</span>
              <div></div>
            </div>
          </div>
          <div className={cx('similar')}>
            <div className={cx('similarTitle')}><FontAwesomeIcon icon={faStar} color='#da966e'></FontAwesomeIcon><div>Similar movie</div></div>
              <Slider similar id={id} countItem='4'></Slider>
          </div>
        </> : <>loadding</>
      }

    </div>
  )
}

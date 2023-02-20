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
  const [actors, setActors] = useState([]);
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
      setActors(dataActor.cast);
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
  
  // get countries, genres, actors
  const getProp = (props) => {
      const data = [];
      props.map( prop => data.push(prop.name));
      return data;
  }
  
  const getLanguage = () => {
    const languages = [];
      movieDetail.spoken_languages.map( language => languages.push(language.english_name));
      return languages;
  }
  const direc = getDirector();

  const countStar = Math.round(movieDetail.vote_average/2);
  const star = [];
  for(var i=0; i< 5; i++){
    if(i < countStar) star.push(<FontAwesomeIcon icon={faStar} color='#da966e' key={i}></FontAwesomeIcon>)
    else{
      star.push(<FontAwesomeIcon icon={faStar} color='#bbb' key={i}></FontAwesomeIcon>)
    }
  }
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
                  <dd className={cx('detailTitle')}>Released date:</dd>
                  <dt>{movieDetail.release_date}</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Runtime:</dd>
                  <dt>{movieDetail.runtime} minutes</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Language:</dd>
                  <dt>{movieDetail.spoken_languages && getLanguage().toString()}</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Countries:</dd>
                  <dt>{movieDetail.production_countries && getProp(movieDetail.production_countries).toString()}</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Companies:</dd>
                  <dt>{movieDetail.production_companies && getProp(movieDetail.production_companies).toString()}</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Genres:</dd>
                  <dt>{movieDetail.genres && getProp(movieDetail.genres).toString()}</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Director:</dd>
                  <dt>{direc ? direc.name : "Unknown"}</dt>
                </div>
                <div className={cx('detailItem')}>
                  <dd className={cx('detailTitle')}>Actors:</dd>
                  <dt>{actors && getProp(actors).toString()}</dt>
                </div>
              </div>
              <div className={cx('rating')}>{star}</div>
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

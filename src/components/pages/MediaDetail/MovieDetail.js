import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import tmdbApi, { category } from '../../../api/tmdbApi';
import apiConfig from '../../../utils/apiConfig';
import Button from '../../Button';
import Slider from '../../Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MovieDetailSkeleton from '../../Skeleton/MovieDetail/MovieDetailSkeleton';
import Scrollbars from 'react-custom-scrollbars-2';
import { Modal } from 'antd';
const cx = classNames.bind(styles);

export default function MovieDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [actors, setActors] = useState([]);
  const [crews, setCrews] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [videoTrailer, setVideoTrailer] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchApi = async () => {
    setIsLoading(true)
    try {
      const dataResult = await tmdbApi.detail(id, { params: {} });
      const dataActor = await tmdbApi.getActor(id, { params: {} });
      const dataKeywords = await tmdbApi.getKeywords(id, { params: {} })
      setIsLoading(false)
      setMovieDetail(dataResult);
      setActors(dataActor.cast);
      setCrews(dataActor.crew)
      setKeywords(dataKeywords.keywords || dataKeywords.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchApi();
  }, [id]);

  const getDirector = () => {
    for (var i = 0; i < crews.length; i++) {
      if (crews[i].job.toString() === "Director" || crews[i].job.toString() === "Casting Director") {
        return crews[i];
      }
    }
    return false;
  }

  // get countries, genres, actors
  const getProp = (props) => {
    const data = [];
    props.map(prop => data.push(prop.name));
    return data;
  }

  // get languages
  const getLanguages = () => {
    const languages = [];
    movieDetail.spoken_languages.map(language => languages.push(language.english_name));
    return languages;
  }
  const direc = getDirector();
  const countStar = Math.round(movieDetail.vote_average / 2);
  const star = [];
  for (var i = 0; i < 5; i++) {
    if (i < countStar) star.push(<FontAwesomeIcon icon={faStar} color='#eea300' key={i}></FontAwesomeIcon>)
    else {
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
                <Button blue medium onClick={showModal}>Trailer</Button>
                <Button red medium>Watch</Button>
              </div>
            </div>
            <div className={cx('detail')}>
              <div className={cx('title')}>
                <h2>{movieDetail.title || movieDetail.name}</h2>
                <p>{movieDetail.first_air_date || movieDetail.release_date}</p>
              </div>
              <div className={cx('detailContent')}>
                <Scrollbars width={100} height={100} autoHide autoHideTimeout={2000}>
                  <div className={cx('detailItem')}>
                    <dd className={cx('detailTitle')}>Status:</dd>
                    <dt>{movieDetail.status || "Unkown"}</dt>
                  </div>
                  <div className={cx('detailItem')}>
                    <dd className={cx('detailTitle')}>Released date:</dd>
                    <dt>{movieDetail.first_air_date || movieDetail.release_date}</dt>
                  </div>
                  <div className={cx('detailItem')}>
                    <dd className={cx('detailTitle')}>Runtime:</dd>
                    <dt>{movieDetail.runtime || "Unkown"} minutes</dt>
                  </div>
                  <div className={cx('detailItem')}>
                    <dd className={cx('detailTitle')}>Language:</dd>
                    <dt>{movieDetail.spoken_languages && getLanguages().toString()}</dt>
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
                </Scrollbars>
              </div>
              <div className={cx('rating')}>
                <div className={cx('action')}>
                  <Button blue small className={cx('btnAction')}><FontAwesomeIcon icon={faThumbsUp} color='white'></FontAwesomeIcon><p>Like</p></Button>
                  <Button blue small className={cx('btnAction')}><FontAwesomeIcon icon={faShare} color='white'></FontAwesomeIcon><p>Share</p></Button>
                </div>
                <div className={cx('vote')}>
                  <div className={cx('star')}>{star}</div>
                  <div className={cx('voteCount')}>{`(${movieDetail.vote_count} votes)`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('review')}>
            <div className={cx('reviewContent')}>
              <h3>Review</h3>
              <div className={cx('reviewMain')}>{movieDetail.overview || "Unkown"}</div>
            </div>
            <div className={cx('tag')}>
              <span className={cx('tagLabel')}>Tags</span>
              <div className={cx('tagsIcon')}></div>
              <div className={cx('keywords')}>
                {keywords && keywords.slice(0, 6).map(keyword => (
                  <div key={keyword.id} className={cx('keywordItem')}>{keyword.name}</div>
                ))}
              </div>
            </div>
          </div>
          <div className={cx('commentFB')}>
            <div class="fb-comments" data-href="http://localhost:3000/movie/820232" data-width="500" data-numposts="5"></div>
          </div>
          <div className={cx('similar')}>
            <div className={cx('similarTitle')}><FontAwesomeIcon icon={faStar} color='#eea300'></FontAwesomeIcon><div>Similar movie</div></div>
            <Slider similar id={id} countItem='3'></Slider>
          </div>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </> : <><MovieDetailSkeleton></MovieDetailSkeleton></>
      }

    </div>
  )
}

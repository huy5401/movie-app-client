import React from 'react'
import classNames from 'classnames/bind'
import styles from './Watch.module.scss'
import { useParams } from 'react-router-dom';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import tmdbApi from '../../../api/tmdbApi';
import Slider from '../../Slider';
const cx = classNames.bind(styles);
export default function Watch() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const urlMovie = 'https://1080.hdphimonline.com/share/1359aa933b48b754a2f54adb688bfa77';
    console.log(id);
    const fetchApi = async () => {
        setIsLoading(true)
        try {
            const dataResult = await tmdbApi.detail(id, { params: {} });
            setIsLoading(false);
            setMovie(dataResult);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApi();
    }, [id])

    console.log(movie)
    return (
        <div className={cx('wrraper')}>
            <div className={cx('video')}>
                <iframe
                    title="My Movie"
                    src={urlMovie}
                    width="100%"
                    height="550px"
                    allow="autoplay; fullscreen; picture-in-picture"
                    frameBorder='0'
                />
            </div>
            <div className={cx('infor')}>
                {
                    !isLoading ? <>
                        <div className={cx('title')}>{movie.title || movie.name}</div>
                        <div className={cx('reviewContent')}>
                            <div className={cx('reviewMain')}>{movie.overview || "Unkown"}</div>
                        </div>
                        <div className={cx('action')}>
                            <Button blue small className={cx('btnAction')}><FontAwesomeIcon icon={faThumbsUp} color='white'></FontAwesomeIcon><p>Like</p></Button>
                            <Button blue small className={cx('btnAction')}><FontAwesomeIcon icon={faShare} color='white'></FontAwesomeIcon><p>Share</p></Button>
                        </div>
                    </> : <></>
                }

            </div>
            <div className={cx('comment')}></div>
            <div className={cx('similar')}>
                <div className={cx('similarTitle')}><FontAwesomeIcon icon={faStar} color='#eea300'></FontAwesomeIcon><div style={{color: 'white'}}>Maybe you want to watch</div></div>
                <Slider similar id={id}></Slider>
            </div>
        </div>
    )
}

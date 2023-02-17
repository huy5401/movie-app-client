import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import { Alert } from 'react-bootstrap';
import MovieCard from '../MovieCard';

const cx = classNames.bind(styles);

export default function Slider({hotMovie=false, similar=false, id, countItem}) {
    const [listMovie, setListMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const fetchApi = async () => {
        if(hotMovie){
            // const url = movieType.top_rated;
            try {
                setIsLoading(true);
                const dataResult = await tmdbApi.getMostPopular({ params: { page: 1 } });
                setIsLoading(false);
                setListMovie(dataResult);
            } catch (error) {
                Alert.log("error");
            }
        }else if(similar && id){
            try {
                setIsLoading(true);
                const dataResult = await tmdbApi.getSimilar(id, { params: { page: 1 } });
                setIsLoading(false);
                setListMovie(dataResult);
            } catch (error) {
                Alert.log("error");
            }
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div>
            {!isLoading ? <><Swiper
                spaceBetween={5}
                slidesPerView={countItem || 6}
                // onSlideChange={() => console.log('change')}
                onSwiper={(swiper) => { console.log(swiper) }}
                navigation
                slidePrevClass={cx('prev')}
                scrollbar={{ draggable: true }}
                rewind={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay,Navigation]}
                className={cx('navigation')}
            >
                {listMovie.results.slice(0,15).map(movie => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard data={movie}></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper></> : <>loadding</>}

        </div>

    )
}

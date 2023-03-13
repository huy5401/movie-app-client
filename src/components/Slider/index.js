import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Alert } from 'react-bootstrap';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import tmdbApi from '../../api/tmdbApi';
import MovieCard from '../MovieCard';

const cx = classNames.bind(styles);

export default function Slider({ hotMovie = false, similar = false, id, countItem }) {
    const [listMovie, setListMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const fetchApi = async () => {
        if (hotMovie) {
            // const url = movieType.top_rated;
            try {
                setIsLoading(true);
                const dataResult = await tmdbApi.getMostPopular({ params: { page: 1 } });
                setIsLoading(false);
                setListMovie(dataResult);
            } catch (error) {
                Alert.log("error");
            }
        } else if (similar && id) {
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
                slidesPerView={countItem || 5}
                // onSlideChange={() => console.log('change')}
                // onSwiper={(swiper) => { console.log(swiper) }}
                navigation={true}
                scrollbar={{ draggable: true }}
                rewind={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Navigation]}
                className={cx('navigation')}
            >
                {listMovie.results.slice(0, 15).map(movie => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard data={movie} large></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper></> : <><Swiper
                spaceBetween={5}
                slidesPerView={5}
                // onSlideChange={() => console.log('change')}
                // onSwiper={(swiper) => { console.log(swiper) }}
                slidePrevClass={cx('prev')}
                scrollbar={{ draggable: true }}
                rewind={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Navigation]}
                className={cx('navigation')}
            >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <SwiperSlide key={index}>
                        <Skeleton width={180} height={267} containerClassName={cx('wrapper')} style={{ margin: '0 5px 5px 0' }} ></Skeleton>
                    </SwiperSlide>
                ))}
            </Swiper></>}
        </div>

    )
}

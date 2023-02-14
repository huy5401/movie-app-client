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

export default function Slider() {
    const [hotMovie, setHotMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const fetchApi = async () => {
        const url = movieType.top_rated;
        try {
            setIsLoading(true);
            const dataResult = await tmdbApi.getMoviesList(url, { params: { page: 1 } });
            setIsLoading(false);
            setHotMovie(dataResult);
        } catch (error) {
            Alert.log("error");
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div>
            {!isLoading ? <><Swiper
                spaceBetween={5}
                slidesPerView={6}
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
                {hotMovie.results.slice(0,15).map(movie => (
                    <SwiperSlide>
                        <MovieCard data={movie}></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper></> : <>loadding</>}

        </div>

    )
}

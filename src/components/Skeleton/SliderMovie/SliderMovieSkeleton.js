import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Swiper, { Autoplay, Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'
import styles from '../../Slider/Slider.module.scss'


const cx = classNames.bind(styles)
export default function SliderMovieSkeleton() {
    return (
        <Swiper
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
            modules={[Autoplay, Navigation]}
        >
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <SwiperSlide key={item}>
                    <Skeleton width={160} height={267} containerClassName={cx('wrapper')} style={{ margin: '0 5px 5px 0' }} ></Skeleton>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}


/* eslint-disable @next/next/no-img-element */
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

import data from '@/components/common/data/data.json';

import styles from './main.module.scss';

const MainPage = () => {
    return (
        <main className={styles.wrapperMainPage}>
            <div className='slide'>
                <div className='slide-title'>
                    <span>Top trending</span>
                </div>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 2400,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    speed={500}
                    breakpoints={{
                        425: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        1000: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {data_slider.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className='slide-item'>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading='lazy'
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className='content'>
                <div className='content-title'>For you</div>
                <div className='content-container'>
                    {data.map((item) => {
                        return (
                            <div key={item.data} className='content-item'>
                                <img src={item.thumbnail} alt='' />
                                <div className='content-item-info'>
                                    <div className='content-item-info-song'>
                                        {item.name}
                                    </div>
                                    <div className='content-item-info-auth'>
                                        {item.author}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default MainPage;

const data_slider = [
    {
        id: 1,
        title: 'Chill music',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/slider/chill.jpg',
        url: '/chill-music',
    },
    {
        id: 2,
        title: 'Lofi music',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/slider/lofi.jpg',
        url: '/lofi-music',
    },
    {
        id: 3,
        title: 'Jazz music',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/slider/chill2.jpg',
        url: '/jazz-music',
    },
    {
        id: 4,
        title: 'Rock music',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/slider/lofi2.jpg',
        url: '/rock-music',
    },
];

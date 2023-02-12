/* eslint-disable @next/next/no-img-element */
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';

import data from '@/components/common/data/data.json';
import slide from '@/components/common/data/slide.json';

import styles from './main.module.scss';
import { useEffect, useState } from 'react';

const MainPage = () => {
    const [finalData, setFinalData] = useState([]);

    const randomItem = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setFinalData(randomItem(data));
    }, []);

    return (
        <main className={styles.wrapperMainPage}>
            <div className='slide'>
                <div className='slide-title'>
                    <span>Top trending</span>
                </div>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    // slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 2400,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    // loopFillGroupWithBlank={true}
                    speed={500}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}>
                    {slide.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Link href={`trending/${item.url}`} passHref>
                                    <div className='slide-item'>
                                        <Image
                                            src={item.img}
                                            // srcSet={item.img}
                                            alt=''
                                            width='0'
                                            height='0'
                                            sizes='100vw'
                                            priority
                                        />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className='content'>
                <div className='content-title'>For you</div>
                <div className='content-container'>
                    {finalData &&
                        finalData.length > 0 &&
                        finalData.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    className='content-item'
                                    href={`/watch/${item.slug}`}>
                                    <Image
                                        src={item.thumbnail}
                                        alt=''
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        fill={false}
                                    />
                                    <div className='content-item-info'>
                                        <div className='content-item-info-song'>
                                            {item.name}
                                        </div>
                                        <div className='content-item-info-auth'>
                                            {item.author}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </main>
    );
};

export default MainPage;

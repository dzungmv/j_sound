// import { Autoplay, Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Slider from 'react-animated-slider';
import cssHorizotion from 'react-animated-slider/build/horizontal.css';

import slide from '@/components/common/data/slide.json';
import Image from 'next/image';

const Slider = require('react-animated-slider').default;

const SwiperComp = () => {
    return (
        // <Swiper
        //     modules={[Pagination, Navigation, Autoplay]}
        //     // spaceBetween={30}
        //     // updateOnWindowResize={true}
        //     // observer
        //     // observeParents={true}
        //     autoplay={{
        //         delay: 2400,
        //         disableOnInteraction: false,
        //         pauseOnMouseEnter: true,
        //     }}
        //     loop={true}
        //     speed={500}
        //     breakpoints={{
        //         320: {
        //             slidesPerView: 1,
        //             spaceBetween: 10,
        //         },
        //         768: {
        //             slidesPerView: 2,
        //             spaceBetween: 20,
        //         },
        //         1024: {
        //             slidesPerView: 3,
        //             spaceBetween: 30,
        //         },
        //     }}>
        //     {slide.map((item, index) => {
        //         return (
        //             <SwiperSlide key={item.id} className='slide-item'>
        //                 <Image
        //                     src={item.img}
        //                     alt=''
        //                     width='0'
        //                     height='0'
        //                     sizes='100vw'
        //                     priority
        //                 />
        //             </SwiperSlide>
        //         );
        //     })}
        // </Swiper>

      
    );
};

export default SwiperComp;

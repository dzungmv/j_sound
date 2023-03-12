/* eslint-disable @next/next/no-img-element */

import { Itim } from '@next/font/google';
import styles from './video.module.scss';
import data_more from '@/components/common/data/data.json';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const itimFont = Itim({
    weight: ['400'],
    subsets: ['vietnamese', 'latin'],
});

const Video = ({ data }) => {
    const router = useRouter();
    const isVideoPlaying = [];
    const anotherVideo = [];

    const handleFullScreen = useFullScreenHandle();

    data_more.forEach((item) => {
        item.id === data?.id
            ? isVideoPlaying.push(item)
            : anotherVideo.push(item);
    });

    useEffect(() => {
        const scrollTop = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 800);

        return () => {
            clearTimeout(scrollTop);
        };
    }, []);

    const finalData = [...isVideoPlaying, ...anotherVideo];

    return (
        <div className={styles.wrapperVideo}>
            <FullScreen handle={handleFullScreen}>
                <div className='video-container'>
                    <img src={data?.thumbnail || ''} alt='' loading='lazy' />
                    <div className='video'>
                        {data ? (
                            <iframe
                                key={data?.id || ''}
                                src={data?.link || ''}
                                frameBorder='0'
                                allow='autoplay'
                            />
                        ) : (
                            <div className='video-not-found'>
                                <header>
                                    <div className='header-item'></div>
                                    <div className='header-item'></div>
                                    <div className='header-item'></div>
                                </header>

                                <div className='video-not-found-img'>
                                    <Image
                                        src={
                                            'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/404.png'
                                        }
                                        alt=''
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='exit-btn' onClick={handleFullScreen.exit}>
                        <i className='fa-solid fa-arrow-right-from-bracket'></i>
                    </div>
                </div>
            </FullScreen>

            <div className='btn-fullscreen' onClick={handleFullScreen.enter}>
                <i className='fa-solid fa-expand'></i>
            </div>

            <div className='content'>
                {data ? (
                    <div className='content-left'>
                        <div className='auth-img'>
                            <Image
                                src={data?.author_img || ''}
                                alt=''
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='auth-info'>
                            <span className={itimFont.className}>
                                {data?.name}
                            </span>
                            <div className='auth-name'>{data?.author}</div>
                        </div>
                    </div>
                ) : null}
                <div className='content-right'>
                    <div className='content-title'>Relative</div>
                    <div className='container'>
                        {finalData.map((item) => {
                            return (
                                // if item.id === data?.id => active and render first

                                <div
                                    className={
                                        item.id === data?.id
                                            ? 'item active'
                                            : 'item'
                                    }
                                    key={item.id}
                                    // href={`/video/${item.id}`}
                                    onClick={() => {
                                        router.push(`/watch/${item.slug}`);
                                    }}>
                                    <div className='item-img'>
                                        <Image
                                            src={item.thumbnail}
                                            alt=''
                                            width='0'
                                            height='0'
                                            fill={false}
                                            sizes='100vw'
                                        />
                                    </div>
                                    <div className='item-info'>
                                        <div>
                                            <div className={`item-info-song`}>
                                                {item.name}
                                            </div>
                                            <div className='item-info-auth'>
                                                {item.author}
                                            </div>
                                        </div>

                                        <div className='item-info-type'>
                                            <span className={item.type[0]}>
                                                {' '}
                                                {item.type[0]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;

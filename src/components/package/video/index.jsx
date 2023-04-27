/* eslint-disable @next/next/no-img-element */
'use client';
import axios from 'axios';
import { Itim } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import styles from './video.module.scss';

const itimFont = Itim({
    weight: ['400'],
    subsets: ['vietnamese', 'latin'],
});

const Video = ({ song }) => {
    const router = useRouter();
    const isVideoPlaying = [];
    const anotherVideo = [];
    let finalData = [];

    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const hasMoreRef = useRef(null);

    // allSongs.forEach((item) => {
    //     item._id === song?._id
    //         ? isVideoPlaying.push(item)
    //         : anotherVideo.push(item);
    // });

    // finalData = [...isVideoPlaying, ...anotherVideo];

    // if (!song || !allSongs) {
    //     return <p>Loading...</p>;
    // }

    const onIntersection = (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasMore) {
            HANDLE.loadMore();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            onIntersection(entries);
        });

        if (observer && hasMoreRef.current) {
            observer.observe(hasMoreRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [data]);

    const HANDLE = {
        loadMore: async () => {
            try {
                const res = await axios.get(
                    `${process.env.API_URL}/song/get-songs?page=${page}&limit=5`
                );

                if (res?.data?.data?.length === 0) {
                    console.log('check2');
                    setHasMore(false);
                }

                console.log('res', res?.data?.data);

                setPage((prev) => prev + 1);
                setData((prev) => [...prev, ...res?.data?.data]);
            } catch (error) {
                setHasMore(false);
            }
        },
    };

    return (
        <div className={styles.wrapperVideo}>
            <figure className='thumbnail'>
                <img src={song?.song_thumbnail || ''} alt='' loading='lazy' />
            </figure>
            <div className='main-page'>
                <div className='main-screen'>
                    <div className='video-container'>
                        <div className='video'>
                            {song ? (
                                <iframe
                                    key={song?._id || ''}
                                    src={song?.song_url || ''}
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
                                            sizes='100vw'
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='scroll-animation'>
                        <div
                            className='circle'
                            onClick={() => {
                                if (hasMoreRef.current) {
                                    window.scrollTo({
                                        top: hasMoreRef.current.offsetTop,
                                        behavior: 'smooth',
                                    });
                                }
                            }}>
                            <i
                                className='fa fa-chevron-down'
                                aria-hidden='true'></i>
                            <i
                                className='fa fa-chevron-down'
                                aria-hidden='true'></i>
                            <i
                                className='fa fa-chevron-down'
                                aria-hidden='true'></i>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    {song ? (
                        <div className='content-left'>
                            <div className='auth-img'>
                                <Image
                                    src={song?.artist_avatar || ''}
                                    alt=''
                                    width='0'
                                    height='0'
                                    // fill='false'
                                    sizes='100vw'
                                />
                            </div>
                            <div className='auth-info'>
                                <span className={itimFont.className}>
                                    {song?.name}
                                </span>
                                <div className='auth-name'>{song?.artist}</div>
                            </div>
                        </div>
                    ) : null}
                    <div className='content-right'>
                        <div className='content-title'>Relative</div>
                        <div className='container'>
                            {data.map((item) => {
                                return (
                                    <div
                                        className={
                                            item._id === song?._id
                                                ? 'item active'
                                                : 'item'
                                        }
                                        key={item._id}
                                        onClick={() => {
                                            router.push(`/watch/${item.slug}`);
                                        }}>
                                        <div className='item-img'>
                                            <Image
                                                src={item.song_thumbnail}
                                                alt=''
                                                width='0'
                                                height='0'
                                                sizes='100vw'
                                            />
                                        </div>
                                        <div className='item-info'>
                                            <div>
                                                <div
                                                    className={`item-info-song`}>
                                                    {item.name}
                                                </div>
                                                <div className='item-info-auth'>
                                                    {item.artist}
                                                </div>
                                            </div>

                                            <div className='item-info-type'>
                                                <span
                                                    className={
                                                        item.song_types[0]
                                                    }>
                                                    {' '}
                                                    {item.song_types[0]}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {hasMore && (
                            <div
                                ref={hasMoreRef}
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    marginTop: '20px',
                                }}>
                                <div
                                    style={{
                                        height: '100%',
                                    }}>
                                    <Skeleton
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Video.displayName = 'Video';

export default Video;

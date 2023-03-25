/* eslint-disable @next/next/no-img-element */
'use client';
import { Itim } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import styles from './video.module.scss';

const itimFont = Itim({
    weight: ['400'],
    subsets: ['vietnamese', 'latin'],
});

const Video = ({ song }) => {
    console.log('song', song);
    const handleFullScreen = useFullScreenHandle();
    const router = useRouter();
    const isVideoPlaying = [];
    const anotherVideo = [];
    const [allSongs, setAllSongs] = useState(null);
    const finalData = [...isVideoPlaying, ...anotherVideo];

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const all_songs = await fetch(
    //                 `${process.env.API_URL}/song/all-songs`
    //             );
    //             const parseJsonGetAllSongs = await all_songs.json();
    //             const allSongs = parseJsonGetAllSongs.data;

    //             console.log('allsong', allSongs);
    //             setAllSongs(allSongs);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     })();
    // }, []);

    // allSongs.forEach((item) => {
    //     item._id === song?._id
    //         ? isVideoPlaying.push(item)
    //         : anotherVideo.push(item);
    // });

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
    }, [song]);

    // if (!song || !allSongs) {
    //     return <p>Loading...</p>;
    // }

    return (
        <div className={styles.wrapperVideo}>
            <FullScreen handle={handleFullScreen}>
                <div className='video-container'>
                    <img
                        src={song?.song_thumbnail || ''}
                        alt=''
                        loading='lazy'
                    />
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

                    <div className='exit-btn' onClick={handleFullScreen.exit}>
                        <i className='fa-solid fa-arrow-right-from-bracket'></i>
                    </div>
                </div>
            </FullScreen>

            <div className='btn-fullscreen' onClick={handleFullScreen.enter}>
                <i className='fa-solid fa-expand'></i>
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
                {/* <div className='content-right'>
                    <div className='content-title'>Relative</div>
                    <div className='container'>
                        {finalData.map((item) => {
                            return (
                                // if item.id === data?.id => active and render first

                                <div
                                    className={
                                        item._id === song?._id
                                            ? 'item active'
                                            : 'item'
                                    }
                                    key={item._id}
                                    // href={`/video/${item.id}`}
                                    onClick={() => {
                                        router.push(`/watch/${item.slug}`);
                                    }}>
                                    <div className='item-img'>
                                        <Image
                                            src={item.song_thumbnail}
                                            alt=''
                                            width='0'
                                            height='0'
                                            //  fill='false'
                                            sizes='100vw'
                                        />
                                    </div>
                                    <div className='item-info'>
                                        <div>
                                            <div className={`item-info-song`}>
                                                {item.name}
                                            </div>
                                            <div className='item-info-auth'>
                                                {item.artist}
                                            </div>
                                        </div>

                                        <div className='item-info-type'>
                                            <span
                                                className={item.song_types[0]}>
                                                {' '}
                                                {item.song_types[0]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Video;

/* eslint-disable @next/next/no-img-element */
'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import Link from 'next/link';
import { Zoom } from 'react-awesome-reveal';

import styles from './main.module.scss';

const MainPage = (data) => {
    const songs = data?.data?.data;

    if (!data) return null;

    return (
        <main className={styles.wrapperMainPage}>
            <div className='slide-user'>
                <div className='lottie'>
                    <header className='header'>
                        <h1 className='slide-user--title'>
                            <Zoom
                                triggerOnce={true}
                                direction='left'
                                cascade
                                duration={100}>
                                Welcome to Jsound!
                            </Zoom>{' '}
                            <br />
                            <Zoom
                                triggerOnce={true}
                                duration={100}
                                direction='up'
                                cascade={true}>
                                Make your day with music!
                            </Zoom>
                        </h1>

                        <Link href='/all' className='btn'>
                            Listen now
                        </Link>
                    </header>
                    <Player
                        src={
                            'https://assets10.lottiefiles.com/private_files/lf30_9x27DY.json'
                        }
                        autoplay
                        loop></Player>
                </div>
            </div>

            <div className='content'>
                <div className='content-title'>For you</div>
                <div className='content-container'>
                    {songs &&
                        songs.length > 0 &&
                        songs.map((item) => {
                            return (
                                <Link
                                    key={item._id}
                                    className='content-item'
                                    href={`/watch/${item.slug}`}>
                                    <Image
                                        src={item.song_thumbnail}
                                        alt=''
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        priority
                                    />
                                    <div className='content-item-info'>
                                        <div className='content-item-info-song'>
                                            {item.name}
                                        </div>
                                        <div className='content-item-info-auth'>
                                            {item.artist}
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

MainPage.displayName = 'MainPage';

export default MainPage;

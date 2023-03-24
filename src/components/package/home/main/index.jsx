/* eslint-disable @next/next/no-img-element */
'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';

import styles from './main.module.scss';

const MainPage = (data) => {
    // if (!data) return <p>Loading...</p>;
    const songs = data?.data?.data;

    const [finalData, setFinalData] = useState([]);

    const randomItem = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setFinalData(randomItem(songs));
    }, []);

    return (
        <main className={styles.wrapperMainPage}>
            <div className='slide-user'>
                <div className='lottie'>
                    <header className='header'>
                        <h1 className='slide-user--title'>
                            <Zoom left cascade>
                                Wellcome to Jsound!
                            </Zoom>
                            <Zoom right cascade>
                                Make your your day with music!
                            </Zoom>
                        </h1>
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
                    {finalData &&
                        finalData.length > 0 &&
                        finalData.map((item) => {
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
                                        //fill='false'
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

export default MainPage;

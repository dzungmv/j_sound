/* eslint-disable @next/next/no-img-element */
'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import data from '@/components/common/data/data.json';

import styles from './main.module.scss';

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
            <div className='slide-user'>
                <header>
                    <h1 className='slide-user--title'>
                        Wellcome to <strong>Jsound</strong> ! Make your your day
                        with music!
                    </h1>
                </header>

                <div className='lottie'>
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
                                    key={item.id}
                                    className='content-item'
                                    href={`/watch/${item.slug}`}>
                                    <Image
                                        src={item.thumbnail}
                                        alt=''
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        //fill='false'
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

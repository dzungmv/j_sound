'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './all.module.scss';

const LofiPage = () => {
    const [songs, setSongs] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loadMoreRef = useRef(null);

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

        if (observer && loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [songs]);

    const HANDLE = {
        loadMore: async () => {
            try {
                const res = await axios.get(
                    `${process.env.API_URL}/song/get-songs?page=${page}&limit=4&type=lofi`
                );
                if (res?.data?.data?.length === 0) {
                    setHasMore(false);
                }

                setPage((prev) => prev + 1);
                setSongs((prev) => [...prev, ...res?.data?.data]);
            } catch (error) {
                setHasMore(false);
            }
        },
    };

    return (
        <div className={styles.wrapperAll}>
            <h3>Find your songs</h3>
            {/* {songs && songs?.length > 0 ? ( */}
            <div className='content'>
                {songs?.map((item, index) => {
                    return (
                        <Link
                            href={`/lofi/${item.slug}`}
                            key={index}
                            className='item'>
                            <Image
                                src={item.song_thumbnail}
                                alt=''
                                width='0'
                                height='0'
                                sizes='100vw'
                                //fill='false'
                            />
                            <div className='item-info'>
                                <div className='item-info-song'>
                                    {item.name}
                                </div>
                                <div className='item-info-auth'>
                                    {item.artist}
                                </div>
                            </div>
                        </Link>
                    );
                })}

                {hasMore && (
                    <div
                        ref={loadMoreRef}
                        className='load-more'
                        style={{
                            width: '100%',
                            display: 'flex',
                            gap: '1rem',
                        }}>
                        <div className='item'>
                            <Skeleton
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </div>
                        <div className='item'>
                            <Skeleton
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </div>
                        <div className='item'>
                            <Skeleton
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </div>
                        <div className='item'>
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
            {/* ) : (
                <div
                    className='content'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        style={{
                            width: '50%',
                            height: '50%',
                        }}
                        src={
                            'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/404.png'
                        }
                        alt='Not found'
                        width='0'
                        height='0'
                        sizes='100vw'
                        priority
                    />
                </div>
            )} */}
        </div>
    );
};

export default LofiPage;

/* eslint-disable @next/next/no-img-element */

import { Itim } from '@next/font/google';
import styles from './video.module.scss';
import data_more from '@/components/common/data/data.json';
import Link from 'next/link';

const itimFont = Itim({
    weight: ['400'],
    // subsets for vietnamese
    subsets: ['vietnamese', 'latin'],
});

const Video = ({ data }) => {
    const isVideoPlaying = [];
    const anotherVideo = [];

    data_more.forEach((item) => {
        item.id === data?.id
            ? isVideoPlaying.push(item)
            : anotherVideo.push(item);
    });

    const finalData = [...isVideoPlaying, ...anotherVideo];

    return (
        <div className={styles.wrapperVideo}>
            <div className='video-container'>
                <img src={data?.thumbnail || ''} alt='' />
                <div className='video'>
                    <iframe
                        key={data?.id || ''}
                        src={data?.link || ''}
                        frameBorder='0'
                        allowFullScreen='allowfullscreen'
                        mozallowfullscreen='mozallowfullscreen'
                        msallowfullscreen='msallowfullscreen'
                        oallowfullscreen='oallowfullscreen'
                        webkitallowfullscreen='webkitallowfullscreen'
                        allow='autoplay; fullscreen; picture-in-picture'
                    />
                </div>
            </div>

            <div className='content'>
                <div className='content-left'>
                    <div className='auth-img'>
                        <img
                            src={data?.author_img || ''}
                            alt=''
                            loading='lazy'
                        />
                    </div>
                    <div className='auth-info'>
                        <span className={itimFont.className}>{data?.name}</span>
                        <div className='auth-name'>{data?.author}</div>
                    </div>
                </div>
                <div className='content-right'>
                    <div className='content-title'>Relative</div>
                    <div className='container'>
                        {finalData.map((item) => {
                            return (
                                // if item.id === data?.id => active and render first

                                <Link
                                    className={
                                        item.id === data?.id
                                            ? 'item active'
                                            : 'item'
                                    }
                                    key={item.id}
                                    href={`/video/${item.id}`}
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    <div className='item-img'>
                                        <img src={item.thumbnail} alt='' />
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
                                            <span className={item.type}>
                                                {' '}
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;

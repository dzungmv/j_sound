/* eslint-disable @next/next/no-img-element */
import styles from './video.module.scss';
import data_more from '@/components/common/data/data.json';
import Link from 'next/link';

const Video = ({ data }) => {
    return (
        <div className={styles.wrapperVideo}>
            <div className='video-container'>
                <img src={data?.thumbnail || ''} alt='' />
                <div className='video'>
                    <iframe
                        key={data?.id || ''}
                        src={data?.link || ''}
                        frameBorder='0'
                        allowfullscreen='allowfullscreen'
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
                        <div className='auth-song'>{data?.name}</div>
                        <div className='auth-name'>{data?.author}</div>
                    </div>
                </div>
                <div className='content-right'>
                    <div className='content-title'>Relative</div>
                    <div className='container'>
                        {data_more.map((item) => {
                            return (
                                <Link
                                    className={
                                        item.id === data?.id
                                            ? 'item active'
                                            : 'item'
                                    }
                                    key={item.id}
                                    href={`/video/${item.id}`}
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <div className='item-img'>
                                        <img src={item.thumbnail} alt='' />
                                    </div>
                                    <div className='item-info'>
                                        <div>
                                            <div className='item-info-song'>
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

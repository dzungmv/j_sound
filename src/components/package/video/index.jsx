/* eslint-disable @next/next/no-img-element */
import styles from './video.module.scss';
import data_more from '@/components/common/data/data.json';
import Link from 'next/link';

const Video = ({ data }) => {
    return (
        <div className={styles.wrapperVideo}>
            <div className='video-container'>
                <img src={data?.thumbnail || ''} alt="" />
                <div className='video'>
                    <iframe key={data?.id || ''} src={data?.link || ''} frameBorder='0' />
                </div>
            </div>

            <div className='more'>
                <div className='content-container'>
                    {data_more.map((item) => {
                        return (
                            <Link
                                key={item.id}
                                className='content-item'
                                href={`/video/${item.id}`}
                            >
                                <img src={item.thumbnail} alt='' />
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
        </div>
    );
};

export default Video;

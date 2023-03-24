/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import styles from './melancholic.module.scss';

const MelancholicPage = ({ data }) => {
    if (!data) return <p>Loading...</p>;
    return (
        <div className={styles.wrapperChill}>
            <h3>Melancholic music</h3>
            <div className='content'>
                {data.map((item) => {
                    return (
                        <Link
                            href={`/watch/${item.slug}`}
                            key={item._id}
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
                                    {item.asrtist}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MelancholicPage;

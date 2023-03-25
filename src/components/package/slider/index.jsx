import Image from 'next/image';
import Link from 'next/link';
import styles from './slider.module.scss';

const SliderPage = ({ thumb, data }) => {
    return (
        <div className={styles.wrapperSliderPage}>
            <div className='info-trending'>
                <div className='info-trending-img'>
                    {thumb?.img ? (
                        <Image
                            src={thumb?.img}
                            alt=''
                            width='0'
                            height='0'
                            sizes='100vw'
                            //fill='false'
                        />
                    ) : (
                        ''
                    )}
                </div>
                <div className='thumb-info'>
                    <h1 className='thumb-info-title'>{thumb?.title}</h1>
                </div>
            </div>
            <div className='content-trending'>
                {data?.map((item) => {
                    return (
                        <Link
                            key={item?.id}
                            href={`/${item?.slug}`}
                            className='content-trending-item'>
                            <div className='content-trending-item-img'>
                                {item?.thumbnail ? (
                                    <Image
                                        src={item?.thumbnail}
                                        alt=''
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        //fill='false'
                                    />
                                ) : null}

                                <div className='play-btn'>
                                    <i className='fa-solid fa-play'></i>
                                </div>
                            </div>

                            <div className='content-trending-item-info'>
                                <div className='content-trending-item-info-name'>
                                    {item.name}
                                </div>
                                <div className='content-trending-item-info-auth'>
                                    {item.author}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

SliderPage.displayName = 'SliderPage';

export default SliderPage;

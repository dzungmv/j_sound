/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import styles from './study.module.scss';

const StudyPage = ({ data }) => {
    const chilldata = data.filter(
        (item) => item.type.filter((item) => item === 'study').length > 0
    );

    return (
        <div className={styles.wrapperChill}>
            <h3>Melancholic music</h3>
            <div className='content'>
                {chilldata.map((item) => {
                    return (
                        <Link
                            href={`/watch/${item.slug}`}
                            key={item.id}
                            className='item'>
                            <Image
                                src={item.thumbnail}
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

export default StudyPage;

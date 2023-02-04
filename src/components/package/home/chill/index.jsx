/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './chill.module.scss';

const ChillPage = ({ data }) => {
    return (
        <div className={styles.wrapperChill}>
            <h3>Chill Page</h3>
            <div className='content'>
                {data.map((item) => {
                    return (
                        <Link
                            href={`/video/${item.id}`}
                            key={item.id}
                            className='item'
                        >
                            <img src={item.thumbnail} alt='' />
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

export default ChillPage;

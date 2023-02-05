/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './lofi.module.scss';

const LofiPage = ({ data }) => {
    const chilldata = data.filter(
        (item) => item.type.filter((item) => item === 'lofi').length > 0
    );

    return (
        <div className={styles.wrapperChill}>
            <h3>Lofi music</h3>
            <div className='content'>
                {chilldata.map((item) => {
                    return (
                        <Link
                            href={`/${item.slug}`}
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

export default LofiPage;

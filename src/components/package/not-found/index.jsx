import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './style.module.scss';

const NotFoundPage = () => {
    return (
        <div className={styles.wrapperNotFoundPage}>
            <div className='container'>
                <div className='left'>
                    <div className='left-container'>
                        <h1>Oops...</h1>
                        <h2>Page not found!</h2>
                        <Link href={'/'}>Go back</Link>
                    </div>
                </div>
                <div className='right'>
                    <Image
                        src={
                            'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/404.png'
                        }
                        alt='Not found'
                        width='0'
                        height='0'
                        sizes='100vw'
                        priority
                        fill={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

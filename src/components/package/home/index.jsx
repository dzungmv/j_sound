import Image from 'next/image';
import Sidebar from '../sidebar';
import styles from './home.module.scss';

const HomPage = () => {
    return (
        <main className={styles.wrapperHomePage}>
            <div className='left'>
                <Sidebar />
            </div>

            <div className='right'>
                <div
                    className='video-container'
                    style={{
                        backgroundImage: `url(
                            'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/thumbnail/kyuc.jpg'
                        )`,
                    }}
                >
                    <div className='video'>
                        <iframe src='https://www.youtube.com/embed/g_4Ql9JmoJ0' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomPage;

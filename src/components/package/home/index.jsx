import Image from 'next/image';
import Sidebar from '../sidebar';
import styles from './home.module.scss';
import MainPage from './main';

const HomPage = () => {
    return (
        <main className={styles.wrapperHomePage}>
            <div className='left'>
                <Sidebar />
            </div>
            <div className='right'>
                <MainPage />
            </div>
        </main>
    );
};

export default HomPage;

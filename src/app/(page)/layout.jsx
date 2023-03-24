import Header from '@/components/common/header';
import Sidebar from '@/components/package/sidebar';
import styles from './home.module.scss';

export default function Page({ children }) {
    return (
        <>
            <div className={styles.wrapperHomePage}>
                <Header />
                <div className='left'>
                    <Sidebar />
                </div>
                <div className='right'>{children}</div>
            </div>
        </>
    );
}

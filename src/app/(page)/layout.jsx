import Sidebar from '@/components/package/sidebar';
import styles from './home.module.scss';

export default function Page({ children }) {
    return (
        <>
            <head />
            <div className={styles.wrapperHomePage}>
                <div className='left'>
                    <Sidebar />
                </div>
                <div className='right'>{children}</div>
            </div>
        </>
    );
}

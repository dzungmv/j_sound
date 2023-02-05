'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './sidebar.module.scss';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.wrapperSidebar}>
            <div className='sidebar'>
                {tabs.map((item) => {
                    return (
                        <Link
                            href={item.path}
                            key={item.id}
                            className={
                                pathname === item.path
                                    ? 'sidebar-item active'
                                    : 'sidebar-item'
                            }
                            //     onClick={() => router.push}
                        >
                            <div className='sidebar-item-icon'>
                                <i className={item.icon}></i>
                            </div>
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;

const tabs = [
    {
        id: 1,
        name: 'Home',
        icon: 'fa-solid fa-home',
        path: '/',
    },
    {
        id: 2,
        name: 'Lofi',
        icon: 'fa-solid fa-headphones',
        path: '/lofi',
    },
    {
        id: 3,
        name: 'Chill',
        icon: 'fa-solid fa-moon-cloud',
        path: '/chill',
    },
    {
        id: 4,
        name: 'Melancholic',
        icon: 'fa-solid fa-umbrella',
        path: '/melancholic',
    },
];

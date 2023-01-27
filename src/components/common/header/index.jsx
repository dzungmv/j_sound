'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import moment from 'moment/moment';
import { Cookie } from '@next/font/google';

import styles from './header.module.scss';
import Link from 'next/link';

const cookie_font = Cookie({
    weight: ['400'],
    subsets: ['latin'],
});

const Header = () => {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.wrapperHeader}>
            <Link href={'/'} className='header-logo header-item' passHref>
                <Image
                    src='https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/j-brand.svg'
                    alt='logo'
                    width={54}
                    height={54}
                    priority
                />
                <span className={cookie_font.className}>JSound</span>
            </Link>

            <div className='header-search header-item'>
                <i className='fa-solid fa-magnifying-glass'></i>
                <input type='text' placeholder='Search songs name or singer' />
            </div>

            <div className='header-option header-item'>
                <span>Hello, {moment(time).format('LTS')}</span>
                <div className='header-option-item'>
                    <i className='fa-solid fa-gear'></i>
                </div>
            </div>
        </main>
    );
};

export default Header;

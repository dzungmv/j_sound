/* eslint-disable @next/next/no-img-element */
'use client';
import Tippy from '@tippyjs/react';
import { Cookie } from 'next/font/google';
import Image from 'next/image';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import Link from 'next/link';
import styles from './header.module.scss';

import Clock from './clock';
import SearchComp from './search';

const cookie_font = Cookie({
    weight: ['400'],
    subsets: ['latin'],
});

const Header = () => {
    return (
        <main className={styles.wrapperHeader}>
            <Link href={'/'} className='header-logo header-item' passHref>
                <div className='header-logo-img'>
                    <Image
                        src='https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/j-brand.svg'
                        alt='logo'
                        width='0'
                        height='0'
                        sizes='100vw'
                        priority
                    />
                </div>
                <h1 className={cookie_font.className}>JSound</h1>
            </Link>

            <div className='header-search-wrapper'>
                <SearchComp />
            </div>

            <div className='header-option header-item'>
                <span className='header-option-time'>Hello, {<Clock />}</span>
                <Tippy
                    content={<Tooltip />}
                    theme='light'
                    placement='bottom'
                    trigger='click'
                    arrow={false}
                    interactive={true}>
                    <div className='header-option-item'>
                        <i className='fa-solid fa-gear'></i>
                    </div>
                </Tippy>
            </div>
        </main>
    );
};

export default Header;

const Tooltip = () => {
    return (
        <div className={styles.wrapperTooltip}>
            <div className='content'>
                <Link
                    href={'https://www.facebook.com/jungjung.2601/'}
                    className='content-item'
                    target='_blank'>
                    <div className='content-item-label'>
                        <i className='fa-brands fa-facebook'></i>
                    </div>
                    <span className='content-item-name'>Find support</span>
                </Link>
            </div>

            <div className='footer'>
                <div className='footer-header'>
                    <Image
                        src='https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/j-brand.svg'
                        alt=''
                        width='0'
                        height='0'
                        sizes='100vw'
                        // fill='false'
                    />
                    <span> Jsound</span>
                </div>

                <div className='footer-content'>
                    Copyright&copy; 2023 Jsound. All rights reserved.
                </div>
                <div className='footer-auth'>Created by jungjung261</div>
            </div>
        </div>
    );
};

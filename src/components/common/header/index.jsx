/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import moment from 'moment/moment';
import { Cookie } from '@next/font/google';

import styles from './header.module.scss';
import Link from 'next/link';

import data from '@/components/common/data/data.json';
import Clock from './clock';

const cookie_font = Cookie({
    weight: ['400'],
    subsets: ['latin'],
});

const Header = () => {
    const searchRef = useRef(null);
    const [searchResult, setSearchResult] = useState('');

    const handleSearch = (search) => {
        if (!search) return [];

        return data.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
    };

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
                <input
                    ref={searchRef}
                    type='text'
                    placeholder='Search songs name or singer'
                    onChange={(e) => setSearchResult(e.target.value)}
                />

                {handleSearch(searchResult).length > 0 && (
                    <div className='search-box'>
                        {handleSearch(searchResult).map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    href={`/video/${item.id}`}
                                    className='search-box-item'
                                    onClick={() => {
                                        setSearchResult('');
                                        searchRef.current.value = '';
                                    }}
                                >
                                    <div className='search-box-item-image'>
                                        <img src={item.thumbnail} alt='' />
                                    </div>
                                    <div className='search-box-item-info'>
                                        <div className=''>{item.name}</div>
                                        <div>{item.author}</div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className='header-option header-item'>
                <span>Hello, {<Clock />}</span>
                <div className='header-option-item'>
                    <i className='fa-solid fa-gear'></i>
                </div>
            </div>
        </main>
    );
};

export default Header;

import { useDebounce } from '@/components/hooks/useDebounce';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './header.module.scss';

const SearchComp = () => {
    const searchRef = useRef(null);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    const searchDebounce = useDebounce(searchValue, 2000);

    useEffect(() => {
        (async () => {
            if (!searchDebounce) return;
            try {
                setIsPending(true);
                const res = await axios.post(
                    `${process.env.API_URL}/song/search`,
                    {
                        name: searchDebounce.trim(),
                    }
                );
                setSearchResult(res?.data?.data);
                setIsPending(false);
                setError(false);
            } catch (error) {
                setError(true);
                setIsPending(false);
            }
        })();

        return () => {
            setSearchResult([]);
        };
    }, [searchDebounce]);

    // click outside search box to close
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchValue('');
                setSearchResult([]);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <section className={styles.wrapperSearch}>
            <div
                className={
                    searchValue && searchValue.length > 0
                        ? 'search-input search-input--active'
                        : 'search-input'
                }>
                <i className='fa-solid fa-magnifying-glass'></i>
                <input
                    ref={searchRef}
                    type='text'
                    placeholder='Search songs name or singer'
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            {searchValue && searchValue.length > 0 && (
                <div className='search-box'>
                    {isPending ? (
                        <div className='loading-sleketon'>
                            <Skeleton count={4} />
                        </div>
                    ) : searchResult && searchResult.length > 0 ? (
                        searchResult.map((item, index) => {
                            return (
                                index < 8 && (
                                    <Link
                                        key={item._id}
                                        href={`/watch/${item.slug}`}
                                        passHref>
                                        <div className='search-box-item'>
                                            <div className='search-box-item-image'>
                                                <Image
                                                    src={item.artist_avatar}
                                                    alt='search'
                                                    width='0'
                                                    height='0'
                                                    sizes='100vw'
                                                />
                                            </div>
                                            <div className='search-box-item-info'>
                                                <div className='info-name'>
                                                    {item.name}
                                                </div>
                                                <span>{item.artist}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            );
                        })
                    ) : (
                        <p className='types-search'>
                            Not found any song with search value {` `}
                            <strong>{searchValue}</strong>
                        </p>
                    )}
                </div>
            )}

            {/* {searchValue && searchValue.length > 0 && (
                <div className='search-box'>
                    {isPending ? (
                        <div className='loading-sleketon'>
                            <Skeleton count={4} />
                        </div>
                    ) : error ? (
                        <p className='types-search'>
                            Not found any song with search value {` `}
                            <strong>{searchValue}</strong>
                        </p>
                    ) : searchResult && searchResult.length > 0 ? (
                        searchResult.map((item, index) => {
                            return (
                                index < 8 && (
                                    <Link
                                        key={item._id}
                                        href={`/watch/${item.slug}`}
                                        passHref>
                                        <div className='search-box-item'>
                                            <div className='search-box-item-image'>
                                                <Image
                                                    src={item.artist_avatar}
                                                    alt='search'
                                                    width='0'
                                                    height='0'
                                                    sizes='100vw'
                                                />
                                            </div>
                                            <div className='search-box-item-info'>
                                                <div className='info-name'>
                                                    {item.name}
                                                </div>
                                                <span>{item.artist}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            );
                        })
                    ) : (
                        <p>No recent searches</p>
                    )}
                </div>
            )} */}
        </section>
    );
};

SearchComp.displayName = 'SearchComp';
export default SearchComp;

// để xóa .next chạy lại thử

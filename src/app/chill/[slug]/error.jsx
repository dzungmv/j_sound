'use client';

import { useEffect } from 'react';

import styles from '@/components/common/error/error.module.scss';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className={styles.wrapperError}>
            <div className='error-container'>
                <h3>Oops! </h3>
                <h4>Something went wrong!</h4>
                <button onClick={() => reset()}>Try again!</button>
            </div>
        </section>
    );
}

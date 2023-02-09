'use client';

import { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!time) {
        return null;
    }

    return <span>{time.toLocaleTimeString()}</span>;
};

export default Clock;

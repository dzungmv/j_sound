'use client';
import { useEffect, useState } from 'react';

import Video from '@/components/package/video';
import main_data from '@/components/common/data/data.json';
import { notFound } from 'next/navigation';

export default function Page({ params }) {
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            try {
                const video_data = await main_data.find(
                    (video) => video.slug === params.slug
                );
                setData(video_data);
            } catch (error) {
                notFound();
            }
        })();
    }, [params.slug]);

    return (
        <>
            <Video data={data} />
        </>
    );
}

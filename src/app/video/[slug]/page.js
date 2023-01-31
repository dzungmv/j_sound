'use client';
import { useEffect, useState } from 'react';

import Video from '@/components/package/video';
import main_data from '@/components/common/data/data.json';
import Head from 'next/head';

export default function Page({ params }) {
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const video_data = await main_data.find(
                (video) => video.id === Number(params.slug)
            );
            setData(video_data);
        })();
    }, [params.slug]);

    return (
        <>
            <Video data={data} />
        </>
    );
}

// export function getStaticPaths() {
//     return {
//         paths: data.map((video) => ({
//             params: {
//                 videoId: video.id.toString(),
//             },
//         })),
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const video_data = await data.find((video) => video.id === 1);

//     console.log('video_data', video_data);

//     if (!video_data) {
//         return {
//             notFound: true,
//         };
//     }

//     return {
//         props: {
//             video: video_data,
//         },
//     };
// }

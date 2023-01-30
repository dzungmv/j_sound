'use client';

import data from '@/components/common/data/data.json';
import Header from '@/components/common/header';
import Video from '@/components/package/video';
import { usePathname } from 'next/navigation';

export default function Page() {
    const pathname = usePathname();

    console.log('path name', pathname);

    return (
        <>
            <p>{pathname}</p>
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

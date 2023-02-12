'use client';
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import SliderPage from "@/components/package/slider";

import apiData from '@/components/common/data/data.json';
import thumbData from '@/components/common/data/slide.json';

export default function Page({params}) {
    const router = useRouter()

    // console.log("data", apiData);

    const [data, setData] = useState(null);
    const [thumb, setThumb] = useState(null);

    const { slug } = params;

    useEffect(() => {
        (
            async () => {
                const res = await apiData.filter((item) => item?.trending === slug);
                const thumb = await thumbData.find((item) => item?.url === slug);
                if (res.length === 0 || thumb === undefined) {
                    router.push('/');
                }
                
                setData(res);
                setThumb(thumb);
            }
        )();
    }, [slug]);


    // check if not have params.slug in this app then redirect to homepage
    
    return <>
        <SliderPage thumb={thumb} data={data} />
    </>
}
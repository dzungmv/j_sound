'use client';
import '@/app/styles/globals.scss';
import Header from '@/components/common/header';
import NotFoundPage from '@/components/package/not-found';

export default function NotFound() {
    return (
        <>
            <Header />
            <NotFoundPage />
        </>
    );
}

// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/home');
    }, [router]);

    return null; // or <p>Redirecting...</p> if you want
}

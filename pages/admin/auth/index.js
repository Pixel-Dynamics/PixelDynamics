import React, {useEffect} from 'react';
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/admin/auth/login');
    }, [router]);

    return (
        <div>

        </div>
    );
};

export default Index;
"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/dashboard/allProduct");
    },[])

    return (
        <div>
        </div>
    );
};

export default DashboardPage;
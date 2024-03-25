import Footer from '@/components/shared/Footer';
import React, { ReactNode } from 'react';
import Navbar from '../../components/shared/Navbar';

const CommonLayout = ({ children }: { children:ReactNode }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;
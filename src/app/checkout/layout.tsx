import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { ReactNode } from 'react';

const CheckoutPageLayout = ({ children }: { children: ReactNode }) => {
  return <div>
    <Navbar></Navbar>
    {children}
  </div>;
};

export default CheckoutPageLayout;
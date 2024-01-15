import React from 'react';
import Sidebar from './sidebar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='md:flex md:h-screen'>
            <Sidebar />
            <main className='bg-gray-100 w-full h-full p-4 md:p-8 overflow-y-auto'>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;

import React, { useState, ReactNode } from 'react';
import PageHeader from '../components/PageHeader/index';

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <PageHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="mx-auto px-6 max-w-screen-2xl 2xl:p-10">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PageLayout;

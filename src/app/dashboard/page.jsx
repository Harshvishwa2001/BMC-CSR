'use client' // Required for useState
import { useState } from 'react';
import { FileCheckIcon, FileText, FolderKanban, HeadphonesIcon, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import DashboardView from './DashboardView';



export default function Page() {
    // 1. Track which menu item is clicked
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { icon: <FolderKanban size={20} />, label: 'All CSR Projects' },
        { icon: <FileText size={20} />, label: 'Applications' },
        { icon: <FileCheckIcon size={20} />, label: 'Agreements' },
    ];

    // 2. Function to render the correct component
    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard': return <DashboardView />;
            case 'All CSR Projects': return <ProjectsView />;
            case 'Applications': return <ApplicationsView />;
            case 'Agreements': return <AgreementsView />;
            default: return <DashboardView />;
        }
    };

    return (
        <div className="flex min-h-screen bg-[#F5F7FA]">
            {/* --- SIDEBAR --- */}
            <aside className="w-18 hover:w-64 min-h-screen relative flex flex-col left-0 top-0 overflow-hidden group transition-all duration-300 z-50">
                <div className="absolute inset-0 z-0">
                    <Image src="/image/aside.jpg" alt="background" fill className="object-cover" />
                </div>

                <div className="relative z-10 flex flex-col h-screen">
                    {/* Logo Area */}
                    <div className="p-4 group-hover:p-6 border-b border-white/10">
                        <div className="flex items-center gap-3 mt-4">
                            {/* Logo Image: Changes from 40px (w-10) to 56px (w-14) on hover */}
                            <div className="flex items-center justify-center min-w-10">
                                <Image
                                    src={'/image/logo.png'}
                                    width={100}
                                    height={100}
                                    alt='logo'
                                    className="transition-all duration-300 ease-in-out
                                                w-10 h-10
                                                group-hover:w-14 group-hover:h-14"/>
                            </div>

                            {/* Text: Hides when sidebar is small, fades in on hover */}
                            <span className="font-bold text-sm leading-tight text-[#FEF9C2] 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 whitespace-nowrap">
                                BMC CSR <br /> Portal
                            </span>
                        </div>

                    </div>

                    <nav className="flex-1 mt-6">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(item.label)} // Set active tab on click
                                className={`flex items-center gap-4 px-2 py-4 cursor-pointer transition-all mx-4 rounded-xl mb-1 ${activeTab === item.label
                                    ? 'bg-[#0066FF] backdrop-blur-md text-white'
                                    : 'hover:bg-blue-500/20 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="min-w-6 flex justify-center">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </nav>

                    <div className="p-2 group-hover:p-4 mb-4 transition-all">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 group-hover:p-5 border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-2 mb-2">
                                <HeadphonesIcon size={20} className="text-blue-300 min-w-[20px]" />
                                <h4 className="font-semibold text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Need Help?
                                </h4>
                            </div>
                            <div className="hidden group-hover:block transition-all">
                                <p className="text-[14px] text-blue-100 mb-4 opacity-80">
                                    Contact CSR Support for any technical issues.
                                </p>
                                <button className="w-full bg-[#F9F3DF] text-[#C2A01E] py-2 rounded-2xl text-[16px] font-medium hover:bg-[#f7ebc4] transition-colors whitespace-nowrap">
                                    Contact Us &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="flex-1 transition-all duration-300">
                {renderContent()}
            </main>
        </div>
    );
}
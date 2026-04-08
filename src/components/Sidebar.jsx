'use client'
import { FileCheckIcon, FileText, FolderKanban, HeadphonesIcon, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import AgreementsView from './AgreementsView';
import ApplicationsView from './ApplicationsView';
import DashboardView from './DashboardView';
import ProjectsView from './ProjectsView';
import Link from 'next/link';

export default function Sidebar({ children }) {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard',link:'/dashboard' },
        { icon: <FolderKanban size={20} />, label: 'All CSR Projects',link:'/projectsview' },
        { icon: <FileText size={20} />, label: 'Applications',link:'/applications' },
        { icon: <FileCheckIcon size={20} />, label: 'Agreements',link:'/agreements' },
    ];

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
        <div className="flex h-screen overflow-hidden bg-[#F9FAFB]">
            {/* Sidebar Navigation */}
            <aside className="w-18 hover:w-64 min-h-screen relative flex flex-col left-0 top-0 overflow-hidden group transition-all duration-300 z-50 shadow-xl">
                <div className="absolute inset-0 z-0">
                    <Image src="/image/aside.jpg" alt="background" fill className="object-cover" />
                </div>

                <div className="relative z-10 flex flex-col h-screen">
                    {/* Logo */}
                    <div className="p-4 group-hover:p-6 border-b border-white/10">
                        <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center justify-center min-w-10">
                                <Image src={'/image/logo.png'} width={56} height={56} alt='logo' className="w-10 h-10 group-hover:w-14 group-hover:h-14 transition-all" />
                            </div>
                            <span className="font-bold text-sm leading-tight text-[#FEF9C2] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                BMC CSR <br /> Portal
                            </span>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 mt-6">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className={`flex items-center gap-4 px-2 py-4 cursor-pointer transition-all mx-4 rounded-xl mb-1 ${activeTab === item.label
                                    ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-500/30'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="min-w-6 flex justify-center">{item.icon}</div>
                                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Help Card */}
                    <div className="p-2 group-hover:p-4 mb-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 group-hover:p-5 border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                                <HeadphonesIcon size={20} className="text-blue-300" />
                                <h4 className="font-semibold text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Need Help?</h4>
                            </div>
                            <div className="hidden group-hover:block transition-all">
                                <p className="text-xs text-blue-100 mb-4 opacity-80 leading-relaxed">Contact support for technical issues.</p>
                                <button className="w-full bg-[#F9F3DF] text-[#C2A01E] py-2 rounded-xl text-sm font-bold hover:bg-yellow-50 transition-colors">Contact Us &gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Dynamic Area - This swaps the content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* {renderContent()} */}
                {children}
            </main>
        </div>
    )
}
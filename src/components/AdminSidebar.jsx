'use client'
import { FileCheckIcon, FileText, FolderKanban, HeadphonesIcon, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminSidebar({children}) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard' , link:'/admindashboard'},
        { icon: <FolderKanban size={20} />, label: 'All CSR Projects' , link:'/adminprojectcsr'}, // Label used here
        { icon: <FileText size={20} />, label: 'Applications' , link:'/adminapplication'},
        { icon: <FileCheckIcon size={20} />, label: 'Agreements' , link:'/adminagreement'},
    ];

    // 2. Updated to match labels exactly
    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard': return <AdminDashboardView />;
            case 'All CSR Projects': return <AdminProjectsView />; // Match the menuItems label
            case 'Applications': return <AdminApplicationsView />;
            case 'Agreements': return <AdminSidebarAgreementsView />;
            default: return <DashboardView />;
        }
    };

    const handleNavigation = (item) => {
        setActiveTab(item.label);
        if (item.link) {
            router.push(item.link);
        }
    };

    return (
        // Added flex h-screen and overflow-hidden to handle the main page layout
        <div className="flex h-screen bg-[#f5f7fa] overflow-hidden">
            <aside className="w-18 hover:w-64 relative flex flex-col left-0 top-0 overflow-hidden group transition-all duration-300 z-50 shadow-xl">
                <div className="absolute inset-0 z-0">
                    <Image src="/image/aside.jpg" alt="background" fill className="object-cover" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="p-4 group-hover:p-6 border-b border-white/10">
                        <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center justify-center min-w-10">
                                <Image
                                    src={'/image/logo.png'}
                                    width={100}
                                    height={100}
                                    alt='logo'
                                    className="transition-all duration-300 ease-in-out w-10 h-10 group-hover:w-14 group-hover:h-14" />
                            </div>
                            <span className="font-bold text-sm leading-tight text-[#FEF9C2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                BMC CSR <br /> Portal
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 mt-6">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleNavigation(item)}
                                className={`flex items-center gap-4 px-2 py-4 cursor-pointer transition-all mx-4 rounded-xl mb-1 ${activeTab === item.label
                                    ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-500/30'
                                    : 'hover:bg-blue-500/20 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="min-w-6 flex justify-center">{item.icon}</div>
                                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </nav>

                    {/* Help Card */}
                    <div className="p-2 group-hover:p-4 mb-4 transition-all">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 group-hover:p-5 border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-2 mb-2">
                                <HeadphonesIcon size={20} className="text-blue-300 min-w-7.5" />
                                <h4 className="font-semibold text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Need Help?</h4>
                            </div>
                            <div className="hidden group-hover:block">
                                <p className="text-[14px] text-blue-100 mb-4 opacity-80">Contact CSR Support for issues.</p>
                                <button
                                onClick={()=> router.push('/contactus')}
                                className="w-full bg-[#F9F3DF] text-[#C2A01E] py-2 rounded-2xl text-[16px] font-medium hover:bg-[#f7ebc4] transition-colors">Contact Us &gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* 3. The Main Content Container - Crucial for showing content next to sidebar */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* {renderContent()} */}
                {children}
            </main>
        </div>
    )
}
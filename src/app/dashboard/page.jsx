'use client'
import { useState } from 'react';
import { FileCheckIcon, FileText, FolderKanban, LayoutDashboard, Bell, Search } from 'lucide-react';
import DashboardView from '../../components/DashboardView';
import Sidebar from '@/components/Sidebar';
import ProjectsView from '@/components/ProjectsView';
import ApplicationsView from '@/components/ApplicationsView';
import AgreementsView from '@/components/AgreementsView';

export default function Page() {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { icon: <FolderKanban size={20} />, label: 'All CSR Projects' },
        { icon: <FileText size={20} />, label: 'Applications' },
        { icon: <FileCheckIcon size={20} />, label: 'Agreements' },
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
        <div className="h-screen bg-[#F5F7FA]">
            {/* 1. SIDEBAR - Passed state as props to sync with content */}
            <Sidebar>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {renderContent()}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
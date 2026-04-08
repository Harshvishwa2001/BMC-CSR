'use client'
import { useState } from 'react';
import { FileCheckIcon, FileText, FolderKanban, LayoutDashboard, Bell, Search } from 'lucide-react';
import DashboardView from './DashboardView';
import Sidebar from '@/components/Sidebar';

// Placeholder views for a clean build
const ProjectsView = () => <div className="p-8 text-2xl font-bold text-gray-800">All CSR Projects Content</div>;
const ApplicationsView = () => <div className="p-8 text-2xl font-bold text-gray-800">Applications Content</div>;
const AgreementsView = () => <div className="p-8 text-2xl font-bold text-gray-800">Agreements Content</div>;

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
        <div className="flex h-screen overflow-hidden bg-[#F5F7FA]">
            {/* 1. SIDEBAR - Passed state as props to sync with content */}
            <Sidebar />

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
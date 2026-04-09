'use client'
import { AlertCircle, BellDot, Calendar, Check, Clock, FileText, LogOut, MessageSquare, Search } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

export default function DashboardHeader() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = () => {
        router.push('/')
    };

    const [isOpennot, setIsOpennot] = useState(false);
    const dropdownRefnot = useRef(null);

    // Mock data for your CSR Portal
    const notifications = [
        {
            id: 1,
            title: "New CSR Project",
            desc: "A new 'Green Energy' project is available for application.",
            time: "5m ago",
            type: "project",
            isNew: true
        },
        {
            id: 2,
            title: "Document Verified",
            desc: "Your Pan Card and NGO registration have been approved.",
            time: "2h ago",
            type: "verification",
            isNew: true
        },
        {
            id: 3,
            title: "Update Required",
            desc: "Please update your company's latest audit report.",
            time: "1d ago",
            type: "alert",
            isNew: false
        }
    ];

    // Handle clicks outside to close
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRefnot.current && !dropdownRefnot.current.contains(e.target)) {
                setIsOpennot(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const notification = [
        { name: "Education Infrastructure Development", status: "Under Review", date: "28 Mar 2026", color: "bg-yellow-100 text-yellow-700" },
        { name: "Healthcare Initiative - Rural Areas", status: "Shortlisted", date: "25 Mar 2026", color: "bg-green-100 text-green-700" },
        { name: "Clean Water Access Program", status: "Submitted", date: "20 Mar 2026", color: "bg-blue-100 text-blue-700" },
    ];

    return (
        <div>
            <header className='flex justify-between h-28 items-center px-8 py-4 bg-white border-b border-slate-200 sticky top-0 z-40'>
                {/* Left Section: Welcome Message */}
                <div className='max-w-2xl'>
                    <h1 className='font-bold text-2xl text-[#111827] tracking-tight'>
                        Welcome back, TechCorp Solutions Pvt Ltd
                    </h1>
                    <p className='text-[#6B7280] text-sm mt-1'>
                        Discover CSR opportunities and apply to projects that match your impact goals
                    </p>
                </div>

                {/* Right Section: Actions & Profile */}
                <div className='flex items-center gap-6'>
                    {/* Search & Notifications */}
                    <div className='flex items-center border-r border-slate-200 '>
                        <button className='p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-full transition-all'>
                            <Search size={20} />
                        </button>
                        <div className="relative" ref={dropdownRefnot}>
                            {/* Trigger Button */}
                            <button
                                onClick={() => setIsOpennot(!isOpennot)}
                                className={`p-2 rounded-xl transition-all relative group ${isOpennot ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'
                                    }`}
                            >
                                <BellDot size={22} className={isOpennot ? 'scale-110' : ''} />
                                {/* Red Indicator Dot */}
                                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpennot && (
                                <div className="absolute right-0 mt-4 w-120 bg-white rounded-[24px] shadow-2xl border border-gray-100 z-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">

                                    {/* Header */}
                                    <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                                        <span className="text-sm font-medium text-slate-900 tracking-widest">
                                            Notifications
                                        </span>
                                        <span className="text-[12px] font-medium text-blue-600 cursor-pointer hover:underline">
                                            Clear All
                                        </span>
                                    </div>

                                    {/* Scrollable List */}
                                    <div className="max-h-95 overflow-y-auto">
                                        {notification.map((notif, index) => (
                                            <div
                                                key={index} // Using index since ID is removed
                                                className={`p-5 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0 ${notif.status !== 'Submitted' ? 'bg-blue-50/20' : ''
                                                    }`}
                                            >
                                                {/* Dynamic Icon based on Status */}
                                                <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center ${notif.status === 'Shortlisted' ? 'bg-green-50 text-green-600' :
                                                    notif.status === 'Under Review' ? 'bg-yellow-50 text-yellow-600' :
                                                        'bg-blue-50 text-blue-600'
                                                    }`}>
                                                    {notif.status === 'Shortlisted' && <Check size={18} />}
                                                    {notif.status === 'Under Review' && <Clock size={18} />}
                                                    {notif.status === 'Submitted' && <FileText size={18} />}
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex flex-col gap-1">
                                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">
                                                        {notif.status} Update
                                                    </h4>
                                                    <p className="text-xs text-slate-500 leading-relaxed">
                                                        Your application for <span className="font-semibold text-slate-700">{notif.name}</span> is now {notif.status.toLowerCase()}.
                                                    </p>
                                                    <span className="text-[10px] font-bold text-slate-400 mt-1 flex items-center gap-1 uppercase tracking-wider">
                                                        <Calendar size={12} /> {notif.date}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Profile Dropdown */}
                    <div className='relative' ref={dropdownRef}>
                        {/* Profile Trigger */}
                        <div
                            className='flex items-center gap-2 cursor-pointer group/profile'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className='relative'>
                                <div className='w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-100 border-2 border-white'>
                                    TS
                                </div>
                            </div>

                            <div className='text-left hidden lg:block'>
                                <h2 className='text-sm font-bold text-[#111827] group-hover/profile:text-blue-600 transition-colors'>
                                    TechCorp Solutions Pvt Ltd
                                </h2>
                                <p className='text-[10px] text-[#6B7280] font-bold tracking-widest'>
                                    Company
                                </p>
                            </div>
                        </div>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-[100] animate-in fade-in zoom-in duration-200">
                                <button
                                    onClick={handleSignOut}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 hover:text-red-500 transition-colors"
                                >
                                    <LogOut size={16} />
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    )
}

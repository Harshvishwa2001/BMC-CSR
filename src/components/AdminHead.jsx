'use client'
import { AlertCircle, BellDot, Check, ChevronLeft, Clock, LogOut, MessageSquare, Search } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function AdminHead() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    // Close dropdown when clicking anywhere else
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
        // Clear auth tokens/session logic here
        router.push('/login');
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

    return (
        <div>
            <div>
                <header className='flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-40 h-28'>

                    {/* Left Section: Welcome Message */}
                    <div className='p-4'>
                        <h1 className='text-[#111827] text-[30px] font-semibold'>Welcome back, Arjun Kumar</h1>
                        <p className='text-[#6B7280] text-[16px]'>Here's an overview of your CSR activities</p>
                    </div>

                    {/* Right Section: Actions & Profile */}
                    <div className='flex items-center gap-4 md:gap-6'>
                        {/* Search & Notifications */}
                        <div className='flex items-center gap-1 border-r border-slate-200 pr-2 md:pr-2'>
                            <div className="relative" ref={dropdownRefnot}>
                                {/* Trigger Button */}
                                <button
                                    onClick={() => setIsOpennot(!isOpennot)}
                                    className={`p-2 rounded-xl transition-all relative group ${isOpennot ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'
                                        }`}
                                >
                                    <BellDot size={22} className={isOpennot ? 'scale-110' : ''} />
                                    {/* Red Indicator Dot */}
                                    <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>

                                {/* Dropdown Menu */}
                                {isOpennot  && (
                                    <div className="absolute right-0 mt-4 w-80 bg-white rounded-[24px] shadow-2xl border border-gray-100 z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">

                                        {/* Header */}
                                        <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                                Notifications
                                            </span>
                                            <span className="text-[10px] font-bold text-blue-600 cursor-pointer hover:underline">
                                                Clear All
                                            </span>
                                        </div>

                                        {/* Scrollable List */}
                                        <div className="max-h-[380px] overflow-y-auto">
                                            {notifications.map((notif) => (
                                                <div
                                                    key={notif.id}
                                                    className={`p-5 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0 ${notif.isNew ? 'bg-blue-50/20' : ''}`}
                                                >
                                                    {/* Icon based on type */}
                                                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${notif.type === 'project' ? 'bg-green-50 text-green-600' :
                                                            notif.type === 'alert' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                                                        }`}>
                                                        {notif.type === 'project' && <Check size={18} />}
                                                        {notif.type === 'alert' && <AlertCircle size={18} />}
                                                        {notif.type === 'verification' && <MessageSquare size={18} />}
                                                    </div>

                                                    {/* Text Content */}
                                                    <div className="flex flex-col gap-1">
                                                        <h4 className="text-sm font-bold text-slate-800 leading-tight">
                                                            {notif.title}
                                                        </h4>
                                                        <p className="text-xs text-slate-500 leading-relaxed">
                                                            {notif.desc}
                                                        </p>
                                                        <span className="text-[10px] font-bold text-slate-400 mt-1 flex items-center gap-1">
                                                            <Clock size={12} /> {notif.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Profile Section */}
                        <div className='relative' ref={dropdownRef}>
                            {/* Admin Profile Trigger */}
                            <div
                                className='flex items-center gap-2 cursor-pointer group/profile'
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <div className='relative'>
                                    <div className='w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-100 border-2 border-white transition-transform active:scale-95'>
                                        AK
                                    </div>
                                </div>

                                <div className='text-left hidden lg:block'>
                                    <h2 className='text-sm font-bold text-[#111827] group-hover/profile:text-blue-600 transition-colors'>
                                        Arjun Kumar
                                    </h2>
                                    <p className='text-[10px] text-[#6B7280] font-bold tracking-widest uppercase'>
                                        Admin
                                    </p>
                                </div>
                            </div>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute right-0 mt-3 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-[100] animate-in fade-in zoom-in duration-150 origin-top-right">
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 hover:text-red-500 transition-colors"
                                    >
                                        <LogOut size={16} strokeWidth={2.5} />
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

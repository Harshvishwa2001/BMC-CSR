import React from 'react'
import { Plus, Search, MoreHorizontal, MapPin, Calendar } from 'lucide-react'
import AdminHead from '@/components/AdminHead';
import AdminSidebar from '@/components/AdminSidebar';

export default function page() {
    const projects = [
        { id: 'PRO-101', name: "Rural Education Drive", location: "Dharavi, Mumbai", budget: "₹18,00,000", deadline: "Oct 2026", status: "Active" },
        { id: 'PRO-102', name: "Urban Afforestation", location: "Borivali, Mumbai", budget: "₹12,50,000", deadline: "Dec 2026", status: "Planning" },
        { id: 'PRO-103', name: "Women's Skill Center", location: "Colaba, Mumbai", budget: "₹25,00,000", deadline: "Aug 2026", status: "Delayed" },
    ];

    return (
        <>
            <AdminSidebar>
                <div className="h-full bg-[#f5f7fa] overflow-hidden">
                    <AdminHead />

                    <main className="overflow-y-auto p-6 lg:p-10 space-y-8">
                        {/* 1. Action Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">CSR Project Management</h1>
                                <p className="text-sm text-gray-500 mt-1 font-medium">Oversee live projects and monitor implementation timelines.</p>
                            </div>
                            <button className="flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-95">
                                <Plus size={18} /> Create New Project
                            </button>
                        </div>

                        {/* 2. Quick Metrics Bar */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Total Budget Allocated', value: '₹5.2 Cr', color: 'text-blue-600' },
                                { label: 'Active Projects', value: '24', color: 'text-green-600' },
                                { label: 'Pending Approvals', value: '07', color: 'text-amber-600' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                    <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* 3. Project Table Card */}
                        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                                <h3 className="font-bold text-gray-800">Live Projects List</h3>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Filter projects..."
                                        className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs focus:ring-2 focus:ring-blue-500/10 w-64"
                                    />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50/50">
                                        <tr>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Project Details</th>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</th>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Budget</th>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                            <th className="px-8 py-5 text-right"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {projects.map((proj) => (
                                            <tr key={proj.id} className="group hover:bg-blue-50/30 transition-all cursor-pointer">
                                                <td className="px-8 py-6">
                                                    <div className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{proj.name}</div>
                                                    <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1 font-bold">
                                                        <span className="bg-gray-100 px-2 py-0.5 rounded uppercase">{proj.id}</span>
                                                        <span className="flex items-center gap-1"><Calendar size={10} /> {proj.deadline}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                                                        <MapPin size={14} className="text-gray-400" /> {proj.location}
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 font-bold text-gray-900 text-sm">{proj.budget}</td>
                                                <td className="px-8 py-6">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${proj.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                        proj.status === 'Planning' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                                                        }`}>
                                                        {proj.status}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <button className="p-2 text-gray-300 hover:text-gray-600 hover:bg-white rounded-lg transition-all">
                                                        <MoreHorizontal size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </AdminSidebar>
        </>
    )
}
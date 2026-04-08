import React from 'react'
import { Eye, Filter, MoreVertical, Search } from 'lucide-react'
import AdminHead from '@/components/AdminHead';
import AdminSidebar from '@/components/AdminSidebar';

export default function page() {
    // Mock data for the administrative dashboard
    const applications = [
        { id: "APP-921", company: "TechCorp Solutions", project: "Education Infra", date: "02 Apr 2026", status: "Review" },
        { id: "APP-845", company: "GreenEarth Foundation", project: "Clean Water", date: "31 Mar 2026", status: "Approved" },
        { id: "APP-712", company: "HealthFirst NGO", project: "Mobile Clinics", date: "28 Mar 2026", status: "Pending" },
        { id: "APP-603", company: "BlueSky Energy", project: "Solar Lighting", date: "25 Mar 2026", status: "Rejected" },
    ];

    return (
        <>
            <AdminSidebar>
                <div className="flex flex-col h-full bg-[#f5f7fa] overflow-hidden">
                    {/* 1. Header Area */}
                    <AdminHead />

                    {/* 2. Main Scrollable Content */}
                    <main className="flex-1 overflow-y-auto p-6 lg:p-10">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Program Applications</h1>
                                <p className="text-gray-500 text-sm mt-1">Review and manage incoming CSR project proposals.</p>
                            </div>

                            {/* Search and Filter Actions */}
                            <div className="flex gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search apps..."
                                        className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>
                                <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50">
                                    <Filter size={20} />
                                </button>
                            </div>
                        </div>

                        {/* 3. Table and Sidebar Layout */}
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

                            {/* Main Applications Table */}
                            <div className="xl:col-span-3 bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50/50 border-b border-gray-100">
                                        <tr>
                                            <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Applicant</th>
                                            <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Project</th>
                                            <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                                            <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                            <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {applications.map((app) => (
                                            <tr key={app.id} className="hover:bg-blue-50/30 transition-colors cursor-pointer">
                                                <td className="px-8 py-5">
                                                    <div className="text-sm font-bold text-gray-900">{app.company}</div>
                                                    <div className="text-[10px] text-gray-400 font-medium">{app.id}</div>
                                                </td>
                                                <td className="px-8 py-5 text-sm text-gray-600 font-medium">{app.project}</td>
                                                <td className="px-8 py-5 text-sm text-gray-500">{app.date}</td>
                                                <td className="px-8 py-5">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${app.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                                        app.status === 'Review' ? 'bg-blue-100 text-blue-700' :
                                                            app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                                                        }`}>
                                                        {app.status}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-5">
                                                    <div className="flex gap-2">
                                                        <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                                                            <Eye size={18} />
                                                        </button>
                                                        <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg transition-colors">
                                                            <MoreVertical size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Right Side Info Cards */}
                            <div className="xl:col-span-1 space-y-6">
                                <div className="bg-[#0066FF] rounded-[2rem] p-8 text-white shadow-lg shadow-blue-500/20">
                                    <h3 className="text-lg font-bold mb-2">Admin Tip</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed opacity-90">
                                        Applications in "Review" state should be processed within 48 hours to maintain your response rating.
                                    </p>
                                </div>

                                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">Stats Overview</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 text-sm font-medium">New Today</span>
                                            <span className="text-blue-600 font-bold">12</span>
                                        </div>
                                        <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                                            <div className="bg-blue-600 h-full w-[65%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </AdminSidebar>
        </>
    )
}
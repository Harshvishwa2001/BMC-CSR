'use client'
import React from 'react'
import { Eye, Filter, MoreVertical, Search } from 'lucide-react'
import AdminHead from '@/components/AdminHead';
import AdminSidebar from '@/components/AdminSidebar';

export default function page() {
    const applications = [
        { compname: "TechCorp Solutions Pvt Ltd", name: "Education Infrastructure Development", status: "Under Review", date: "28 Mar 2026", color: "bg-[#FEF9C2] text-[#A65F00] border-yellow-100" },
        { compname: "GreenEarth Industries", name: "Healthcare Initiative - Rural Areas", status: "Shortlisted", date: "25 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] border-green-100" },
        { compname: "Sunrise Enterprises", name: "Clean Water Access Program", status: "Submitted", date: "20 Mar 2026", color: "bg-[#DBEAFE] text-[#1447E6] border-blue-100" },
        { compname: "Digital Innovations Ltd", name: "Digital Literacy Campaign", status: "Rejected", date: "15 Mar 2026", color: "bg-[#FFE2E2] text-[#C10007] border-red-100" },
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
                        </div>

                        {/* 3. Table and Sidebar Layout */}
                        <section>
                            <div className="lg:col-span-2 bg-white border border-slate-200 overflow-hidden rounded-2xl shadow-sm">
                                <div className="flex justify-between items-center border-b border-slate-50 px-4 py-6">
                                    <h2 className="font-bold text-[20px] text-slate-800">Recent Applications</h2>
                                    <button className="text-slate-400 text-sm hover:underline px-4">View All &gt;</button>
                                </div>
                                {/* Container handles the rounding and the outer border */}
                                <div className="w-full overflow-hidden border border-slate-200 ">
                                    <table className="w-full text-left bg-white">
                                        <thead>
                                            <tr className="bg-[#F9FAFB] text-[#6B7280] text-[12px] uppercase tracking-wider border-b border-slate-200">
                                                <th className="px-6 py-4 font-medium">Company Name</th>
                                                <th className="px-6 py-4 font-medium">Project Name</th>
                                                <th className="px-6 py-4 font-medium">Status</th>
                                                <th className="px-6 py-4 font-medium">Submitted Date</th>
                                                <th className="px-6 py-4 font-medium text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            {applications.map((app, idx) => (
                                                <tr
                                                    onClick={() => router.push('/admindashboard/viewapplication')}
                                                    key={idx} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                                                    <td className="px-6 py-4 text-sm  text-[#111827]">{app.compname}</td>
                                                    <td className="px-6 py-4 text-sm  text-[#111827]">{app.name}</td>
                                                    <td className="px-6 py-2">
                                                        <span className={`px-4 py-1 rounded-full text-[12px] font-medium border ${app.color}`}>
                                                            {app.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 text-sm text-[#6B7280]">{app.date}</td>
                                                    <td className="px-6 py-5">
                                                        <button
                                                            onClick={() => router.push('/admindashboard/viewapplication')}
                                                            className="flex items-center gap-1 mx-auto text-[#1D4ED8] text-sm  hover:text-blue-700 cursor-pointer">
                                                            <Eye size={16} /> View
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </AdminSidebar>
        </>
    )
}
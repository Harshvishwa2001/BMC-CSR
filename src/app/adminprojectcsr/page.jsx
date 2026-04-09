import React from 'react'
import { Plus, Search, MoreHorizontal, MapPin, Calendar, Eye } from 'lucide-react'
import AdminHead from '@/components/AdminHead';
import AdminSidebar from '@/components/AdminSidebar';

export default function page() {
    const Project = [
        { application: "12", name: "Education Infrastructure Development", status: "Active", date: "28 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] " },
        { application: "8", name: "Healthcare Initiative - Rural Areas", status: "Active", date: "25 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] " },
        { application: "0", name: "Clean Water Access Program", status: "Draft", date: "20 Mar 2026", color: "bg-[#F3F4F6] text-[#364153] " },
        { application: "15", name: "Women Empowerment Scheme", status: "Active", date: "15 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] " },
        { application: "22", name: "Digital Literacy Campaign", status: "Closed", date: "15 Mar 2026", color: "bg-[#FFE2E2] text-[#C10007] " },
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
                        </div>

                        <section>
                            <div className="lg:col-span-2 bg-white border border-slate-200 overflow-hidden rounded-2xl shadow-sm">
                                <div className="flex justify-between items-center border-b border-slate-50 px-4 py-6">
                                    <h2 className="font-bold text-[20px] text-slate-800">Recent Projects</h2>
                                    <button className="text-slate-400 text-sm hover:underline px-4 cursor-pointer">View All &gt;</button>
                                </div>
                                {/* Container handles the rounding and the outer border */}
                                <div className="w-full overflow-hidden border border-slate-200 ">
                                    <table className="w-full text-left bg-white">
                                        <thead>
                                            <tr className="bg-[#F9FAFB] text-[#6B7280] text-[12px] uppercase tracking-wider border-b border-slate-200">

                                                <th className="px-6 py-4 font-medium">Project Name</th>
                                                <th className="px-6 py-4 font-medium">Status</th>
                                                <th className="px-6 py-4 font-medium">Application</th>
                                                <th className="px-6 py-4 font-medium">Submitted Date</th>
                                                <th className="px-6 py-4 font-medium text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            {Project.map((app, idx) => (
                                                <tr key={idx} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                                                    <td className="px-6 py-4 text-sm  text-[#111827]">{app.name}</td>
                                                    <td className="px-6 py-2">
                                                        <span className={`px-4 py-1 rounded-full text-[12px] font-medium  ${app.color}`}>
                                                            {app.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 text-sm text-[#6B7280]">{app.application}</td>
                                                    <td className="px-6 py-5 text-sm text-[#6B7280]">{app.date}</td>
                                                    <td className="px-6 py-5">
                                                        <button className="flex items-center gap-1 mx-auto text-[#1D4ED8] text-sm  hover:text-blue-700">
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
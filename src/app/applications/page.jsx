'use client'
import React from 'react'
import { Eye } from 'lucide-react'
import Sidebar from '@/components/Sidebar';
import AdminHeader from '@/components/AdminHeader';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/DashboardHeader';

export default function page() {
    const router = useRouter()
    const applications = [
        { id: 1, name: "Education Infrastructure Development", status: "Under Review", date: "28 Mar 2026", color: "bg-yellow-100 text-yellow-700" },
        { id: 2, name: "Healthcare Initiative - Rural Areas", status: "Shortlisted", date: "25 Mar 2026", color: "bg-green-100 text-green-700" },
        { id: 3, name: "Clean Water Access Program", status: "Submitted", date: "20 Mar 2026", color: "bg-blue-100 text-blue-700" },
        { id: 4, name: "Digital Literacy Campaign", status: "Rejected", date: "15 Mar 2026", color: "bg-red-100 text-red-700" },
    ];

    return (
        <>
            <Sidebar>
                <DashboardHeader />
                <div className="space-y-10 bg-[#F9FAFB] min-h-screen">

                    {/* Content area that scrolls independently */}
                    <div className="lg:col-span-2 overflow-hidden p-8">
                        <div className=" space-y-4 flex justify-between items-center border-b border-slate-50">
                            <h2 className="font-bold text-[20px] text-slate-800">Your Applications</h2>
                            <button className="text-slate-400 text-sm hover:underline px-4 cursor-pointer">View All &gt;</button>
                        </div>
                        {/* Container handles the rounding and the outer border */}
                        <div className="w-full overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left bg-white">
                                <thead>
                                    <tr className="bg-[#F9FAFB] text-[#6B7280] text-[12px] uppercase tracking-wider border-b border-slate-200">
                                        <th className="px-6 py-4 font-medium">Project Name</th>
                                        <th className="px-6 py-4 font-medium">Status</th>
                                        <th className="px-6 py-4 font-medium">Submitted Date</th>
                                        <th className="px-6 py-4 font-medium text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {applications.map((app, idx) => (
                                        <tr
                                            onClick={() => router.push('/dashboard/review')}
                                            key={idx} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                                            <td className="px-6 py-4 text-sm  text-[#111827]">{app.name}</td>
                                            <td className="px-6 py-2">
                                                <span className={`px-3 py-1 rounded-full text-[11px] font-medium border ${app.color}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-sm text-[#6B7280]">{app.date}</td>
                                            <td className="px-6 py-5">
                                                <button className="flex items-center gap-1 mx-auto text-[#1D4ED8] text-sm  hover:text-blue-700 cursor-pointer">
                                                    <Eye size={16} /> View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}
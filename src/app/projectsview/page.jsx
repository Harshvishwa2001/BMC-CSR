'use client'
import Card from '@/components/Card';
import DashboardHeader from '@/components/DashboardHeader'
import Sidebar from '@/components/Sidebar'
import { Calendar, Eye, IndianRupee, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const projects = [
    {
        tags: ["Education", "New"],
        name: "Education Infrastructure Development",
        location: "Mumbai, Maharashtra",
        money: "50,00,000",
        date: "15 Apr 2026",
        tagColors: { Education: "bg-purple-50 text-purple-600", New: "bg-blue-50 text-blue-600" }
    },
    {
        tags: ["Healthcare", "Closing Soon"],
        name: "Healthcare Initiative - Rural Areas",
        location: "Pune, Maharashtra",
        money: "75,00,000",
        date: "10 Apr 2026",
        tagColors: { Healthcare: "bg-green-50 text-green-600", "Closing Soon": "bg-red-50 text-red-600" }
    },
    {
        tags: ["Women Empowerment"],
        name: "Women Empowerment Scheme",
        location: "Delhi NCR",
        money: "35,00,000",
        date: "25 Apr 2026",
        tagColors: { "Women Empowerment": "bg-pink-50 text-pink-600" }
    }
];
export default function page() {
    const router = useRouter();

    return (
        <>
            <Sidebar>
                {/* Header stays at the top */}
                <div className="h-full bg-[#f5f7fa] transition-all duration-300">
                    < DashboardHeader />

                    <div className='p-6'>
                        <div className='flex justify-between space-y-4'>
                            <h1 className='text-[#111827] text-[20px] font-semibold'>Recommended CSR Projects for You</h1>
                            <button className="text-slate-400 text-sm px-4 gap-2">View All &gt;</button>
                        </div>

                        <div className="w-full bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#F9FAFB] text-[#6B7280] text-[12px] uppercase tracking-wider border-b border-slate-200">
                                            <th className="px-8 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-widest">Project Details</th>
                                            <th className="px-6 py-4 text-[11px] font-medium text-gray-400 uppercase tracking-widest">Status</th>
                                            <th className="px-6 py-4 text-[11px] font-medium text-gray-400 uppercase tracking-widest">Location</th>
                                            <th className="px-6 py-4 text-[11px] font-medium text-gray-400 uppercase tracking-widest">Budget</th>
                                            <th className="px-6 py-4 text-[11px] font-medium text-gray-400 uppercase tracking-widest">Deadline</th>
                                            <th className="px-8 py-4 text-[11px] font-medium text-gray-400 uppercase tracking-widest text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {projects.map((project, index) => (
                                            <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                                                <td className="px-8 py-4">
                                                    <div className="flex flex-col gap-2">

                                                        <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                                            {project.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                                        <div className="flex gap-2">
                                                            {project.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className={`px-3 py-1 text-[10px] font-bold rounded-full border border-current opacity-80 ${project.tagColors[tag] || 'bg-gray-100 text-gray-600'}`}
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                                        <MapPin size={14} className="text-gray-400" />
                                                        {project.location}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                                                        <IndianRupee size={14} className="text-gray-400" />
                                                        {project.money}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                                        <Calendar size={14} className="text-gray-400" />
                                                        {project.date}
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <button
                                                    onClick={()=> router.push('/dashboard/project')}
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-all cursor-pointer">
                                                        <Eye size={16} />
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}
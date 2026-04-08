import React from 'react'
import { Eye } from 'lucide-react'

export default function ApplicationsView() {
    const applications = [
        { id: 1, name: "Education Infrastructure Development", status: "Under Review", date: "28 Mar 2026", color: "bg-yellow-100 text-yellow-700" },
        { id: 2, name: "Healthcare Initiative - Rural Areas", status: "Shortlisted", date: "25 Mar 2026", color: "bg-green-100 text-green-700" },
        { id: 3, name: "Clean Water Access Program", status: "Submitted", date: "20 Mar 2026", color: "bg-blue-100 text-blue-700" },
        { id: 4, name: "Digital Literacy Campaign", status: "Rejected", date: "15 Mar 2026", color: "bg-red-100 text-red-700" },
    ];

    return (
        <div className="p-6 lg:p-10 space-y-10 bg-[#F9FAFB] min-h-screen">
            {/* Page Title */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Your Applications</h2>
                <button className="text-sm font-semibold text-blue-600 hover:underline">View All &gt;</button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Applications Table */}
                <div className="xl:col-span-2 bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Project Name</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Submitted Date</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="px-8 py-5 text-sm font-semibold text-gray-800">{app.name}</td>
                                    <td className="px-8 py-5">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${app.color}`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-gray-500">{app.date}</td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="text-blue-600 flex items-center gap-1 ml-auto text-sm font-bold hover:text-blue-800">
                                            <Eye size={16} /> View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Side Panel: Recent Updates */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">Recent Updates</h3>
                    <div className="bg-yellow-50/50 border border-yellow-100 rounded-3xl p-6 space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                <span className="text-yellow-600 text-lg">🕒</span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-800 leading-snug">
                                    Your application for <span className="font-bold">"Education Infrastructure"</span> is under review.
                                </p>
                                <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 block">2 hours ago</span>
                            </div>
                        </div>
                        {/* Add more update items here */}
                    </div>
                </div>
            </div>
        </div>
    )
}
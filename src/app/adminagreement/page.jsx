import React from 'react'
import { FileCheck, Clock, Download, Search, MoreVertical, ShieldAlert } from 'lucide-react'
import AdminHead from '@/components/AdminHead';
import AdminSidebar from '@/components/AdminSidebar';

export default function page() {
    const agreements = [
        { id: 'AGR-2026-01', partner: "Reliance Foundation", type: "MOU", status: "Signed", date: "05 Apr 2026" },
        { id: 'AGR-2026-02', partner: "Tata Trusts", type: "Service Level", status: "Pending", date: "02 Apr 2026" },
        { id: 'AGR-2026-03', partner: "Infosys CSR Arm", type: "Funding", status: "Review", date: "28 Mar 2026" },
    ];

    return (
        <>
            <AdminSidebar>
                <div className="flex flex-col h-full bg-[#f5f7fa] overflow-hidden">
                    <AdminHead />

                    <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">
                        {/* 1. Header Section */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Legal Agreements</h1>
                                <p className="text-sm text-gray-500 mt-1 font-medium">Manage partnerships, MOUs, and compliance documentation.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
                                    <Download size={18} /> Export All
                                </button>
                            </div>
                        </div>

                        {/* 2. Status Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Legally Signed', count: '142', icon: <FileCheck className="text-green-600" />, bg: 'bg-green-50' },
                                { label: 'Awaiting Signature', count: '12', icon: <Clock className="text-amber-600" />, bg: 'bg-amber-50' },
                                { label: 'Compliance Flag', count: '03', icon: <ShieldAlert className="text-red-600" />, bg: 'bg-red-50' }
                            ].map((item, i) => (
                                <div key={i} className={`${item.bg} p-6 rounded-[2rem] border border-white/50 flex items-center justify-between shadow-sm`}>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-2xl font-black text-gray-900">{item.count}</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-2xl shadow-sm">{item.icon}</div>
                                </div>
                            ))}
                        </div>

                        {/* 3. Agreements Table */}
                        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-8 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h3 className="font-bold text-gray-800">Recent Documentation</h3>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Search by partner or ID..."
                                        className="pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-xs focus:ring-2 focus:ring-blue-500/10 w-full sm:w-72"
                                    />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50/50">
                                        <tr>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Partner & ID</th>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type</th>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Updated</th>
                                            <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                            <th className="px-8 py-5"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {agreements.map((agr) => (
                                            <tr key={agr.id} className="group hover:bg-blue-50/30 transition-all">
                                                <td className="px-8 py-6">
                                                    <div className="font-bold text-gray-900 text-sm">{agr.partner}</div>
                                                    <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">{agr.id}</div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
                                                        {agr.type}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-6 text-sm text-gray-500 font-medium">{agr.date}</td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 rounded-full ${agr.status === 'Signed' ? 'bg-green-500' :
                                                            agr.status === 'Review' ? 'bg-blue-500' : 'bg-amber-500'
                                                            }`} />
                                                        <span className="text-xs font-bold text-gray-700">{agr.status}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <button className="p-2 text-gray-300 hover:text-gray-600 hover:bg-white rounded-lg transition-all">
                                                        <MoreVertical size={20} />
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
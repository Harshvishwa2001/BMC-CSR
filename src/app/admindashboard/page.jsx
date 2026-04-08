'use client'
import AdminHead from '@/components/AdminHead';
import AdminSidebar from '@/components/AdminSidebar';
import CreateCSRProject from '@/components/CreateCSRProject';
import GraphsChart from '@/components/Graphs';
import PieCharts from '@/components/PieCharts';
import { CircleAlert, Eye, FileText, FolderKanban, Plus, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const stats = [
    { label: "Total Projects", value: "24", icon: FolderKanban },
    { label: "Active Projects", value: "12", icon: FolderKanban },
    { label: "Applications Received", value: "156", icon: FileText },
    { label: "Pending Actions", value: "8", icon: CircleAlert },
];

const quickActions = [
    {
        title: "Create New Project",
        desc: "Start a new CSR project and invite applications",
        icon: Plus,
        primary: true
    },
    {
        title: "View All Projects", // Kept your original text: "Create New Project"
        desc: "Review and manage submitted applications",
        icon: Eye,
        primary: false
    },
    {
        title: "Upload Documents", // Kept your original text: "Create New Project"
        desc: "Make your draft projects live and accessible",
        icon: Upload,
        primary: false
    }
];

const applications = [
    { compname: "TechCorp Solutions Pvt Ltd", name: "Education Infrastructure Development", status: "Under Review", date: "28 Mar 2026", color: "bg-[#FEF9C2] text-[#A65F00] border-yellow-100" },
    { compname: "GreenEarth Industries", name: "Healthcare Initiative - Rural Areas", status: "Shortlisted", date: "25 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] border-green-100" },
    { compname: "Sunrise Enterprises", name: "Clean Water Access Program", status: "Submitted", date: "20 Mar 2026", color: "bg-[#DBEAFE] text-[#1447E6] border-blue-100" },
    { compname: "Digital Innovations Ltd", name: "Digital Literacy Campaign", status: "Rejected", date: "15 Mar 2026", color: "bg-[#FFE2E2] text-[#C10007] border-red-100" },
];

const Project = [
    { application: "12", name: "Education Infrastructure Development", status: "Active", date: "28 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] " },
    { application: "8", name: "Healthcare Initiative - Rural Areas", status: "Active", date: "25 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] " },
    { application: "0", name: "Clean Water Access Program", status: "Draft", date: "20 Mar 2026", color: "bg-[#F3F4F6] text-[#364153] " },
    { application: "15", name: "Women Empowerment Scheme", status: "Active", date: "15 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] " },
    { application: "22", name: "Digital Literacy Campaign", status: "Closed", date: "15 Mar 2026", color: "bg-[#FFE2E2] text-[#C10007] " },
];

export default function Page() {
    const router = useRouter();
    const [isopen, setOpen] = useState(false);

    return (
        <>
            <AdminSidebar>
                <div className="flex flex-col h-screen overflow-hidden bg-[#f5f7fa]">
                    <main className="flex flex-col h-full transition-all duration-300">
                        <AdminHead />

                        <div className="overflow-y-auto p-10 space-y-10">

                            {/* Stats Grid */}
                            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                                {stats.map((item, index) => (
                                    <div
                                        key={index}
                                        className='p-8 bg-white border border-gray-100 rounded-[14px] shadow-sm hover:shadow-md transition-shadow'
                                    >
                                        <div className='flex justify-between items-center mb-4'>
                                            <p className='text-[#6B7280] text-sm font-medium'>{item.label}</p>
                                            <item.icon className='text-[#6B7280]' size={20} />
                                        </div>
                                        <p className='text-[#111827] text-[30px] font-bold leading-none'>{item.value}</p>
                                    </div>
                                ))}
                            </section>

                            {/* Quick Actions */}
                            <section className='space-y-5'>
                                <h1 className='text-xl font-bold text-[#111827]'>Quick Actions</h1>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                    {quickActions.map((action, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                if (action.title === "Create New Project") {
                                                    setOpen(true);
                                                }
                                            }}
                                            className={`cursor-pointer px-6 py-10 rounded-[14px] space-y-6 transition-all hover:scale-[1.01] ${action.primary
                                                ? 'bg-[#1D4ED8] text-white shadow-lg shadow-blue-100'
                                                : 'bg-white border border-slate-200 text-black'
                                                }`}
                                        >
                                            <action.icon size={32} className={action.primary ? 'text-white' : 'text-[#1D4ED8]'} />
                                            <div>
                                                <p className='text-[18px] font-semibold'>{action.title}</p>
                                                <p className={`text-sm mt-1 ${action.primary ? 'text-blue-50' : 'text-gray-500'}`}>
                                                    {action.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Charts Section */}
                            <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10'>
                                {/* Bar Chart - Takes up 2/3 of the space */}
                                <div className="lg:col-span-2">
                                    <GraphsChart />
                                </div>

                                {/* Pie Chart - Takes up 1/3 of the space */}
                                <div className="lg:col-span-1 flex justify-center">
                                    <PieCharts />
                                </div>
                            </section>

                            <section>
                                <div className="lg:col-span-2 bg-white border border-slate-200 overflow-hidden rounded-2xl shadow-sm">
                                    <div className="flex justify-between items-center border-b border-slate-50 px-4 py-6">
                                        <h2 className="font-bold text-[20px] text-slate-800">Recent Projects</h2>
                                        <button className="text-slate-400 text-sm hover:underline px-4">View All &gt;</button>
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

                            <CreateCSRProject
                                isOpen={isopen}
                                onClose={() => setOpen(false)}
                            />
                        </div>
                    </main>
                </div >
            </AdminSidebar>
        </>
    );
}
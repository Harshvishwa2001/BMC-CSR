import Card from '@/components/Card';
import { BellDot, Calendar, Clock, Eye, File, FileText, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardView() {
    const router = useRouter();

    const applications = [
        { name: "Education Infrastructure Development", status: "Under Review", date: "28 Mar 2026", color: "bg-[#FEF9C2] text-[#A65F00] border-yellow-100" },
        { name: "Healthcare Initiative - Rural Areas", status: "Shortlisted", date: "25 Mar 2026", color: "bg-[#DCFCE7] text-[#008236] border-green-100" },
        { name: "Clean Water Access Program", status: "Submitted", date: "20 Mar 2026", color: "bg-[#DBEAFE] text-[#1447E6] border-blue-100" },
        { name: "Digital Literacy Campaign", status: "Rejected", date: "15 Mar 2026", color: "bg-[#FFE2E2] text-[#C10007] border-red-100" },
    ];

    const updates = [
        { icon: <Clock className="text-[#D08700]" />, title: "Your application for \"Education Infrastructure Development\" is under review", time: "2 hours ago", bg: "bg-yellow-50" },
        { icon: <FileText className="text-[#155DFC]" />, title: "New CSR project \"Women Empowerment Scheme\" published", time: "5 hours ago", bg: "bg-blue-50" },
        { icon: <Calendar className="text-[#E7000B]" />, title: "Deadline updated for \"Healthcare Initiative - Rural Areas\"", time: "1 day ago", bg: "bg-red-50" },
        { icon: <File className="text-[#00A63E]" />, title: "You have been shortlisted for \"Healthcare Initiative - Rural Areas\"", time: "1 day ago", bg: "bg-red-50" },
    ];

    return (
        // Header
        <div>
            <header className='flex justify-between h-28 items-center px-8 py-4 bg-white border-b border-slate-200 sticky top-0 z-40'>
                {/* Left Section: Welcome Message */}
                <div className='max-w-2xl'>
                    <h1 className='font-bold text-2xl text-[#111827] tracking-tight'>
                        Welcome back, TechCorp Solutions Pvt Ltd
                    </h1>
                    <p className='text-[#6B7280] text-sm mt-1'>
                        Discover CSR opportunities and apply to projects that match your impact goals
                    </p>
                </div>

                {/* Right Section: Actions & Profile */}
                <div className='flex items-center gap-6'>
                    {/* Search & Notifications */}
                    <div className='flex items-center border-r border-slate-200 '>
                        <button className='p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-full transition-all cursor-pointer'>
                            <Search size={20} />
                        </button>
                        <button className='p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-full transition-all relative cursor-pointer'>
                            <BellDot size={20} />
                            <span className='absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white'></span>
                        </button>
                    </div>

                    {/* Profile Dropdown */}
                    <div className='flex items-center gap-2 cursor-pointer group/profile'>
                        <div className='relative'>
                            <div className='w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-100 border-2 border-white'>
                                TS
                            </div>
                        </div>

                        <div className='text-left hidden lg:block'>
                            <h2 className='text-sm font-bold text-[#111827] group-hover/profile:text-blue-600 transition-colors'>
                                TechCorp Solutions Pvt Ltd
                            </h2>
                            <p className='text-[10px] text-[#6B7280] font-bold tracking-widest'>
                                Company
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-8 space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* --- LEFT: Your Applications Table --- */}
                    <div className="lg:col-span-2 border border-slate-100 overflow-hidden">
                        <div className=" space-y-4 flex justify-between items-center border-b border-slate-50">
                            <h2 className="font-bold text-[20px] text-slate-800">Your Applications</h2>
                            <button className="text-slate-400 text-sm hover:underline">View All &gt;</button>
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

                    {/* --- RIGHT: Recent Updates --- */}
                    <div className="">
                        <h2 className="font-bold text-lg text-slate-800 mb-4">Recent Updates</h2>
                        <div className="space-y-4 h-74 bg-[#FFF9EA]  rounded-2xl p-4 border border-yellow-100/50 shadow-sm overflow-y-auto custom-sidebar-scroll">
                            {updates.map((update, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-white shadow-sm`}>
                                        {update.icon}
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-slate-700 leading-snug font-medium">{update.title}</p>
                                        <p className="text-xs text-slate-400 mt-1">{update.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommended Projects section would go here... */}
                <div>
                    <div className='flex justify-between space-y-4'>
                        <h1 className='text-[#111827] text-[20px] font-semibold'>Recommended CSR Projects for You</h1>
                        <button className="text-slate-400 text-sm px-4 gap-2">View All &gt;</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card
                            tags={["Education", "New"]}
                            name="Education Infrastructure Development"
                            location="Mumbai, Maharashtra"
                            money="50,00,000"
                            date="15 Apr 2026"
                        />

                        <Card
                            tags={["Healthcare", "Closing Soon"]}
                            name="Healthcare Initiative - Rural Areas"
                            location="Pune, Maharashtra"
                            money="75,00,000"
                            date="10 Apr 2026"
                        />

                        <Card
                            tags={["Women Empowerment"]}
                            name="Women Empowerment Scheme"
                            location="Delhi NCR"
                            money="35,00,000"
                            date="25 Apr 2026"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

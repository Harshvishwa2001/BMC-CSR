'use client'
import AdminHead from '@/components/AdminHead'
import AdminSidebar from '@/components/AdminSidebar'
import { CircleAlert, Eye, FileText, FolderKanban, Plus, Upload } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', uv: 20 },
    { name: 'Feb', uv: 75 },
    { name: 'Mar', uv: 50 },
    { name: 'Apr', uv: 110 },
    { name: 'May', uv: 65 },
    { name: 'Jun', uv: 125 },
    { name: 'Jul', uv: 100 },
    { name: 'Aug', uv: 160 },
    { name: 'Sep', uv: 130 },
    { name: 'Oct', uv: 175 },
    { name: 'Nov', uv: 120 },
    { name: 'Dec', uv: 175 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#111827] text-white p-3 rounded-xl shadow-xl border border-gray-700">
                <p className="text-xs font-medium text-gray-300">{`${payload[0].payload.month}`}</p>
                <p className="text-sm font-bold mt-1">
                    {`${payload[0].value} Applications`}
                </p>
            </div>
        );
    }
    return null;
};

export default function Page() {
    // Array to manage your stats, making the code easier to read and maintain
    const stats = [
        { label: "Total Projects", value: "24", icon: FolderKanban },
        { label: "Active Projects", value: "12", icon: FolderKanban },
        { label: "Applications Received", value: "156", icon: FileText },
        { label: "Pending Actions", value: "8", icon: CircleAlert },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-[#f5f7fa]">
            <AdminSidebar />
            <main className="flex-1 flex flex-col h-full transition-all duration-300">
                <AdminHead />
                <div className="flex-1 overflow-y-auto p-10 space-y-8">
                    <div className="flex flex-wrap gap-6">
                        {stats.map((item, index) => (
                            <div key={index} className='p-6 bg-white w-80 space-y-4 rounded-[14px] border border-gray-100 shadow-sm'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#6B7280] text-sm'>{item.label}</p>
                                    <item.icon className='text-[#6B7280]' size={20} />
                                </div>
                                <div>
                                    <p className='text-[#111827] text-[30px] font-bold'>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-[20px] font-semibold text-[#111827] '>Quick Actions</h1>
                        <div className='flex items-center gap-6'>
                            <div className='w-110 bg-[#1D4ED8] px-6 py-8 rounded-[14px] space-y-4'>
                                <Plus size={32} className='text-white' />
                                <p className='text-white text-[18px] font-semibold'>Create New Project</p>
                                <p className='text-white text-sm'>Start a new CSR project and invite applications</p>
                            </div>
                            <div className='w-110 bg-white border border-slate-200 px-6 py-8 rounded-[14px] space-y-4'>
                                <Eye size={32} className='text-[#1D4ED8]' />
                                <p className='text-black text-[18px] font-semibold'>Create New Project</p>
                                <p className='text-black text-sm'>Start a new CSR project and invite applications</p>
                            </div>
                            <div className='w-110 bg-white border border-slate-200 px-6 py-8 rounded-[14px] space-y-4'>
                                <Upload size={32} className='text-[#1D4ED8]' />
                                <p className='text-black text-[18px] font-semibold'>Create New Project</p>
                                <p className='text-black text-sm'>Start a new CSR project and invite applications</p>
                            </div>
                        </div>
                    </div>

                    {/* Graphs */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full max-w-4xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Application Trends</h2>

                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={data}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                    barSize={40} // Custom bar width
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false} // Only horizontal grid lines
                                        stroke="#E5E7EB" // Lighter gray lines
                                    />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false} // Hide the main X-axis line
                                        tickLine={false} // Hide small tick marks
                                        tick={{ fill: '#6B7280', fontSize: 12 }} // Style for the month labels
                                        interval={0} // Ensure all months are shown
                                    />
                                    <YAxis
                                        axisLine={false} // Hide the main Y-axis line
                                        tickLine={false} // Hide small tick marks
                                        tick={{ fill: '#6B7280', fontSize: 12 }} // Style for the numbers
                                        domain={[0, 200]} // Set the range from 0 to 200
                                        ticks={[0, 50, 100, 150, 200]} // Define the exact breaks
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }} // Light blue hover background
                                        contentStyle={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Bar
                                        dataKey="uv"
                                        fill="#3B82F6" // The blue color
                                        radius={[8, 8, 0, 0]} // Rounded corners at the top
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
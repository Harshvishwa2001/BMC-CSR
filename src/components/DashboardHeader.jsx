import { BellDot, Search } from 'lucide-react'
import React from 'react'

export default function DashboardHeader() {
    return (
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
                        <button className='p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-full transition-all'>
                            <Search size={20} />
                        </button>
                        <button className='p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-full transition-all relative'>
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
        </div>
    )
}

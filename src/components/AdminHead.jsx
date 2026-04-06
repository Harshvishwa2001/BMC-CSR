import { BellDot, ChevronLeft, Search } from 'lucide-react'

export default function AdminHead() {
    return (
        <div>
            <div>
                <header className='flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-40 h-28'>

                    {/* Left Section: Welcome Message */}
                    <div className='p-4'>
                        <h1 className='text-[#111827] text-[30px] font-semibold'>Welcome back, Arjun Kumar</h1>
                        <p className='text-[#6B7280] text-[16px]'>Here's an overview of your CSR activities</p>
                    </div>

                    {/* Right Section: Actions & Profile */}
                    <div className='flex items-center gap-4 md:gap-6'>
                        {/* Search & Notifications */}
                        <div className='flex items-center gap-1 border-r border-slate-200 pr-2 md:pr-2'>
                            <button className='p-1 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all relative'>
                                <BellDot size={20} />
                                <span className='absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white'></span>
                            </button>
                        </div>

                        {/* Profile Section */}
                        <div className='flex items-center gap-2 cursor-pointer group/profile'>
                            <div className='relative'>
                                <div className='w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-100 border-2 border-white'>
                                    AK
                                </div>
                            </div>

                            <div className='text-left hidden lg:block'>
                                <h2 className='text-sm font-bold text-[#111827] group-hover/profile:text-blue-600 transition-colors'>
                                    Arjun Kumar
                                </h2>
                                <p className='text-[10px] text-[#6B7280] font-bold tracking-widest'>
                                    Admin
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

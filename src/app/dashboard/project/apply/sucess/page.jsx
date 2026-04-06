'use client'
import AdminHeader from '@/components/AdminHeader';
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar';
import { CircleCheckBig, Download, FileText, HomeIcon, LayoutDashboard } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter();

    return (
        // 1. Fixed the outer container to screen height and hide main overflow
        <div className="flex h-screen overflow-hidden bg-[#f5f7fa]">
            
            {/* Sidebar remains fixed on the left */}
            <Sidebar/>

            {/* 2. Main section is a flex-col to keep Header at top and Content scrollable */}
            <main className="flex-1 flex flex-col h-full transition-all duration-300">
                <AdminHeader/>

                {/* 3. This div becomes the only scrollable area */}
                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col items-center justify-center py-4 px-12">
                        {/* Main Success Card */}
                        <div className="max-w-150 w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center">

                            {/* Animated Icon Container */}
                            <div className="w-20 h-20 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-6">
                                <CircleCheckBig size={40} className="text-[#00A63E]" />
                            </div>

                            {/* Text Content */}
                            <h1 className="text-2xl font-bold text-[#111827] mb-2">
                                Registration Successful!
                            </h1>
                            <p className="text-[#8897AD] text-[16px] mb-8">
                                Thank you, <span className='font-bold text-[#111827]'>TechCorp Solutions Pvt Ltd.</span> Your registration has been submitted successfully.
                            </p>

                            <div className='bg-[#F5F7FA] px-6 py-4 w-125 space-y-4 m-2 rounded-[10px]'>
                                <p className='text-sm text-[#6B7280]'>Your Application ID</p>
                                <h1 className='text-[#1D4ED8] text-2xl font-bold tracking-wide'>CSR-2026-04-E4D8A3</h1>
                                <p className='text-xs text-[#6B7280]'>Please save this ID for future reference</p>
                            </div>

                            <div className='bg-[#EFF6FF] w-125 p-6 rounded-xl border border-[#BEDBFF] space-y-4 mt-6'>
                                <h1 className='text-sm text-[#111827] font-semibold text-left'>What happens next?</h1>
                                <div className='text-justify text-sm space-y-2 space-x-2'>
                                    <p className='text-[#6B7280]'><span className='text-[#1D4ED8]'>1.</span> Our team will review your application within 3-5 business days</p>
                                    <p className='text-[#6B7280]'><span className='text-[#1D4ED8]'>2.</span> You will receive an email notification once your account is approved</p>
                                    <p className='text-[#6B7280]'><span className='text-[#1D4ED8]'>3.</span> After approval, you can log in and start exploring CSR projects</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="w-full flex gap-3 px-10 py-10">
                                <button className="w-full text-[14px] hover:bg-white text-[#111827] font-medium py-2 px-4 border border-[#E5E7EB] rounded-xl flex items-center justify-center gap-2 ">
                                    <FileText size={16} />View My Applications
                                </button>
                                <button onClick={() => router.push('/dashboard')} className="w-full text-[14px] bg-[#1D4ED8] hover:bg-blue-700 text-white py-3 rounded-xl  flex items-center justify-center gap-2">
                                    <LayoutDashboard size={16} />Back to Dashboard
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
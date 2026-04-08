'use client'
import Sidebar from '@/components/Sidebar';
import { BellDot, CheckCircle, ChevronDown, ChevronLeft, CircleCheckBig, FileText, IndianRupee, MapPin, Search, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CSRProject() {
    const router = useRouter();

    return (
        <div className="flex h-screen overflow-hidden bg-[#F9FAFB]">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden transition-all duration-300">
                {/* Header */}
                <header className='flex justify-between items-center px-8 py-4 bg-white border-b border-slate-200 sticky top-0 z-40 h-20'>

                    {/* Left Section: Welcome Message */}
                    <div onClick={()=> router.push('/dashboard') } className='bg-[#F9FAFB] flex items-center justify-center text-[16px] border border-[#E5E7EB] text-[#7B7B7B] py-2 px-2.5 rounded-full gap-2 cursor-pointer'>
                        <ChevronLeft size={20} />Go Back
                    </div>

                    {/* Right Section: Actions & Profile */}
                    <div className='flex items-center gap-4 md:gap-6'>
                        {/* Search & Notifications */}
                        <div className='flex items-center gap-1 border-r border-slate-200 pr-2 md:pr-2'>
                            <button className='p-1 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all'>
                                <Search size={20} />
                            </button>
                            <button className='p-1 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all relative'>
                                <BellDot size={20} />
                                <span className='absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white'></span>
                            </button>
                        </div>

                        {/* Profile Section */}
                        <div className='flex items-center gap-2 cursor-pointer group/profile'>
                            <div className='relative'>
                                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-100 border-2 border-white'>
                                    TS
                                </div>
                                <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full'></div>
                            </div>

                            <div className='text-left hidden lg:block'>
                                <h2 className='text-sm font-bold text-[#111827] group-hover/profile:text-blue-600 transition-colors'>
                                    Aditya Kumar
                                </h2>
                                <p className='text-[10px] text-[#6B7280] font-bold tracking-widest'>
                                    Company
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Body Content */}
                <div className='flex-1 overflow-y-auto'>
                    <div className="p-10 overflow-hidden">
                        <div className='flex justify-between'>
                            <div className='w-4xl'>
                                <h1 className='text-[36px] text-[#111827] font-bold h-20'>Community Education & Digital Literacy Program</h1>
                                <div className='mt-5 flex gap-3'>
                                    <div className='text-[#8200DB] text-sm bg-[#F3E8FF] flex items-center justify-center py-1.5 px-3 gap-2 rounded-full'><Tag size={16} />Education</div>
                                    <div className='text-[#1447E6] text-sm bg-[#DBEAFE] flex items-center justify-center py-1.5 px-3 gap-2 rounded-full'><MapPin size={16} />Mumbai, Maharashtra</div>
                                </div>
                                <p className='w-170 mt-6 text-[#6B7280] text-[18px]'>
                                    A comprehensive initiative to bridge the digital divide by providing education and skill development opportunities to underserved communities. This program aims to empower individuals with digital literacy skills essential for modern employment.
                                </p>
                            </div>
                            <div className='bg-white border border-[#E5E7EB] w-84 rounded-[14px]  p-6 space-y-4'>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                    <span className="text-[#6B7280] text-sm">Budget</span>
                                    <div className="flex items-center gap-1 text-[18px] text-xl font-bold text-slate-900">
                                        <IndianRupee size={18} />
                                        <span>50,00,000</span>
                                    </div>
                                </div>

                                {/* Metric Item: Duration */}
                                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                    <span className="text-[#6B7280] text-sm">Duration</span>
                                    <div className="flex items-center gap-2 text-[18px] text-slate-900 font-bold">
                                        <span>11 Months</span>
                                    </div>
                                </div>

                                {/* Metric Item: Deadline */}
                                <div className="flex justify-between items-center pb-2">
                                    <span className="text-[#6B7280] text-sm">Deadline</span>
                                    <div className="flex items-center gap-2 text-[18px] text-slate-900 font-bold">
                                        <span>30 May 2026</span>
                                    </div>
                                </div>

                                {/* Primary Action Button */}
                                <button
                                onClick={()=> router.push('/dashboard/project/apply')}
                                className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-[16px] transition-all shadow-lg shadow-blue-100 active:scale-[0.98]">
                                    Apply for this Project
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className='rounded-[14px] p-8 border border-[#E5E7EB] mt-8 space-y-5'>
                            <h1 className='text-[#111827] text-[24px] font-bold'>Project Overview</h1>
                            <div className='text-[16px] space-y-2 text-[#6B7280] leading-6.5' >
                                <p >
                                    This Community Education & Digital Literacy Program is designed to address the growing need for digital skills in underserved urban and semi-urban communities. With technology becoming integral to education, employment, and everyday life, this initiative will provide comprehensive training to help participants navigate the digital world confidently.
                                </p>
                                <p>
                                    The program will establish learning centers equipped with modern computer labs, internet connectivity, and trained instructors. Participants will receive hands-on training in basic computer operations, internet usage, digital communication tools, and essential software applications. Special focus will be given to employability skills such as resume building, online job search, and digital entrepreneurship.
                                </p>
                                <p>
                                    By partnering with local educational institutions and community organizations, we aim to reach over 2,000 beneficiaries in the first year, with a particular emphasis on women, youth, and economically disadvantaged groups. The program will run for 11 months with both weekday and weekend batches to ensure maximum participation.
                                </p>
                            </div>
                            <h1>Key Objectives</h1>
                            <p className='flex gap-2 items-center text-[16px] text-[#6B7280]'><CircleCheckBig className='text-[#00A63E]' size={16} />Improve digital literacy among 2,000+ community members</p>
                            <p className='flex gap-2 items-center text-[16px] text-[#6B7280]'><CircleCheckBig className='text-[#00A63E]' size={16} />Enable employment readiness through skill development training</p>
                            <p className='flex gap-2 items-center text-[16px] text-[#6B7280]'><CircleCheckBig className='text-[#00A63E]' size={16} />Promote inclusive education and bridge the digital divide</p>
                            <p className='flex gap-2 items-center text-[16px] text-[#6B7280]'><CircleCheckBig className='text-[#00A63E]' size={16} />Establish sustainable community learning centers for long-term impact</p>
                        </div>

                        {/* Project Details */}
                        <div className='p-8 border border-[#E5E7EB] rounded-[14px] mt-8 space-y-5'>
                            <h1 className='text-[24px] text-[#111827] font-bold'>Project Details</h1>
                            <div className='grid grid-cols-2 space-y-4'>
                                <div className='space-y-1'>
                                    <p className='text-sm text-[#6B7280]'>Category</p>
                                    <p className='text-[16px] text-[#111827] font-medium'>Education & Skill Development</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-sm text-[#6B7280]'>Location</p>
                                    <p className='text-[16px] text-[#111827] font-medium'>Mumbai, Maharashtra</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-sm text-[#6B7280]'>Start Date</p>
                                    <p className='text-[16px] text-[#111827] font-medium'>01 May 2026</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-sm text-[#6B7280]'>End Date</p>
                                    <p className='text-[16px] text-[#111827] font-medium'>31 March 2027</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-sm text-[#6B7280]'>Budget</p>
                                    <p className='text-[16px] text-[#111827] font-medium flex items-center gap-1'><IndianRupee size={14} /> 50,00,000</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-sm text-[#6B7280]'>Application Deadline</p>
                                    <p className='text-[16px] text-[#111827] font-medium'>30 May 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Eligibility Criteria */}
                        <div className='p-8 border border-[#E5E7EB] rounded-[14px] mt-8 space-y-5'>
                            <h1 className='text-[24px] text-[#111827] font-bold'>Eligibility Criteria</h1>
                            <div className='space-y-4'>
                                <div className='flex gap-4 '>
                                    <CheckCircle size={32} className='p-2 text-[#1D4ED8] bg-[#DBEAFE] rounded-full' />
                                    <div className='items-center space-y-1'>
                                        <h1 className='text-[16px] text-[#111827] '>Minimum 3 years of CSR experience</h1>
                                        <p className='text-sm text-[#6B7280]'>Your organization must have demonstrated CSR implementation experience</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 '>
                                    <CheckCircle size={32} className='p-2 text-[#1D4ED8] bg-[#DBEAFE] rounded-full' />
                                    <div className='sitems-center space-y-1'>
                                        <h1 className='text-[16px] text-[#111827] '>Annual CSR budget of ₹10,00,000 or more</h1>
                                        <p className='text-sm text-[#6B7280]'>Minimum financial capacity to execute CSR projects</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 '>
                                    <CheckCircle size={32} className='p-2 text-[#1D4ED8] bg-[#DBEAFE] rounded-full' />
                                    <div className=' items-center space-y-1'>
                                        <h1 className='text-[16px] text-[#111827] '>Registered under Companies Act, 2013</h1>
                                        <p className='text-sm text-[#6B7280]'>Valid company registration and compliance certificates required</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 '>
                                    <CheckCircle size={32} className='p-2 text-[#1D4ED8] bg-[#DBEAFE] rounded-full' />
                                    <div className=' items-center space-y-1'>
                                        <h1 className='text-[16px] text-[#111827] '>Valid 80G and 12A certifications</h1>
                                        <p className='text-sm text-[#6B7280]'>Tax exemption certificates for CSR activities</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Documents */}
                        <div className='p-8 border border-[#E5E7EB] rounded-[14px] mt-8 space-y-5'>
                            <h1 className='text-[24px] text-[#111827] font-bold'>Documents Required for Application</h1>
                            <div className='flex items-center gap-4'>
                                <FileText className='text-[#1D4ED8]' size={18} />
                                <p className='text-[16px] text-[#111827] font-normal'>Detailed Project Proposal</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FileText className='text-[#1D4ED8]' size={18} />
                                <p className='text-[16px] text-[#111827] font-normal'>Company CSR Policy</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FileText className='text-[#1D4ED8]' size={18} />
                                <p className='text-[16px] text-[#111827] font-normal'>Audited Financial Statements (Last 2 Years)</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FileText className='text-[#1D4ED8]' size={18} />
                                <p className='text-[16px] text-[#111827] font-normal'>Company Registration Certificate</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FileText className='text-[#1D4ED8]' size={18} />
                                <p className='text-[16px] text-[#111827] font-normal'>80G and 12A Certificates</p>
                            </div>
                            <div className="mt-8 p-4 bg-[#F0F7FF] border border-[#BEDBFF] rounded-xl flex gap-1">
                                <span className="text-[#1D4ED8] font-bold text-[14px] whitespace-nowrap">Note:</span>
                                <p className="text-[#1D4ED8] text-[14px] leading-relaxed">
                                    These documents must be submitted during the application process. Ensure all documents are in PDF format and not larger than 5MB each.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 mt-10 border-t border-[#D8DADD] shadow-sm'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='text-[18px] text-[#111827] font-semibold'>Ready to make an impact?</h1>
                                <p className='text-[#6B7280] text-sm'>Apply before 30 May 2026</p>
                            </div>
                            <button onClick={() => router.push('/dashboard/project/apply')} className='text-white bg-[#1D4ED8] py-2.5 px-7 text-[16px] font-semibold rounded-[10px]'>Apply Now</button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
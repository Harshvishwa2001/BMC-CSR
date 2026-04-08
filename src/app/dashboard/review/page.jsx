'use client'
import React, { useState } from 'react'; // Added useState
import AdminHeader from '@/components/AdminHeader';
import Sidebar from '@/components/Sidebar';
import { ArrowRight, Calendar, Check, CircleAlert, FileText, IndianRupee, Clock, PartyPopper } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
    // State to toggle between "Update Required" and "Shortlisted"
    const [isShortlisted, setIsShortlisted] = useState(false);

    return (
        <div className="h-screen overflow-hidden bg-[#f5f7fa]">
            <Sidebar>

                <main className="flex-1 flex flex-col h-full transition-all duration-300">
                    <AdminHeader />

                    <div className="flex-1 overflow-y-auto py-8">
                        {/* Header Card */}
                        <div className='flex items-center justify-center'>
                            <div className="flex w-full max-w-215 bg-white border border-slate-200 p-6 justify-between items-start rounded-[14px]">
                                <div className='space-y-1'>
                                    <h1 className='text-[24px] font-bold text-[#111827]'>Community Education & Digital Literacy Program</h1>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <p className='text-sm text-[#6B7280]'>Application ID: <span className='font-bold text-[#111827]'>APP-2026-A8K9M3X7</span></p>
                                        <p className='text-sm text-[#6B7280]'>Submitted: <span className='font-bold text-[#111827]'>28 Mar 2026 </span></p>
                                    </div>
                                </div>
                                <div>
                                    <p className={`flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-2xl ${isShortlisted ? 'text-[#00A63E] bg-[#DCFCE7]' : 'text-[#A65F00] bg-[#FEF9C2]'}`}>
                                        {isShortlisted ? 'Shortlisted' : 'Under Review'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Status Alert Box */}
                        <div className='flex items-center justify-center mt-8'>
                            {!isShortlisted ? (
                                // UPDATE REQUIRED DESIGN
                                <div className="flex w-full max-w-215 bg-[#FFFBEB] border border-[#FEE685] p-5 rounded-[14px]">
                                    <CircleAlert className='bg-[#FEF3C6] p-2 text-[#E17100] rounded-4xl w-12' size={36} />
                                    <div className='space-y-2 px-4'>
                                        <h1 className='text-[18px] font-bold text-[#111827]'>Update Required</h1>
                                        <p className='text-[#6B7280] text-sm'>The project team has requested additional budget clarification. Please review the corrigendum and resubmit your application with updated information by <span className='font-bold'>10 Apr 2026</span>.</p>
                                        <button
                                            onClick={() => setIsShortlisted(true)}
                                            className='mt-4 px-4 py-2 bg-[#1D4ED8] text-white text-sm rounded-xl hover:bg-blue-700 transition-colors cursor-pointer'
                                        >
                                            Review & Re-submit
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // SHORTLISTED DESIGN (matches image_b520a9.png)
                                <div className="w-full max-w-215 bg-[#EFF6FF] border border-[#DBEAFE] p-6 rounded-[14px] space-y-3">
                                    <h1 className="text-[20px] font-bold text-[#111827] flex items-center gap-2">
                                        You've been shortlisted! <PartyPopper size={24} className="text-orange-400" />
                                    </h1>
                                    <p className="text-[#6B7280] text-[16px] leading-relaxed">
                                        Congratulations! Your application has been shortlisted for the next round. The project administrators are currently reviewing all shortlisted applications. You can expect to hear from us within 5-7 business days.
                                    </p>
                                    <div className="flex items-center gap-2 text-[#6B7280] text-sm pt-2">
                                        <Calendar size={18} />
                                        <span>Expected decision by: <span className="font-bold text-[#111827]">15 Apr 2026</span></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='flex items-center justify-center mt-6 '>
                            <ProgressStepper activeStep={isShortlisted ? 2 : 1} />
                        </div>

                        {/* Application Details section remains exactly the same */}
                        <div className='flex items-center justify-center mt-8'>
                            <div className='w-215 bg-white  border border-slate-50 p-6 rounded-[14px] space-y-6'>
                                <h1 className='text-[#111827] text-[20px] text-start font-bold'>Application Details</h1>
                                <div className='flex gap-4'>
                                    <FileText className='text-[#1D4ED8]' size={22} />
                                    <div>
                                        <p className='text-sm text-[#6B7280]'>Proposal Title</p>
                                        <p className='text-[16px] text-[#111827] font-medium'>Digital Literacy Training for Underserved Communities</p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <IndianRupee className='text-[#1D4ED8]' size={22} />
                                    <div>
                                        <p className='text-sm text-[#6B7280]'>Budget Requested</p>
                                        <p className='text-[16px] text-[#111827] font-medium'>₹50,00,000</p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <FileText className='text-[#1D4ED8]' size={22} />
                                    <div className='space-y-1'>
                                        <p className='text-sm text-[#6B7280]'>Documents Submitted</p>
                                        <p className='text-[16px] text-[#111827]'>• Project_Proposal_Digital_Literacy.pdf</p>
                                        <p className='text-[16px] text-[#111827]'>• ABC_Foundation_CSR_Policy.pdf</p>
                                        <p className='text-[16px] text-[#111827]'>• Financial_Statements_2023-24.pdf</p>
                                    </div>
                                </div>
                                <div className='h-12 border-t border-[#E5E7EB]'>
                                    <p className='flex items-center text-end mt-6 text-[#1D4ED8] font-medium gap-2'>View Full Application <ArrowRight size={18} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Sidebar>
        </div>
    )
}

// Updated Stepper to handle dynamic status
export const ProgressStepper = ({ activeStep }) => {
    const steps = [
        { label: "Submitted", date: "28 Mar 2026, 2:30 PM", status: "completed" },
        { label: "Under Review", date: "30 Mar 2026, 10:15 AM", status: activeStep >= 1 ? (activeStep === 1 ? "active" : "completed") : "pending" },
        { label: "Shortlisted", date: activeStep >= 2 ? "06 Apr 2026, 6:30 PM" : "", status: activeStep >= 2 ? (activeStep === 2 ? "active" : "completed") : "pending" },
        { label: "Final Selection", date: "", status: "pending" },
    ];

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 w-full max-w-215">
            <h2 className="text-xl font-bold text-gray-900 mb-10">Application Progress</h2>
            <div className="relative flex justify-between">
                <div className="absolute top-5 left-20 w-155 h-0.5 bg-[#E5E7EB] z-0" />
                {steps.map((step, index) => (
                    <div key={index} className="relative z-10 flex flex-col items-center flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm
                            ${step.status === 'completed' ? 'bg-[#DCFCE7] text-[#00A63E]' : // Green for finished
                                step.status === 'active' ? 'bg-[#C2A01E] text-white' : 'bg-gray-100 text-gray-400'}`}>
                            {step.status === 'completed' ? <Check size={18} /> :
                                step.status === 'active' ? <Check size={18} /> : <Clock size={18} />}
                        </div>
                        <div className="mt-4 text-center">
                            <p className={`font-semibold text-[16px] ${step.status === 'active' ? 'text-gray-900' : 'text-gray-500'}`}>
                                {step.label}
                            </p>
                            {step.date && <p className="text-[12px] text-gray-400 mt-1">{step.date}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
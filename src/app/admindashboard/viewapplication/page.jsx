'use client'
import AdminHeadback from '@/components/AdminHeadback'
import AdminSidebar from '@/components/AdminSidebar'
import { Building2, Calendar, Check, Download, Eye, FileText, IndianRupee } from 'lucide-react'
import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('Proposal');
    const tabs = ['Proposal', 'Budget', 'Documents'];

    return (
        <>
            <AdminSidebar>
                <div className="flex h-screen bg-[#f5f7fa] overflow-hidden">

                    {/* Main Content Area */}
                    <main className="flex-1 flex flex-col overflow-hidden relative">
                        {/* Your existing AdminHeadback/Header component */}
                        <AdminHeadback />

                        <div className="flex flex-col overflow-y-auto">
                            {/* Header Info Section */}
                            <div className="py-4 px-8 space-y-3">
                                <div className='flex items-center justify-between'>
                                    <p className='text-[24px] font-bold'>Community Education & Digital Literacy Program</p>
                                    <p className='w-32 text-sm text-[#A65F00] bg-[#FEF9C2] text-center py-2 rounded-full'>Under Review</p>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className='flex items-center text-sm text-[#6B7280] gap-2'> <Building2 size={20} /><span>ABC Foundation</span></div>
                                    <div className='flex items-center text-sm text-[#6B7280] gap-2'> <FileText size={20} /><span>APP-2026-A8K9M3X7</span></div>
                                    <div className='flex items-center text-sm text-[#6B7280] gap-2'> <Calendar size={20} /><span>28 Mar 2026</span></div>
                                    <div className='flex items-center text-sm text-[#6B7280] gap-2'> <IndianRupee size={20} /><span>₹50,00,000</span></div>
                                </div>
                            </div>

                            {/* Main Content Split: Proposal & Evaluation */}
                            <div className='flex gap-6 p-6 items-start'>

                                {/* Tabbed Content Section */}
                                <div className='border border-[#E5E7EB] rounded-[14px] flex-1 w-full lg:max-w-full min-h-screen bg-white'>
                                    <div className='flex items-center px-6 border-b border-gray-200 gap-8'>
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`py-4 text-sm font-medium transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                                                    }`}
                                            >
                                                {tab}
                                                {activeTab === tab && (
                                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className='p-6 space-y-6'>
                                        {activeTab === 'Proposal' && (
                                            <div className='space-y-3 animate-in fade-in duration-300'>
                                                <h1 className='text-[18px] text-[#111827] font-semibold'>Proposal Title</h1>
                                                <p className='text-sm text-[#6B7280] leading-relaxed'>Digital Literacy Training for Underserved Communities</p>

                                                <h1 className='text-[18px] text-[#111827] font-semibold'>Project Approach</h1>
                                                <p className='text-sm text-[#6B7280] leading-relaxed'>Our organization will implement this project through a phased approach, starting with establishing community learning centers in key locations across Mumbai. We will partner with local schools and community halls to set up computer labs with internet connectivity. Our trained facilitators will conduct interactive training sessions in batches, ensuring personalized attention to each participant. The curriculum will be designed to cater to different age groups and skill levels.</p>

                                                <h1 className='text-[18px] text-[#111827] font-semibold'>Implementation Plan</h1>
                                                <p className='text-sm text-[#6B7280] leading-relaxed'>Phase 1 (Months 1-2): Setup of learning centers, procurement of equipment, and trainer recruitment. Phase 2 (Months 3-8): Conduct training programs in multiple batches, covering basic computer skills, internet usage, and digital communication. Phase 3 (Months 9-11): Advanced modules on employability skills, online job search, and digital entrepreneurship. Conduct assessments and provide certificates.</p>

                                                <h1 className='text-[18px] text-[#111827] font-semibold'>Expected Outcomes</h1>
                                                <p className='text-sm text-[#6B7280] leading-relaxed'>By the end of this 11-month program, we expect to train over 2,000 individuals from underserved communities. At least 60% of participants will achieve basic digital literacy certification. We aim to help 30% of trained youth secure employment or start small digital businesses. The project will establish 5 permanent community learning centers that can continue serving the community beyond the project timeline.</p>
                                            </div>
                                        )}

                                        {activeTab === 'Budget' && (
                                            <div className='space-y-4'>
                                                <div className='space-y-2'>
                                                    <h1 className='text-[18px] text-[#111827] font-semibold'>Total Budget Requested</h1>
                                                    <p className='text-[30px] text-[#111827] font-bold'>₹50,00,000</p>
                                                </div>
                                                <div>
                                                    <h1 className='text-[18px] text-[#111827] font-semibold px-2'>Budget Breakdown</h1>
                                                    <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden mt-2">
                                                        <table className="w-full text-left border-collapse">
                                                            <thead>
                                                                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                                                                    <th className="px-6 py-4 text-[12px] font-medium text-[#6B7280] uppercase tracking-wider">Category</th>
                                                                    <th className="px-6 py-4 text-[12px] font-medium text-[#6B7280] uppercase tracking-wider text-right">Amount (INR)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-[#E5E7EB]">
                                                                {[
                                                                    { cat: "Training Cost", amt: "₹15,00,000" },
                                                                    { cat: "Infrastructure & Equipment", amt: "₹20,00,000" },
                                                                    { cat: "Operational Expenses", amt: "₹10,00,000" },
                                                                    { cat: "Monitoring & Evaluation", amt: "₹5,00,000" },
                                                                ].map((item, idx) => (
                                                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                                        <td className="px-6 py-3 text-sm text-[#111827]">{item.cat}</td>
                                                                        <td className="px-6 py-4 text-sm text-[#111827] font-medium text-right">{item.amt}</td>
                                                                    </tr>
                                                                ))}
                                                                <tr className="bg-[#F9FAFB]">
                                                                    <td className="px-6 py-5 text-sm text-[#111827] font-bold">Total</td>
                                                                    <td className="px-6 py-5 text-sm text-[#111827] font-semibold text-right">₹50,00,000</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'Documents' && (
                                            <div className='space-y-3'>
                                                <div>
                                                    <h1 className='text-[18px] text-[#111827] font-semibold'>Submitted Documents</h1>
                                                </div>
                                                {/* Document cards repeated as in your original code */}
                                                {['Project_Proposal_Digital_Literacy.pdf', 'ABC_Foundation_CSR_Policy.pdf', 'Financial_Statements_2023-24.pdf', 'Company_Registration_Certificate.pdf'].map((doc, idx) => (
                                                    <div key={idx} className='p-4 border flex justify-between gap-4 rounded-[10px] bg-white'>
                                                        <div className='flex gap-4'>
                                                            <FileText size={36} className='text-[#1D4ED8] bg-[#DBEAFE] p-2 rounded-[10px]' />
                                                            <div>
                                                                <p className='text-sm text-[#111827] font-medium'>{doc}</p>
                                                                <p className='text-[12px] text-[#6B7280]'>2.4 MB • Uploaded on 28 Mar 2026</p>
                                                            </div>
                                                        </div>
                                                        <div className='text-[#6B7280] flex items-center justify-end gap-6'>
                                                            <Eye size={20} className="cursor-pointer hover:text-blue-600" />
                                                            <Download size={20} className="cursor-pointer hover:text-blue-600" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Evaluation Sidebar Section - Sticky maintained */}
                                <div className='border border-[#E5E7EB] rounded-[14px] p-6 w-full lg:w-[400px] space-y-4 bg-white sticky top-0'>
                                    <h1 className='text-[20px] text-[#111827] font-semibold'>Evaluation</h1>
                                    <div className='space-y-3'>
                                        <div>
                                            <p className='text-sm text-[#111827] font-medium mb-1'>Technical Score (out of 100)</p>
                                            <input type="number" className="w-full text-sm px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter Score" />
                                        </div>
                                        <div>
                                            <p className='text-sm text-[#111827] font-medium mb-1'>Impact Score (out of 100)</p>
                                            <input type="number" className="w-full text-sm px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter Score" />
                                        </div>
                                        <div>
                                            <p className='text-sm text-[#111827] font-medium mb-1'>Final Weighted Score</p>
                                            <input type="text" className="w-full text-sm px-4 py-2 bg-gray-100 border rounded-md" disabled placeholder="59.0/100" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#111827] font-medium mb-1">Remarks</p>
                                            <textarea rows={6} className="w-full text-sm px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none resize-none" placeholder="Add reviewer remarks..." />
                                        </div>

                                        <div className='pt-2 space-y-2'>
                                            <button className='flex items-center justify-center text-white rounded-lg w-full py-2.5 text-sm font-semibold bg-[#00A63E] gap-2 hover:bg-green-700 transition-colors'>
                                                <Check size={18} />Approve Application
                                            </button>
                                            <button className='w-full py-2.5 rounded-lg text-sm font-semibold bg-white text-[#111827] border hover:bg-gray-50 transition-colors'>
                                                Request Clarification
                                            </button>
                                            <button className='w-full py-2.5 rounded-lg text-sm font-semibold bg-white border border-red-100 text-[#E7000B] hover:bg-red-50 transition-colors'>
                                                Reject Application
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </AdminSidebar>
        </>
    )
}
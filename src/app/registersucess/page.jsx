'use client'
import Header from '@/components/Header'
import { CircleCheckBig, Download, HomeIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#f5f7fa]">
            <Header />

            <div className="flex items-center justify-center py-4 px-12">
                {/* Main Success Card */}
                <div className="max-w-150 w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-10 flex flex-col items-center text-center">

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
                            <Download size={16} />Download Confirmation
                        </button>
                        <button onClick={()=> router.push('/')} className="w-full text-[14px] bg-[#1D4ED8] hover:bg-blue-700 text-white py-3 rounded-xl  flex items-center justify-center gap-2">
                            <HomeIcon size={16} />Back to Login
                        </button>
                    </div>

                    <div className='border-t border-[#E5E7EB] w-120'>
                        <p className='mt-6 text-[#6B7280] text-sm'>Need assistance? <span className='text-[#1D4ED8]'>Contact Support</span></p>
                    </div>
                </div>
            </div>
            <div className='py-6 flex items-center justify-center text-[#6B7280] text-sm'>
                <p>A confirmation email has been sent to your registered email address</p>
            </div>
        </div>
    )
}
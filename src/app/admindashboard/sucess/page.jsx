'use client'
import Sidebar from '@/components/Sidebar';
import { Eye, LayoutDashboard, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();

    return (
        <>
            <Sidebar>
                <div className='fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm transition-opacity p-10 flex items-center justify-center'>
                    <div className="flex flex-col items-center justify-center py-12 text-center bg-white w-230 rounded-2xl">
                        {/* Success Icon with Confetti Effect */}
                        <div className="relative mb-6">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            {/* Confetti decoration could be added here using absolute positioned elements or GSAP */}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Project Published Successfully!
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Your CSR project has been published and is visible to the companies.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 border border-slate-200 rounded-2xl p-4 px-30">
                            <button onClick={() => router.push('/admindashboard')} className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                                <LayoutDashboard size={18} />
                                Go to Dashboard
                            </button>

                            <button className="flex items-center text-sm gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors cursor-pointer">
                                <Eye size={18} />
                                View Project
                            </button>

                            <button className="flex items-center gap-2 text-blue-600 font-medium px-4 py-2 hover:underline cursor-pointer">
                                <Plus size={20} />
                                Create Another Project
                            </button>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

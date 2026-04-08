import DashboardHeader from '@/components/DashboardHeader'
import React from 'react'

export default function ProjectsView() {
    return (
        <>
            {/* Header stays at the top */}
            <div className="h-full bg-[#f5f7fa] transition-all duration-300">
            < DashboardHeader />

                {/* Content area that scrolls independently */}
                <div className="overflow-y-auto p-6 lg:p-10">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[400px]">
                        <h1 className="text-2xl font-bold text-[#111827] mb-4">All CSR Projects</h1>
                        <p className="text-gray-500">
                            Manage and track all corporate social responsibility projects here.
                        </p>

                        {/* Your Project Table or List goes here */}
                        <div className="mt-10 border-2 border-dashed border-gray-200 rounded-2xl h-64 flex items-center justify-center text-gray-400">
                            Project Data Grid Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
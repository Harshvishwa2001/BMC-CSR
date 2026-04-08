import DashboardHeader from '@/components/DashboardHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function AgreementsView() {
    return (
        <>
            <Sidebar>
                <div className="flex h-screen overflow-hidden bg-[#f5f7fa]">
                    <main className="flex-1 flex flex-col h-full transition-all duration-300">
                        <DashboardHeader />

                        <div className="flex-1 overflow-y-auto p-10 space-y-10">
                            <div className="p-8">Agreements Content</div>
                        </div>
                    </main>
                </div>
            </Sidebar>
        </>
    )
}

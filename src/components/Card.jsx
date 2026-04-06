import React from 'react'
import { MapPin, IndianRupee, Calendar, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation';

export default function Card({ tags = [], name, location, money, date }) {
    const router = useRouter();

    const getTagStyle = (tag) => {
        const t = tag.toLowerCase();
        if (t.includes('new')) return 'bg-[#DBEAFE] text-[#1447E6] border-blue-100';
        if (t.includes('closing')) return 'bg-[#FFE2E2] text-[#C10007] border-red-100';
        if (t.includes('education')) return 'bg-[#F3E8FF] text-[#8200DB] border-purple-100';
        if (t.includes('healthcare')) return 'bg-[#DCFCE7] text-[#008236] border-green-100';
        if (t.includes('women empowerment')) return 'bg-[#FCE7F3] text-[#C6005C] border-green-100';
        return 'bg-gray-50 text-gray-600 border-gray-100'; // Default
    };

    return (
        <div className='group border space-y-4 border-[#E5E7EB] bg-white p-5 rounded-2xl transition-all duration-300'>
            {/* Top Section: Tag & Action */}
            <div className='flex justify-start items-start mb-4'>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-[12px] font-medium border ${getTagStyle(tag)}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Middle Section: Name */}
            <div className='mb-6'>
                <h3 className='text-lg font-bold text-[#111827] leading-tight group-hover:text-blue-600 transition-colors line-clamp-2'>
                    {name || 'Project Name Placeholder'}
                </h3>
            </div>

            {/* Bottom Section: Meta Data */}
            <div className='space-y-2'>
                <div className='flex items-center gap-2 text-[#6B7280]'>
                    <MapPin size={16} className='text-[#6B7280]' />
                    <span className='text-sm'>{location || 'Location'}</span>
                </div>
                <div className='flex items-center gap-1 text-[#6B7280]'>
                    <IndianRupee size={14} className='text-[#6B7280]' />
                    <span className='text-sm'>₹{money || '0.00'}</span>
                </div>

                <div className='flex items-center gap-1 text-[#6B7280]'>
                    <Calendar size={14} className='text-[#6B7280]' />
                    <span className='text-sm'>Deadline: {date || 'Deadline'}</span>
                </div>
            </div>

            {/* Hover Apply Button (Optional) */}
            <button onClick={()=> router.push('/dashboard/project')} className='w-full mt-4 py-2 bg-[#1D4ED8] text-white rounded-xl text-[16px] font-medium'>
                View Details
            </button>
        </div>
    )
}
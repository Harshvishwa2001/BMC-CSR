'use client'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(''); // State for login errors
    
    // State for credentials
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleChange = (e) => {
        const { type, value } = e.target;
        setError(''); // Clear error when user types
        setCredentials(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation Logic
        if (credentials.email === 'admin@gmail.com' && credentials.password === 'Admin@123') {
            router.push('/admindashboard');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    }

    return (
        <div className='flex items-center justify-between min-h-screen py-10'>
            {/* Part 1 */}
            <div className="relative left-30">
                <Image src={'/image/logo.png'} alt="logo" width={100} height={100} />
                <div className="space-y-8 w-125 tracking-wide">
                    <h1 className="relative top-4 font-semibold text-[36px] leading-10">Welcome to <br />BMC - CSR Portal</h1>
                    <p className="text-[20px] text-[#313957]">Manage CSR Projects with Transparency & <br /> Efficiency. <br />An end-to-end platform for CSR project lifecycle</p>
                    <div className="space-x-2">
                        <button onClick={() => router.push('/login-admin')} className="py-2 px-6 bg-[#0066FF] rounded-[58px] text-white">Admin</button>
                        <button onClick={() => router.push('/')} className="py-2 px-6 bg-[#EDEDED] rounded-[58px] text-[#8897AD]">Company</button>
                    </div>
                    {/* form login */}
                    <div>
                        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    className="w-full h-12 text-sm px-4 py-2 bg-[#F7FBFF] border border-slate-200 text-slate-600 rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD]"
                                    placeholder="your@company.com" required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-slate-700">Password</label>
                                <input
                                    type="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    className="w-full h-12 text-sm px-4 py-2 bg-[#F7FBFF] border border-slate-200 text-slate-600 rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD]" required
                                    placeholder="Enter your password"
                                />
                                <div className="flex justify-between items-center py-2">
                                    {error && <p className="text-red-500 text-xs">{error}</p>}
                                    <p className="ml-auto text-sm text-[#8897AD] cursor-pointer">Forgot Password?</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 w-full bg-[#F7FBFF] border border-blue-400 text-[#0066FF] hover:bg-blue-700 hover:text-white py-2.5 rounded-xl transition-colors">
                                Sign In <ArrowRight size={16} className="font-bold" />
                            </button>
                        </form>
                        <p className="text-[#0066FF] text-sm mt-6 text-center cursor-pointer">New here? Register your company</p>
                        <p className="text-[#8897AD] text-[12px] mt-4 text-center">Secure login Powered by BMC</p>
                    </div>
                </div>
            </div>
            {/* Part 2 */}
            <div className="relative top-0 overflow-hidden">
                <Image
                    src={'/image/A1.png'}
                    alt="banner"
                    width={1000}
                    height={100}
                    className={`w-2xl h-180 p-10 transition-all duration-1000 ease-out   
                        ${isLoaded
                            ? 'translate-y-10 opacity-100'
                            : 'translate-y-32 opacity-0'
                        }`}
                />
            </div>
        </div>
    )
}
'use client'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleChange = (e) => {
        const { type, name, value } = e.target;
        setError('');
        setCredentials(prev => ({
            ...prev,
            [name || type]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.email === 'admin@gmail.com' && credentials.password === 'Admin@123') {
            router.push('/admindashboard');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    }

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between min-h-screen p-6 md:px-10 lg:px-20 gap-10'>

            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                <div className="w-full max-w-md lg:max-w-xl space-y-4 md:space-y-6 tracking-wide">

                    <div className="flex justify-center lg:justify-start">
                        <Image src={'/image/logo.png'} alt="logo" width={100} height={100} className="w-16 md:w-18" />
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="font-semibold text-2xl md:text-[30px] leading-tight md:leading-10">
                            Welcome to <br />BMC - CSR Portal
                        </h1>
                        <p className="mt-4 text-base md:text-[16px] text-[#313957]">
                            Manage CSR Projects with Transparency & Efficiency. <br className="hidden md:block" />
                            An end-to-end platform for CSR project lifecycle
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-start space-x-2">
                        <button onClick={() => router.push('/login-admin')} className="py-1 px-6 bg-[#0066FF] rounded-[58px] text-white text-sm md:text-base">Admin</button>
                        <button onClick={() => router.push('/')} className="py-1 px-6 bg-[#EDEDED] rounded-[58px] text-[#8897AD] text-sm md:text-base">Company</button>
                    </div>

                    {/* Login Form */}
                    <div className="w-full">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    className="w-full h-10 text-sm px-4 bg-[#F7FBFF] border border-slate-200 text-slate-600 rounded-md outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="your@company.com" required
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    className="w-full h-10 text-sm px-4 bg-[#F7FBFF] border border-slate-200 text-slate-600 rounded-md outline-none focus:ring-1 focus:ring-blue-500 transition-all" required
                                    placeholder="Enter your password"
                                />
                                <div className="flex justify-between items-center mt-1">
                                    {error && <p className="text-red-500 text-xs">{error}</p>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 w-full bg-[#F7FBFF] border border-blue-400 text-[#0066FF] hover:bg-[#0066FF] hover:text-white py-1.5 rounded-md transition-all font-medium">
                                Sign In <ArrowRight size={16} />
                            </button>
                        </form>

                        <div className="mt-4 text-center">
                            <p className="text-[#0066FF] text-sm cursor-pointer hover:underline">New here? Register your company</p>
                            <p className="text-[#8897AD] text-[11px] mt-2 uppercase tracking-wider">Secure login Powered by BMC</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Banner Image (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 justify-center items-center overflow-hidden">
                <Image
                    src={'/image/A1.png'}
                    alt="banner"
                    width={800}
                    height={800}
                    priority
                    className={`max-w-full h-auto object-contain transition-all duration-1000 ease-out 
                        ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                />
            </div>
        </div>
    )
}
'use client'
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';

export default function page() {
    return (
        <Sidebar>
            <div className="h-full bg-[#f8fafc] min-h-screen overflow-y-auto">
                <DashboardHeader />

                <div className="p-8 max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-10">
                        <h1 className="text-[#1e293b] text-[24px] font-semibold tracking-tight mb-2">Get in Touch</h1>
                        <p className="text-slate-500 font-medium">Have questions about CSR projects? Our team is here to help.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Left: Contact Information Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Our Location</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            Runtime Solution, Head Office,<br />
                                            Mumbai, Maharashtra
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Email Us</h3>
                                        <p className="text-sm text-gray-500 font-medium">support@runtimesolution.com</p>
                                        <p className="text-xs text-slate-400 mt-1">Response within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-50 rounded-2xl text-green-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Call Support</h3>
                                        <p className="text-sm text-gray-500 font-medium">+91 22 1234 5678</p>
                                        <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                                            <Clock size={12} /> Mon-Fri, 10am - 6pm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 lg:p-10">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="Harsh Vishwakarma"
                                                className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                            <input 
                                                type="email" 
                                                placeholder="name@company.com" 
                                                className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                        <select className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Project Partnership</option>
                                            <option>Reporting an Issue</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                        <textarea 
                                            rows={5} 
                                            placeholder="Tell us how we can help..."
                                            className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none"
                                        />
                                    </div>

                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group">
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}
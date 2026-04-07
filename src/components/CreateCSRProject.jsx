import {
    ArrowLeft,
    ArrowRight,
    CircleCheckBig,
    File,
    FileText,
    Pen,
    Plus,
    User,
    X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateCSRProject({ isOpen, onClose }) {
    // --- 1. HOOKS (Must stay at the top) ---
    const [step, setStep] = useState(1);
    const router = useRouter();
    const [files, setFiles] = useState({
        csrCert: "",
        panDoc: "",
        csrPolicy: "",
        financial: "",
    });

    // --- 2. LOGIC ---
    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    const handleNext = (e) => {
        if (e) e.preventDefault();
        if (step < 4) setStep(step + 1);
    };

    const handleBack = (e) => {
        if (e) e.preventDefault();
        if (step > 1) setStep(step - 1);
    };

    const steps = [
        { id: 1, label: 'Basic Info', icon: (cls) => <User className={cls} strokeWidth={2} size={20} />, header: 'Basic Info' },
        { id: 2, label: 'Budget & Timeline', icon: (cls) => <FileText className={cls} strokeWidth={2} size={20} />, header: 'Budget & Timeline' },
        { id: 3, label: 'Eligibility', icon: (cls) => <FileText className={cls} strokeWidth={2} size={20} />, header: 'Eligibility' },
        { id: 4, label: 'Review & Submit', icon: (cls) => <CircleCheckBig className={cls} strokeWidth={2} size={20} />, header: 'Final Steps' },
    ];

    const colors = {
        active: 'text-[#C2A01E]',
        inactive: 'text-[#6B7280] font-medium',
        barFilled: 'bg-[#C2A01E]',
        barEmpty: 'bg-slate-100'
    };

    const [docs, setDocs] = useState([
        { id: 1, name: "Project Proposal" },
        { id: 2, name: "CSR Policy" },
        { id: 3, name: "Financial Statements" }
    ]);

    const addDoc = () => {
        const name = prompt("Enter document name:");
        if (name) setDocs([...docs, { id: Date.now(), name }]);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm transition-opacity p-10">
            <div className="min-h-screen  flex items-center justify-center">
                <div className="w-full max-w-220 bg-white rounded-[24px] shadow-2xl relative overflow-hidden">

                    {/* Header/Navigation Area */}
                    <div className="p-2 pb-0">
                        {/* Change this */}
                        <div className="absolute right-2 top-2 z-50">
                            <button
                                type="button" // Ensure it's not trying to submit a form
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClose();
                                }}
                                className="p-2 cursor-pointer"
                            >
                                <X size={26} className='bg-[#EDEDED] text-[#6B7280] p-1 rounded-2xl' />
                            </button>
                        </div>
                        <div className='px-14 py-8 space-y-1'>
                            <h1 className='text-[24px] text-[#0C1421] font-semibold'>Create CSR Project</h1>
                            <p className='text-[18px] text-[#717182]'>Complete your Know Your Customer verification quickly and securely</p>
                        </div>
                    </div>

                    {/* Step Content Area */}
                    <div className="px-8 p-6 rounded-lg mb-10 mx-auto max-w-3xl items-center border">
                        <div className="max-w-3xl mx-auto text-center px-">
                            <h2 className="text-[18px] tracking-wider font-medium text-[#0A0A0A] mb-6">
                                {steps.find(s => s.id === step)?.header || "Registration"}
                            </h2>

                            {/* Enhanced Progress Bar */}
                            <div className="relative w-full mb-10">
                                <div className={`absolute top-0 left-0 w-full h-1.5 ${colors.barEmpty} rounded-full`}>
                                    <div
                                        className={`h-1.5 ${colors.barFilled} rounded-full transition-all duration-700 ease-in-out`}
                                        style={{ width: `${(step / steps.length) * 100}%` }}
                                    />
                                </div>

                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    {steps.map((s) => {
                                        const isActive = s.id === step;
                                        return (
                                            <button key={s.id} onClick={() => setStep(s.id)} className={`flex flex-col items-center gap-2 group outline-none mt-6`}>
                                                <div className={`transition-colors ${isActive ? colors.active : "text-[#6B7280] group-hover:text-slate-400"}`}>
                                                    {s.icon("")}
                                                </div>
                                                <span className={`text-sm md:text-sm transition-all ${isActive ? "text-slate-900 font-medium" : "text-slate-400 "}`}>
                                                    {s.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="px-2 max-w-4xl mx-auto">

                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="text-left space-y-1">
                                        <h1 className="text-2xl font-medium text-slate-900">Tell us about your proposal</h1>
                                        <p className="text-slate-500">Describe how your organization will execute this project</p>
                                    </div>
                                    <form className="space-y-5" onSubmit={handleNext}>
                                        <div className="flex flex-col gap-2 text-left">
                                            <label className="text-[13px] font-medium text-[#111827]">Project Title <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400" placeholder="Enter project title" required />
                                        </div>
                                        <div className="flex flex-col gap-2 text-left">
                                            <label className="text-[13px] font-medium text-[#111827]">Project Description <span className="text-red-500">*</span></label>
                                            <textarea rows={4} className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 focus:ring-4 focus:ring-blue-50/50 transition-all resize-none placeholder:text-slate-400" placeholder="Describe your CSR project in detail" required />
                                        </div>
                                        <div className="flex flex-col gap-2 text-left">
                                            <label className="text-[13px] font-medium text-[#111827]">Category <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400" placeholder="Enter project Category" required />
                                        </div>
                                        <div className="flex flex-col gap-2 text-left">
                                            <label className="text-[13px] font-medium text-[#111827]">Location <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400" placeholder="Enter project location" required />
                                        </div>
                                        <div className="flex justify-end pt-2 gap-2">
                                            <button type="submit" className="flex items-center justify-center gap-2 px-5 py-2 text-sm bg-[#6B7280] text-white font-semibold rounded-lg hover:bg-[#6b7280c5] active:scale-95 transition-all">
                                                Save as draft
                                            </button>
                                            <button type="submit" className="flex items-center justify-center gap-2 px-5 py-2 text-sm bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
                                                Next <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6 border p-8 rounded-2xl">
                                    <h1 className="text-2xl font-semibold text-slate-900 text-left">Budget & Timeline</h1>
                                    <form className="space-y-6" onSubmit={handleNext}>
                                        <div className="flex flex-col gap-2 text-left">
                                            <label className="text-[13px] font-medium text-[#111827]">Budget (INR) *</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">₹</span>
                                                <input type="number" className="w-full text-sm pl-8 pr-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 transition-all" placeholder="Enter amount" required />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-2 text-left">
                                                    <label className="text-[13px] font-bold text-slate-700">Start Date</label>
                                                    <div className="relative">
                                                        <input type="date" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border-none rounded-xl outline-none text-slate-500 appearance-none" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 text-left">
                                                    <label className="text-[13px] font-bold text-slate-700">End Date</label>
                                                    <div className="relative">
                                                        <input type="date" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border-none rounded-xl outline-none text-slate-500 appearance-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center pt-4">
                                            <button type="button" onClick={handleBack} className="flex items-center gap-2 px-4 py-2 text-slate-900 transition-colors text-sm border rounded-lg">
                                                <ArrowLeft size={18} /> Previous
                                            </button>
                                            <div className='flex items-center justify-center gap-4'>
                                                <button type="submit" className="flex items-center justify-center gap-2 px-5 py-2 text-sm bg-[#6B7280] text-white font-semibold rounded-lg hover:bg-[#6b7280c5] active:scale-95 transition-all">
                                                    Save as draft
                                                </button>
                                                <button type="submit" className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-100">
                                                    Next <ArrowRight size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 border p-8 rounded-2xl">
                                    <h1 className="text-2xl font-medium text-slate-900 text-left">Eligibility Criteria</h1>
                                    <div className='grid grid-cols-2 gap-10'>
                                        <div className='space-y-4'>
                                            <p>Selection Criteria</p>
                                            <div className="flex flex-col gap-2 text-left">
                                                <label className="text-[14px] font-medium text-[#111827]">Minimum CSR Experience <span className="text-red-500">*</span></label>
                                                <input type="text" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400" placeholder="Enter the required years of CSR implementation" required />
                                            </div>
                                            <div className="flex flex-col gap-2 text-left">
                                                <label className="text-[14px] font-medium text-[#111827]">Budget Requirements <span className="text-red-500">*</span></label>
                                                <input type="text" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400" placeholder="Adequate financial capacity demonstrated" required />
                                            </div>
                                            <div className="flex flex-col gap-2 text-left">
                                                <label className="text-[14px] font-medium text-[#111827]">Legal Compliance <span className="text-red-500">*</span></label>
                                                <input type="text" className="w-full text-sm px-4 py-3 bg-[#F7FBFF] border border-transparent rounded-lg outline-none focus:bg-white focus:border-slate-400 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400" placeholder="All regulatory approvals in place" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 p-4 text-left">
                                            <p className="text-[15px] font-semibold text-slate-800">Required Documents</p>

                                            <div className="flex flex-col gap-3">
                                                {docs.map((doc) => (
                                                    <label key={doc.id} className="flex items-center gap-3 cursor-pointer group">
                                                        <div className="relative flex items-center justify-center">
                                                            <input
                                                                type="checkbox"
                                                                className="peer appearance-none w-5 h-5 bg-slate-100 rounded-md border-none checked:bg-blue-600 transition-all cursor-pointer"
                                                            />
                                                            {/* Checkmark Icon (Visible only when checked) */}
                                                            <svg
                                                                className="absolute w-3 h-3 text-white transition-opacity opacity-0 peer-checked:opacity-100 pointer-events-none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <polyline points="20 6 9 17 4 12"></polyline>
                                                            </svg>
                                                        </div>
                                                        <span className="text-[14px] text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                                                            {doc.name}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>

                                            {/* Add More Button Styled to match your image */}
                                            <button
                                                onClick={addDoc}
                                                className="flex items-center gap-2 w-fit px-4 py-2 mt-2 bg-[#F0F7FF] border border-blue-500 text-blue-600 rounded-xl text-[14px] font-semibold hover:bg-blue-100 transition-all active:scale-95"
                                            >
                                                Add more <Plus size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-4">
                                        <button type="button" onClick={handleBack} className="flex items-center gap-2 px-4 py-2 text-slate-900 transition-colors text-sm border rounded-lg">
                                            <ArrowLeft size={18} /> Previous
                                        </button>
                                        <div className='flex items-center justify-center gap-4'>
                                            <button type="submit" className="flex items-center justify-center gap-2 px-5 py-2 text-sm bg-[#6B7280] text-white font-semibold rounded-lg hover:bg-[#6b7280c5] active:scale-95 transition-all">
                                                Save as draft
                                            </button>
                                            <button type="submit" className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-100">
                                                Next <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className='w-full space-y-4'>
                                    <h1 className='text-[24px] font-semibold tracking-wide'>Review Your Project</h1>

                                    <div className='border border-[#E5E7EB] rounded-xl px-6 py-4 space-y-4'>
                                        <div className='flex justify-between items-center py-2'>
                                            <h1 className='font-semibold text-[18px] text[#111827]'>Basic Information</h1>
                                            <button onClick={() => setStep(1)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                                        </div>
                                        <div className='space-y-2'>
                                            <h1 className='text-sm text-[#6B7280]'>Project Title</h1>
                                            <p className='text-[16px] text-[#111827] '>Education Infrastructure Development</p>
                                        </div>
                                        <div className='space-y-2'>
                                            <h1 className='text-sm text-[#6B7280]'>Description</h1>
                                            <p className='text-[16px] text-[#111827] '>This initiative aims to improve digital literacy among underprivileged communities by providing access to digital education, training sessions, and basic infrastructure support in urban and semi-urban areas.</p>
                                        </div>
                                        <div className='grid grid-cols-2 space-y-4'>
                                            <div className='space-y-2'>
                                                <h1 className='text-sm text-[#6B7280]'>Category</h1>
                                                <p className='text-[16px] text-[#111827] '>Education</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <h1 className='text-sm text-[#6B7280]'>Location</h1>
                                                <p className='text-[16px] text-[#111827] '>Andheri, Mumbai</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                                        <div className='flex justify-between items-center py-2'>
                                            <h1 className='font-semibold text-[18px] text[#111827]'>Budget & Timeline</h1>
                                            <button onClick={() => setStep(2)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                                        </div>
                                        <div className='space-y-4'>
                                            <div className='space-y-2'>
                                                <h1 className='text-sm text-[#6B7280]'>Budget</h1>
                                                <p className='text-[16px] text-[#111827] '>₹ 40,00,000</p>
                                            </div>
                                            <div className='grid grid-cols-2 space-y-4'>
                                                <div className='space-y-2'>
                                                    <h1 className='text-sm text-[#6B7280]'>Start Date</h1>
                                                    <p className='text-[16px]m text-[#111827] '>15 Apr 2026</p>
                                                </div>
                                                <div className='space-y-2'>
                                                    <h1 className='text-sm text-[#6B7280]'>End Date</h1>
                                                    <p className='text-[16px] text-[#111827] '>15 July 2026</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                                        <div className='flex justify-between items-center py-2'>
                                            <h1 className='font-semibold text-[18px] text[#111827]'>Eligibility</h1>
                                            <button onClick={() => setStep(3)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                                        </div>
                                        <div className='space-y-2 mt-2 grid grid-cols-3 gap-4'>
                                            <div className='space-y-2'>
                                                <h1 className='text-sm text-[#6B7280]'>Minimum CSR Experience</h1>
                                                <p className='text-[16px] text-[#111827] '>At least 3 years of CSR project execution</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <h1 className='text-sm text-[#6B7280]'>Financial Capacity</h1>
                                                <p className='text-[16px] text-[#111827] '>Minimum annual CSR budget of ₹10,00,000</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <h1 className='text-sm text-[#6B7280]'>Legal Compliance</h1>
                                                <p className='text-[16px] text-[#111827] '>Registered under Companies Act, 2013</p>
                                            </div>
                                        </div>
                                        <h1 className='text-sm text-[#6B7280]'>Required Documents</h1>
                                        <div className='grid grid-cols-3 mt-2' >
                                            <p className='text-[16px] text-[#111827] '>Project Proposal</p>
                                            <p className='text-[16px] text-[#111827] '>CSR Policy</p>
                                            <p className='text-[16px] text-[#111827] '>Financial Statements</p>
                                        </div>
                                    </div>


                                    <div className="flex justify-between items-center pt-4">
                                        <button type="button" onClick={handleBack} className="flex items-center gap-2 px-4 py-2 text-slate-900 transition-colors text-sm border rounded-lg">
                                            <ArrowLeft size={18} /> Previous
                                        </button>
                                        <div className='flex items-center justify-center gap-4'>
                                            <button type="submit" className="flex items-center justify-center gap-2 px-5 py-2 text-sm bg-[#6B7280] text-white font-semibold rounded-lg hover:bg-[#6b7280c5] active:scale-95 transition-all">
                                                Save as draft
                                            </button>
                                            <button
                                                onClick={() => router.push('/admindashboard/sucess')}
                                                type="submit" className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-100">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
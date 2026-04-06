'use client'
import AdminHeader from '@/components/AdminHeader'
import Sidebar from '@/components/Sidebar'
import { ArrowLeft, ArrowRight, Calendar, Check, CircleCheckBig, File, FileText, MapPin, Pen, Settings, Wallet, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function page() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleNext = (e) => {
        if (e) e.preventDefault();
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const handleBack = (e) => {
        if (e) e.preventDefault();
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const steps = [
        {
            id: 1,
            label: 'Proposal',
            icon: (className) => (
                <Settings className={className} strokeWidth={1.5} size={20} />
            ),
            header: 'Basic Info'
        },
        {
            id: 2,
            label: 'CSR Details',
            icon: (className) => (
                <Wallet className={className} strokeWidth={1.5} size={20} />
            ),
            header: 'CSR Information'
        },
        {
            id: 3,
            label: 'Documents',
            icon: (className) => (
                <FileText className={className} strokeWidth={1.5} size={20} />
            ),
            header: 'Required Documents'
        },
        {
            id: 4,
            label: 'Review & Submit',
            icon: (className) => (
                <CircleCheckBig className={className} strokeWidth={1.5} size={20} />
            ),
            header: 'Final Steps'
        },
    ];

    const colors = {
        active: 'text-[#C2A01E]',
        inactive: 'text-[#6B7280] font-bold ',
        barFilled: 'bg-[#C2A01E]',
        barEmpty: 'bg-[#EDEDED]',
        background: 'bg-[#F7F9FC]'
    };

    const categories = [
        "Education", "Healthcare", "Environment",
        "Women Empowerment", "Rural Development", "Skill Development"
    ];

    const [selectedItems, setSelectedItems] = useState(["Education", "Healthcare", "Skill Development"]);

    const toggleTag = (e, item) => {
        e.preventDefault();
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((i) => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const [files, setFiles] = useState({
        csrCert: "",
        panDoc: "",
        csrPolicy: "",
        financial: "",
    });

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

    const handleFileUpload = (e, key) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                alert("File is too large! Maximum size is 5MB.");
                return;
            }
            setFiles({ ...files, [key]: file.name });
        }
    };

    const UploadRow = ({ label, description, fileKey, required }) => {
        const isUploaded = !!files[fileKey];

        return (
            <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                <div className="flex flex-col gap-0.5">
                    <h4 className="text-[16px] font-semibold text-[#111827]">
                        {label} {required && <span className="text-red-500">*</span>}
                    </h4>
                    <p className="text-[14px] text-[#8897AD] font-normal">
                        {description}
                    </p>
                </div>

                <div className="relative">
                    <input
                        type="file"
                        id={fileKey}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        onChange={(e) => handleFileUpload(e, fileKey)}
                    />

                    <label
                        htmlFor={fileKey}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all border ${isUploaded
                            ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#166534] hover:bg-[#DCFCE7]"
                            : "bg-[#F7FBFF] border-[#E5E7EB] text-[#8897AD] hover:bg-gray-50"
                            }`}
                    >
                        {isUploaded && <Check size={18} className="text-[#22C55E]" />}
                        <File size={18} className={isUploaded ? "text-[#166534]" : "text-[#8897AD]"} />
                        <span className="text-[14px] font-medium truncate max-w-40">
                            {isUploaded ? files[fileKey] : "Upload file"}
                        </span>
                    </label>
                </div>
            </div>
        );
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[#F9FAFB]">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full transition-all duration-300">
                <AdminHeader />
                <div className="flex-1 overflow-y-auto">
                    <div className='flex items-center justify-center mt-8'>
                        <div className="flex max-w-215 bg-[#EFF6FF] border border-[#BEDBFF] p-5 gap-30 rounded-[14px]">
                            <div className='space-y-1'>
                                <p className='text-sm text-[#6B7280]'>Applying for</p>
                                <h1 className='text-[18px] text-[#111827] font-semibold'>Community Education & Digital Literacy Program</h1>
                            </div>
                            <div className='flex gap-4'>
                                <p className='flex items-center gap-2 text-[#6B7280] text-sm'><MapPin size={16} />Mumbai</p>
                                <p className='flex items-center gap-2 text-[#6B7280] text-sm'><Calendar size={16} />Deadline: 30 May 2026</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <main className='justify-center'>
                            <div className={`w-full p-4 rounded-md `}>
                                <div className="max-w-212 mx-auto flex flex-col items-center">

                                    {/* Dynamic Header */}
                                    <h2 className="text-sm font-medium text-[#2A3B4C] transition-all duration-300">
                                        {steps.find(s => s.id === step)?.header || "Registration"}
                                    </h2>

                                    {/* Progress Container */}
                                    <div className="relative w-full flex flex-col items-center mt-4">
                                        <div className={`absolute top-0 left-0 w-full h-1.75 ${colors.barEmpty} rounded-[58px]`}>
                                            <div
                                                className={`h-1.75 ${colors.barFilled} rounded-[58px] transition-all duration-500 ease-out`}
                                                style={{ width: `${(step / steps.length) * 100}%` }}
                                            />
                                        </div>

                                        {/* Icon/Label Grid */}
                                        <div className="w-5xl grid grid-cols-4 gap-4 mt-6">
                                            {steps.map((s) => {
                                                const isActive = s.id === step;
                                                return (
                                                    <button
                                                        key={s.id}
                                                        type="button"
                                                        onClick={() => setStep(s.id)}
                                                        className={`flex flex-col items-center justify-center 
                        transition-all duration-300 
                        ${isActive ? colors.active : colors.inactive} `}
                                                    >
                                                        {s.icon(`w-5 h-5 transition-colors ${isActive ? colors.active : colors.inactive}`)}
                                                        <span className="text-[10px] md:text-[12px] font-medium">
                                                            {s.label}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Company Info */}
                                    {step === 1 && (
                                        <div>
                                            <div className='bg-white p-8 w-212 relative top-10 space-y-4 rounded-2xl'>
                                                <h1 className='text-[24px] font-semibold tracking-wide'>Tell us about your proposal</h1>
                                                <p className='text-[16px] text-[#6B7280] '>Describe how your organization will execute this project</p>
                                                <form className="flex flex-col gap-5 mt-4" onSubmit={handleNext}>
                                                    <div className="flex flex-col gap-1">
                                                        <label className="text-sm font-semibold text-[#111827]">Proposal Title <span className='text-red-600'>*</span></label>
                                                        <input
                                                            type="text"
                                                            className="w-full text-sm px-4 py-2.5 bg-[#F7FBFF]  text-[#6B7280] font-medium  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD]"
                                                            placeholder="Enter proposal title here" required
                                                        />
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <label className="text-sm font-semibold text-[#111827]">Project Approach <span className='text-red-600'>*</span></label>
                                                        <textarea
                                                            rows={6}
                                                            className="w-full text-sm px-4 py-2 bg-[#F7FBFF] text-[#6B7280] font-medium  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD] resize-none"
                                                            placeholder="Describe your approach to implementing this project"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <label className="text-sm font-semibold text-[#111827]">Implementation Plan <span className='text-red-600'>*</span></label>
                                                        <textarea
                                                            rows={6}
                                                            className="w-full text-sm px-4 py-2 bg-[#F7FBFF] text-[#6B7280] font-medium  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD] resize-none"
                                                            placeholder="Outline the timeline and key milestones for project execution"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <label className="text-sm font-semibold text-[#111827]">Expected Outcomes <span className='text-red-600'>*</span></label>
                                                        <textarea
                                                            rows={6}
                                                            className="w-full text-sm px-4 py-2 bg-[#F7FBFF] text-[#6B7280] font-medium  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD] resize-none"
                                                            placeholder="Describe the measurable impact and outcomes of this project"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="flex justify-end w-full">
                                                        <button type="submit" className="flex items-center justify-center relative gap-2 w-25 bg-[#0066FF] border border-blue-400 text-[#ffffff] hover:bg-blue-700 hover:text-white py-2 rounded-xl transition-colors">
                                                            Next <ArrowRight size={18} className="text-[#ffffff] font-bold" />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                    }

                                    {/* CSR Details */}
                                    {step === 2 && (
                                        <div className='bg-white p-8 w-212 relative top-10 space-y-4 rounded-2xl'>
                                            <h1 className='text-[24px] font-semibold tracking-wide'>Project Budget Details</h1>
                                            <p className='text-[16px] text-[#6B7280]  '>Help us understand your CSR experience and interests</p>
                                            <form className="flex flex-col gap-5 mt-4" onSubmit={handleNext}>

                                                <div className="flex flex-col gap-1">
                                                    <label className="text-sm font-semibold text-[#111827]">Total Budget Requested (INR) <span className='text-red-600'>*</span></label>
                                                    <input
                                                        type="number"
                                                        className="w-full text-sm px-4 py-2 bg-[#F7FBFF]  text-[#6B7280] font-medium  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD]"
                                                        placeholder="₹  Enter exp years" required
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label className="text-sm font-semibold text-[#111827]">Budget Breakdown <span className='text-red-600'>*</span></label>
                                                    <p className='text-[16px] text-[#6B7280]'>List the major cost components (e.g., Training Cost, Infrastructure, Operational Expenses)</p>
                                                    <textarea
                                                        rows={6}
                                                        className="w-full text-sm px-4 py-2 bg-[#F7FBFF] text-[#6B7280] font-medium  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD] resize-none"
                                                        placeholder="Example:
                                                                    Training Cost: ₹15,00,000
                                                                    Infrastructure & Equipment: ₹20,00,000
                                                                    Operational Expenses: ₹10,00,000
                                                                    Monitoring & Evaluation: ₹5,00,000"
                                                        required
                                                    />
                                                </div>

                                                <div className="flex justify-between w-full">
                                                    <button type="button" onClick={handleBack} className="flex items-center justify-center text-sm relative gap-2 w-30 bg-[#FFFFFF] border border-slate-400 text-black hover:bg-slate-100 py-2 px-4 rounded-xl transition-colors">
                                                        <ArrowLeft size={16} className="text-black font-bold" /> Previous
                                                    </button>
                                                    <button type="submit" className="flex items-center justify-center text-sm relative gap-2 w-25 bg-[#0066FF] border border-blue-400 text-[#ffffff] hover:bg-blue-700 hover:text-white py-2 rounded-xl transition-colors">
                                                        Next <ArrowRight size={16} className="text-[#ffffff] font-bold" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                    }

                                    {/* Documents */}
                                    {step === 3 && (
                                        <div className='bg-white p-8 w-212 relative top-10 space-y-4 rounded-2xl'>
                                            <h1 className='text-[24px] font-semibold tracking-wide'>Upload Required Documents</h1>
                                            <p className='text-[16px] text-[#6B7280] '>Please upload the following documents to complete your registration</p>
                                            <div className="max-w-4xl mx-auto px-4 bg-white rounded-xl border border-gray-200">
                                                <div className="flex flex-col">
                                                    <UploadRow
                                                        label="Detailed Project Proposal"
                                                        description="A comprehensive document outlining your project plan"
                                                        fileKey="csrCert"
                                                        required
                                                    />
                                                    <UploadRow
                                                        label="Company CSR Policy"
                                                        description="Your organization's CSR policy document"
                                                        fileKey="panDoc"
                                                        required
                                                    />
                                                    <UploadRow
                                                        label="Audited Financial Statements"
                                                        description="Last 2 years of audited financial statements"
                                                        fileKey="csrPolicy"
                                                        required
                                                    />

                                                </div>
                                            </div>
                                            <div className="mt-8 p-4 bg-[#F0F7FF] border border-[#E0EFFF] rounded-xl flex gap-1">
                                                <span className="text-[#1D4ED8] font-bold text-[14px] whitespace-nowrap">Note:</span>
                                                <p className="text-[#1D4ED8] text-[14px] leading-relaxed">
                                                    All documents must be in PDF, DOC, or DOCX format. Maximum file size: 5MB per document.
                                                </p>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <button type="button" onClick={handleBack} className="flex items-center justify-center text-sm relative gap-2 w-30 bg-[#FFFFFF] border border-slate-400 text-black hover:bg-slate-100 py-2 px-4 rounded-xl transition-colors">
                                                    <ArrowLeft size={16} className="text-black font-bold" /> Previous
                                                </button>
                                                <button type="button" onClick={() => setStep(4)} className="flex items-center justify-center text-sm relative gap-2 w-25 bg-[#0066FF] border border-blue-400 text-[#ffffff] hover:bg-blue-700 hover:text-white py-2 rounded-xl transition-colors">
                                                    Next <ArrowRight size={16} className="text-[#ffffff] font-bold" />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                    }

                                    {/* Review & Submit */}
                                    {step === 4 && (
                                        <div className='bg-white p-8 w-212 relative top-10 space-y-4 rounded-2xl'>
                                            <h1 className='text-[24px] font-semibold tracking-wide'>Review Your Application</h1>
                                            <p className='text-[16px] text-[#6B7280]  '>Please review all information before submitting your application</p>

                                            <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                                                <div className='flex justify-between items-center py-2'>
                                                    <h1 className='font-semibold text-[18px] text[#111827]'>Proposal Summary</h1>
                                                    <button onClick={() => setStep(1)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                                                </div>
                                                <div className='space-y-4'>
                                                    <div className='space-y-2'>
                                                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Proposal Title</h1>
                                                        <p className='text-sm text-[#111827] '>Digital Literacy Training for Underserved Communities</p>
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Project Approach</h1>
                                                        <p className='text-sm text-[#111827] '>Our organization will implement this project through a phased approach, starting with establishing community learning centers in key locations across Mumbai. We will partner with local schools and community halls to set up computer labs with internet connectivity. Our trained facilitators will conduct interactive training sessions in batches, ensuring personalized attention to each participant. The curriculum will be designed to cater to different age groups and skill levels.</p>
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Implementation Plan</h1>
                                                        <p className='text-sm text-[#111827] '>Phase 1 (Months 1-2): Setup of learning centers, procurement of equipment, and trainer recruitment. Phase 2 (Months 3-8): Conduct training programs in multiple batches, covering basic computer skills, internet usage, and digital communication. Phase 3 (Months 9-11): Advanced modules on employability skills, online job search, and digital entrepreneurship. Conduct assessments and provide certificates.</p>
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Expected Outcomes</h1>
                                                        <p className='text-sm text-[#111827] '>By the end of this 11-month program, we expect to train over 2,000 individuals from underserved communities. At least 60% of participants will achieve basic digital literacy certification. We aim to help 30% of trained youth secure employment or start small digital businesses. The project will establish 5 permanent community learning centers that can continue serving the community beyond the project timeline.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                                                <div className='flex justify-between items-center py-2'>
                                                    <h1 className='font-semibold text-[18px] text[#111827]'>Budget Summary</h1>
                                                    <button onClick={() => setStep(2)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                                                </div>
                                                <div className='space-y-4'>
                                                    <div className='space-y-2'>
                                                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Total Budget Requested</h1>
                                                        <p className='text-sm text-[#111827] '>₹ 50,00,000</p>
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Budget Breakdown</h1>
                                                        <div className='space-y-2'>
                                                            <p className='text-[12px] text-[#111827]'>Training Cost: ₹15,00,000</p>
                                                            <p className='text-[12px] text-[#111827]'>Infrastructure & Equipment: ₹20,00,000</p>
                                                            <p className='text-[12px] text-[#111827]'>Operational Expenses: ₹10,00,000</p>
                                                            <p className='text-[12px] text-[#111827]'>Monitoring & Evaluation: ₹5,00,000</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                                                <div className='flex justify-between items-center py-2'>
                                                    <h1 className='font-semibold text-[18px] text[#111827]'>Uploaded Documents</h1>
                                                    <button onClick={() => setStep(3)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                                                </div>
                                                <div className='space-y-2 mt-2'>
                                                    <p className='text-[#111827] flex items-center gap-2'><File size={12} className='text-[#6B7280]' /> Project_Proposal_Digital_Literacy.pdf</p>
                                                    <p className='text-[#111827] flex items-center gap-2'><File size={12} className='text-[#6B7280]' /> ABC_Foundation_CSR_Policy.pdf</p>
                                                    <p className='text-[#111827] flex items-center gap-2'><File size={12} className='text-[#6B7280]' /> Financial_Statements_2023-24.pdf</p>
                                                </div>
                                            </div>

                                            <div className='bg-[#FEFCE8] border border-[#FFF085] p-4 rounded-[10px]'>
                                                <p className='text-[#894B00] text-sm'><span className='text-[#894B00] font-bold'>Important:</span> Once submitted, you won't be able to edit this application. Please review all details carefully before proceeding.</p>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <button type="button" onClick={handleBack} className="flex items-center justify-center text-sm relative gap-2 w-30 bg-[#FFFFFF] border border-slate-400 text-black hover:bg-slate-100 py-2 px-4 rounded-xl transition-colors">
                                                    <ArrowLeft size={16} className="text-black font-bold" /> Previous
                                                </button>
                                                <button type="button" onClick={() => router.push('/dashboard/project/apply/sucess')} className="flex items-center justify-center text-sm relative gap-2 w-35 bg-[#0066FF] border border-blue-400 text-[#ffffff] hover:bg-blue-700 hover:text-white py-2 rounded-xl transition-colors">
                                                    Submit <ArrowRight size={16} className="text-[#ffffff] font-bold" />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                    }

                                    <div className='py-20'>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </div>
    )
}
'use client'
import Header from '@/components/Header';
import { ArrowLeft, ArrowRight, Check, CircleCheckBig, File, Pen, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
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
      label: 'Company Info',
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      header: 'Basic Info'
    },
    {
      id: 2,
      label: 'CSR Details',
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      header: 'CSR Information'
    },
    {
      id: 3,
      label: 'Documents',
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
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
            required ={required}
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
    <>
      <div className='bg-[#f5f7fa] min-h-screen'>
        <Header />

        <main className='justify-center'>
          <div className={`w-full p-4 rounded-md `}>
            <div className="max-w-4xl mx-auto flex flex-col items-center">

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
                <div className="w-6xl grid grid-cols-4 gap-4 mt-6">
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
                <div className='bg-white p-8 w-175 relative top-10 space-y-4 rounded-2xl'>
                  <h1 className='text-[24px] font-semibold tracking-wide'>Tell us about your organization</h1>
                  <p className='text-[16px] text-[#6B7280] '>Provide your company details to get started</p>
                  <form className="flex flex-col gap-5 mt-4" onSubmit={handleNext}>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-[#111827]">Company Name <span className='text-red-600'>*</span></label>
                      <input
                        type="text"
                        className="w-full text-sm px-4 py-2.5 bg-[#F7FBFF]  text-[#6B7280] font-bold  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD]"
                        placeholder="Your Company Name" required
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-[#111827]">CIN / Registration Number <span className='text-red-600'>*</span></label>
                      <input
                        type="text"
                        className="w-full text-sm px-4 py-2 bg-[#F7FBFF]  text-[#6B7280] font-bold  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD]"
                        placeholder="U72900MH2015PTC123456" required
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-[#111827]">
                        Industry <span className='text-red-600'>*</span>
                      </label>
                      <select
                        className="w-full text-sm px-4 py-3 bg-[#F7FBFF] text-[#6B7280] font-bold rounded-md outline-none pr-10 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer appearance-none"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Select Industry</option>
                        <option value="it">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="manufacturing">Manufacturing</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-[#111827]">
                        Company Type <span className='text-red-600'>*</span>
                      </label>
                      <select
                        className="w-full text-sm px-4 py-3 bg-[#F7FBFF] text-[#6B7280] font-bold rounded-md outline-none pr-10 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer appearance-none"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Select Company Type</option>
                        <option value="pvt">Private Limited</option>
                        <option value="public">Public Limited</option>
                        <option value="llp">LLP</option>
                        <option value="partnership">Partnership</option>
                        <option value="ngo">NGO / Trust</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-[#111827]">Registered Address <span className='text-red-600'>*</span></label>
                      <textarea
                        rows={4}
                        className="w-full text-sm px-4 py-2 bg-[#F7FBFF] text-[#6B7280] font-bold  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD] resize-none"
                        placeholder="Enter complete registered address"
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
              )
              }

              {/* CSR Details */}
              {step === 2 && (
                <div className='bg-white p-8 w-175 relative top-10 space-y-4'>
                  <h1 className='text-[24px] font-semibold tracking-wide'>Your CSR Profile</h1>
                  <p className='text-[16px] text-[#6B7280]  '>Help us understand your CSR experience and interests</p>
                  <form className="flex flex-col gap-5 mt-4" onSubmit={handleNext}>

                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-[#111827]">Years of CSR Experience <span className='text-red-600'>*</span></label>
                      <input
                        type="number"
                        className="w-full text-sm px-4 py-2 bg-[#F7FBFF]  text-[#6B7280] font-bold  rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD]"
                        placeholder="Enter exp years" required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#111827]">Focus Areas <span className='text-red-600'>*</span></label>
                      <div className="flex flex-col gap-4">
                        <label className="text-[#8897AD] text-sm font-normal">
                          Select all areas that apply
                        </label>

                        <div className="flex flex-wrap gap-3">
                          {categories.map((item) => {
                            const isSelected = selectedItems.includes(item);

                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={(e) => toggleTag(e, item)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 text-[14px]
                              ${isSelected
                                    ? "bg-[#E8EFFF] border-[#2563EB] text-[#2563EB]"
                                    : "bg-white border-[#E5E7EB] text-[#64748B] hover:border-[#CBD5E1]"
                                  }
                            `}
                              >
                                {item}
                                {isSelected && <X size={16} className="ml-1" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#111827]">Past Projects Summary <span className='text-red-600'>*</span></label>
                      <label className="text-sm text-[#8897AD]">Briefly describe your previous CSR initiatives and their impact</label>
                      <textarea
                        rows={6}
                        className="w-full text-sm px-4 py-2 bg-[#F7FBFF] text-[#6B7280] font-bold tracking-wider rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[#8897AD] resize-none placeholder:font-normal"
                        placeholder="Example: Implemented education programs reaching 500+ students, health camps benefiting 1000+ families..."
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
                <div className='bg-white p-8 w-175 relative top-10 space-y-4'>
                  <h1 className='text-[24px] font-semibold tracking-wide'>Upload Required Documents</h1>
                  <p className='text-[16px] text-[#6B7280] '>Please upload the following documents to complete your registration</p>
                  <div className="max-w-4xl mx-auto px-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex flex-col">
                      <UploadRow
                        label="CSR Registration Certificate"
                        description="Certificate of incorporation or registration"
                        fileKey="csrCert"
                        required
                      />
                      <UploadRow
                        label="Company PAN / CIN Document"
                        description="Valid PAN card or CIN document"
                        fileKey="panDoc"
                        required
                      />
                      <UploadRow
                        label="CSR Policy Document"
                        description="Your organization's CSR policy document"
                        fileKey="csrPolicy"
                        required
                      />
                      <UploadRow
                        label="Financial Statements"
                        description="Latest audited financial statements"
                        fileKey="financial"
                      />
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-[#F0F7FF] border border-[#E0EFFF] rounded-xl flex gap-1">
                    <span className="text-[#1D4ED8] font-bold text-[14px] whitespace-nowrap">Note:</span>
                    <p className="text-[#1D4ED8] text-[14px] leading-relaxed">
                      All documents must be in PDF, DOC, DOCX, JPG, or PNG format. Maximum file size: 5MB per document.
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
                <div className='bg-white p-8 w-175 relative top-10 space-y-4'>
                  <h1 className='text-[24px] font-semibold tracking-wide'>Review Your Details</h1>
                  <p className='text-[16px] text-[#6B7280]  '>Please review all information before submitting your registration</p>

                  <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                    <div className='flex justify-between items-center py-2'>
                      <h1 className='font-semibold text-[18px] text[#111827]'>Company Information</h1>
                      <button onClick={() => setStep(1)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                    </div>
                    <div className='grid grid-cols-2 space-y-4'>
                      <div className='space-y-2'>
                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Company Name</h1>
                        <p className='text-sm text-[#111827] '>TechCorp Solutions Pvt Ltd</p>
                      </div>
                      <div className='space-y-2'>
                        <h1 className='text-[12px] text-[#6B7280] uppercase'>CIN Number</h1>
                        <p className='text-sm text-[#111827] '>U72900MH2015PTC123456</p>
                      </div>
                      <div className='space-y-2'>
                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Industry</h1>
                        <p className='text-sm text-[#111827] '>Technology</p>
                      </div>
                      <div className='space-y-2'>
                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Company Type</h1>
                        <p className='text-sm text-[#111827] '>Private Limited</p>
                      </div>
                    </div>
                    <div className='space-y-2 mt-4'>
                      <h1 className='text-[12px] text-[#6B7280] uppercase'>Registered Address</h1>
                      <p className='text-sm text-[#111827] '>301, Tower A, Business Park, Bandra Kurla Complex, Mumbai, Maharashtra - 400051</p>
                    </div>
                  </div>

                  <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                    <div className='flex justify-between items-center py-2'>
                      <h1 className='font-semibold text-[18px] text[#111827]'>CSR Profile</h1>
                      <button onClick={() => setStep(2)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                    </div>
                    <div className='space-y-4'>
                      <div className='space-y-2'>
                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Years of Experience</h1>
                        <p className='text-sm text-[#111827] '>5-10 years</p>
                      </div>
                      <div className='space-y-2'>
                        <h1 className='text-[12px] text-[#6B7280] uppercase'>Focus Areas</h1>
                        <div className='flex items-center justify-start gap-2'>
                          <p className='text-[12px] text-[#1D4ED8] bg-[#E0E7FF] rounded-full px-4 py-1 font-medium'>Education</p>
                          <p className='text-[12px] text-[#1D4ED8] bg-[#E0E7FF] rounded-full px-4 py-1 font-medium'>Healthcare</p>
                          <p className='text-[12px] text-[#1D4ED8] bg-[#E0E7FF] rounded-full px-4 py-1 font-medium'>Skill Development</p>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-2 py-4'>
                      <h1 className='text-[12px] text-[#6B7280] uppercase'>Past Projects Summary</h1>
                      <p className='text-sm text-[#111827] '>Implemented digital literacy programs in 50+ rural schools reaching over 5,000 students. Conducted health camps in partnership with local hospitals benefiting 2,000+ families. Established vocational training centers in 3 districts providing skill development to 1,500+ youth.</p>
                    </div>
                  </div>

                  <div className='border border-[#E5E7EB] rounded-xl px-6 py-4'>
                    <div className='flex justify-between items-center py-2'>
                      <h1 className='font-semibold text-[18px] text[#111827]'>Uploaded Documents</h1>
                      <button onClick={() => setStep(3)} className='text-sm text-[#1D4ED8] flex gap-2'> <Pen size={16} /> Edit</button>
                    </div>
                    <div className='space-y-2 mt-2'>
                      <p className='text-[#111827] flex items-center gap-2'><File size={12} className='text-[#6B7280]' /> CSR_Registration_Certificate.pdf</p>
                      <p className='text-[#111827] flex items-center gap-2'><File size={12} className='text-[#6B7280]' /> Company_PAN_Document.pdf</p>
                      <p className='text-[#111827] flex items-center gap-2'><File size={12} className='text-[#6B7280]' /> CSR_Policy_2024.pdf</p>
                      <p className='text-[#111827] flex items-center gap-2'><File size={12} className='text-[#6B7280]' /> Financial_Statements_2023-24.pdf</p>
                    </div>
                  </div>

                  <div className='bg-[#F0FDF4] border border-[#B9F8CF] p-4 rounded-[10px]'>
                    <p className='text-[#016630] text-sm'><span className='text-[#016630] font-bold'>Note:</span> By submitting this registration, you confirm that all information provided is accurate and complete. Your application will be reviewed within 3-5 business days.</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <button type="button" onClick={handleBack} className="flex items-center justify-center text-sm relative gap-2 w-30 bg-[#FFFFFF] border border-slate-400 text-black hover:bg-slate-100 py-2 px-4 rounded-xl transition-colors">
                      <ArrowLeft size={16} className="text-black font-bold" /> Previous
                    </button>
                    <button type="button" onClick={() => router.push('/registersucess')} className="flex items-center justify-center text-sm relative gap-2 w-35 bg-[#0066FF] border border-blue-400 text-[#ffffff] hover:bg-blue-700 hover:text-white py-2 rounded-xl transition-colors">
                      Submit <ArrowRight size={16} className="text-[#ffffff] font-bold" />
                    </button>
                  </div>
                </div>
              )
              }

              <div className='py-20'>
                <p className='text-[14px] font-extralight text-[#6B7280] '>Having trouble? <span className='text-blue-500 cursor-pointer'>Contact Support</span></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
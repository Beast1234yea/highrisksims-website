import React, { useState } from 'react';
import { Scan, FileCheck, CheckCircle2, ShieldAlert, Smartphone } from 'lucide-react';

const VocShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "OCR Document Scanning",
      desc: "Scan Driver's Licences and HRW Cards with Google Cloud Vision OCR. Automatically extracts name, DOB, and classes.",
      icon: Scan
    },
    {
      title: "Confidence Scoring",
      desc: "System validates extracted data with confidence scores. Prompts manual review if confidence is low.",
      icon: ShieldAlert
    },
    {
      title: "Instant Verification",
      desc: "Generates a unique QR code for every certificate. Anyone can scan to verify validity in real-time.",
      icon: Smartphone
    },
    {
      title: "Generated Certificate",
      desc: "Professional PDF generation (QuestPDF) with RTO branding delivered in seconds.",
      icon: FileCheck
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Content Steps */}
      <div className="space-y-8">
        <div className="inline-block px-3 py-1 rounded-full bg-eliteOrange/20 text-eliteOrange border border-eliteOrange/30 text-sm font-semibold mb-2">
          Product Spotlight
        </div>
        <h2 className="text-4xl font-extrabold text-white leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">VOC System:</span> <br/>
          Verify Competency in Seconds
        </h2>
        <p className="text-gray-300 text-lg">
          A complete workflow for scanning licences, assessing competency, and issuing verified certificates. Replace paper forms with our cloud-based verification engine.
        </p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl transition-all duration-300 cursor-pointer border ${activeStep === index ? 'bg-white/10 border-accent/50' : 'bg-transparent border-transparent hover:bg-white/5'}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${activeStep === index ? 'bg-accent text-primary' : 'bg-white/10 text-gray-400'}`}>
                  <step.icon size={24} />
                </div>
                <div>
                  <h4 className={`font-bold ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>{step.title}</h4>
                  {activeStep === index && (
                    <p className="text-sm text-gray-300 mt-1 animate-fade-in">{step.desc}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Visual Mockup */}
      <div className="relative">
        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full opacity-50"></div>
        <div className="relative bg-darkBg border border-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
          {/* Mock Browser Header */}
          <div className="bg-black/40 px-4 py-3 border-b border-white/5 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 bg-black/50 px-3 py-1 rounded text-xs text-gray-500 font-mono w-full">
              highrisksims.com.au/voc/verify/EL-VOC-2025-001
            </div>
          </div>

          {/* Dynamic Content based on active step */}
          <div className="flex-1 p-6 flex items-center justify-center relative">
            {activeStep === 0 && (
              <div className="w-full max-w-xs bg-white text-gray-900 rounded-lg p-4 shadow-lg animate-slide-up">
                <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center border-2 border-dashed border-gray-400">
                   <Scan className="text-gray-400 w-12 h-12" />
                </div>
                <div className="space-y-2">
                   <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                   <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="mt-4 bg-blue-600 text-white text-center py-2 rounded text-sm font-bold">Scanning...</div>
              </div>
            )}
            
            {activeStep === 1 && (
              <div className="w-full space-y-3 animate-slide-up">
                <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-green-400 font-mono text-sm">Licence No. Extraction</span>
                  <span className="text-green-400 font-bold">98% Match</span>
                </div>
                <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg flex justify-between items-center">
                   <span className="text-green-400 font-mono text-sm">Surname: SMITH</span>
                   <span className="text-green-400 font-bold">99% Match</span>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg flex justify-between items-center">
                   <span className="text-yellow-400 font-mono text-sm">Expiry Date</span>
                   <span className="text-yellow-400 font-bold">Manual Review</span>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="text-center animate-fade-in">
                 <div className="bg-white p-4 rounded-xl inline-block mb-4">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://highrisksims.com.au" alt="QR Code" className="w-32 h-32" />
                 </div>
                 <p className="text-cyan font-mono text-sm">EL-VOC-2025-00001</p>
                 <div className="flex items-center justify-center gap-2 mt-2 text-green-400">
                    <CheckCircle2 size={16} />
                    <span className="text-sm font-bold">Status: ACTIVE</span>
                 </div>
              </div>
            )}

            {activeStep === 3 && (
               <div className="bg-white w-full h-[400px] rounded shadow-xl p-6 relative animate-slide-up">
                  <div className="border-4 border-double border-gray-200 h-full p-4 flex flex-col items-center text-center">
                     <div className="text-2xl font-serif font-bold text-gray-800 mb-2">CERTIFICATE</div>
                     <div className="text-sm text-gray-500 mb-6">OF COMPETENCY</div>
                     <div className="text-xl font-bold text-gray-900 mb-2">John Doe</div>
                     <div className="text-gray-600 text-sm mb-4">Has been verified as competent in</div>
                     <div className="text-lg font-bold text-gray-800">CPCCLDG3001 - Licence to perform dogging</div>
                     <div className="mt-auto w-full flex justify-between items-end border-t pt-4">
                        <div className="text-xs text-gray-400">RTO: 12345</div>
                        <div className="w-16 h-16 bg-gray-100"></div>
                     </div>
                  </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocShowcase;
import React from 'react';
import { Scan, Gamepad2, ClipboardCheck, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Scan & Verify',
      desc: 'Use the VOC app to scan existing licences (OCR) or enrol students via the LMS portal with USI integration.',
      icon: Scan,
    },
    {
      id: 2,
      title: 'Train & Simulate',
      desc: 'Students engage with HTML5 theory lessons and practice high-risk scenarios in our WebRTC cloud simulators.',
      icon: Gamepad2,
    },
    {
      id: 3,
      title: 'Assess Competency',
      desc: 'Conduct formal assessments using the digital logbook, quiz engine, and practical observation tools.',
      icon: ClipboardCheck,
    },
    {
      id: 4,
      title: 'Certify & Report',
      desc: 'Instantly generate QR-verified certificates and export AVETMISS/NAT files for government compliance.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-darkBg relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white">The Training Workflow</h2>
          <p className="mt-4 text-xl text-gray-400">From enrolment to issuance in one seamless platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="bg-primary/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full hover:border-accent transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-darkBg p-2 rounded-full border border-white/10 group-hover:border-accent transition-colors">
                  <div className="bg-accent w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold">
                    {step.id}
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <step.icon className="w-10 h-10 text-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
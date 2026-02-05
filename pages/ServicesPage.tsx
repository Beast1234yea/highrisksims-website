
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSearch, BookOpen, Gamepad2, Monitor,
  ArrowRight, CheckCircle2, Clock, MapPin,
  Calendar, Mail, DollarSign
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-purple-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black font-heading mb-4">Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From strategy to implementation, I've got you covered
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service 1: Audit & Strategy */}
        <div className="mb-16 bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                  <FileSearch className="w-8 h-8 text-accent-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Modernisation Audit & Strategy</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $1,500 - $3,000</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2-3 weeks</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-accent-gold">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    "2-4 hour discovery session (video call)",
                    "Review of existing training materials",
                    "Gap analysis against ASQA standards",
                    "Detailed modernisation roadmap",
                    "Prioritised recommendations with ROI",
                    "Budget estimates for each recommendation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="font-bold text-cyan-400 mb-3">Best for:</h4>
              <p className="text-gray-300">RTOs who know they need to modernise but aren't sure where to start.</p>
            </div>
          </div>
        </div>

        {/* Service 2: Course Transformation */}
        <div className="mb-16 bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-accent-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Course Transformation</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $6,000 - $25,000 per unit</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4-8 weeks</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-accent-gold">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    "Complete redesign of learner guide content",
                    "Interactive eLearning module (SCORM compliant)",
                    "Digitised assessment tools",
                    "LMS integration support",
                    "Trainer delivery guide",
                    "30 days post-delivery support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="font-bold text-cyan-400 mb-3">Best for:</h4>
              <p className="text-gray-300">RTOs with existing courses that need to be brought into the 21st century.</p>
            </div>
          </div>
        </div>

        {/* Service 3: Simulation Development */}
        <div className="mb-16 bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                  <Gamepad2 className="w-8 h-8 text-accent-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Simulation Development</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> From $25,000 (custom quoted)</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8-12 weeks</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-accent-gold">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    "Custom Unity-based training simulator",
                    "Realistic 3D environments & equipment",
                    "Interactive scenarios & assessments",
                    "Multiple deployment options (web, desktop, VR)",
                    "Trainer guide & documentation",
                    "Ongoing technical support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="font-bold text-cyan-400 mb-3">Best for:</h4>
              <p className="text-gray-300">High-risk work training where practical experience is difficult, expensive, or dangerous to provide.</p>
            </div>
          </div>
        </div>

        {/* Service 4: LMS Implementation */}
        <div className="mb-16 bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-accent-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-black">LMS Implementation</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $5,000 - $15,000</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2-4 weeks</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-accent-gold">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    "LMS platform setup & configuration",
                    "Branding & customisation",
                    "User account structure setup",
                    "Course & assessment integration",
                    "Admin training (2-4 hours)",
                    "30 days post-launch support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="font-bold text-cyan-400 mb-3">Best for:</h4>
              <p className="text-gray-300">RTOs still tracking learners in spreadsheets or using clunky legacy systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-[#120a1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-heading mb-4">Packages</h2>
            <p className="text-gray-400">Bundled services for better value</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Package 1 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-accent-gold/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-black">RTO Modernisation Starter</h3>
                <span className="text-accent-gold font-bold">$4,500 - $6,500</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "4-hour discovery audit",
                  "Written modernisation roadmap",
                  "1 sample unit converted to interactive format",
                  "Demo of simulation possibilities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-cyan-400 font-medium">Perfect for: Testing the waters before full commitment</p>
            </div>

            {/* Package 2 */}
            <div className="bg-accent-gold/10 rounded-3xl p-8 border border-accent-gold/30 hover:border-accent-gold/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-black">Full Unit Transformation</h3>
                <span className="text-accent-gold font-bold">$12,000 - $25,000</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Complete learner guide redesign",
                  "Interactive eLearning module (SCORM)",
                  "Digital assessment tools",
                  "LMS integration",
                  "Trainer training session"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-cyan-400 font-medium">Perfect for: Complete modernisation of a single unit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black font-heading mb-4">Hourly Rates</h2>
          <p className="text-gray-400">For smaller tasks or ongoing work</p>
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left px-6 py-4 font-bold">Service Type</th>
                <th className="text-right px-6 py-4 font-bold">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-gray-300">General consulting & advisory</td>
                <td className="px-6 py-4 text-right text-accent-gold font-bold">$150/hr</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-gray-300">Instructional design & content</td>
                <td className="px-6 py-4 text-right text-accent-gold font-bold">$120/hr</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-gray-300">Technical development (Unity, LMS, web)</td>
                <td className="px-6 py-4 text-right text-accent-gold font-bold">$150/hr</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-gray-300">Train-the-trainer sessions</td>
                <td className="px-6 py-4 text-right text-accent-gold font-bold">$180/hr</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-gray-300">On-site visits</td>
                <td className="px-6 py-4 text-right text-accent-gold font-bold">$1,200/day + travel</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Remote Delivery Note */}
        <div className="mt-8 bg-green-500/10 rounded-2xl p-6 border border-green-500/20 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-1">100% Remote Delivery</h4>
            <p className="text-gray-300 text-sm">All services delivered remotely via video call and screen share. Australia-wide coverage, no travel costs.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-accent-gold rounded-[2rem] p-12 text-center shadow-2xl shadow-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/20 blur-3xl rounded-full"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#2D1B4E] font-heading">Ready to Get Started?</h2>
            <p className="text-lg text-[#2D1B4E]/80 font-medium max-w-xl mx-auto">
              Book a free discovery call to discuss your requirements and get a custom quote.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-[#2D1B4E] text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl">
              Book Your Free Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

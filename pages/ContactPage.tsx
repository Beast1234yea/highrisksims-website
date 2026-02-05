
import React from 'react';
import { Calendar, Mail, MapPin, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-purple-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black font-heading mb-4">Let's Talk About Your Training</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book a free 30-minute discovery call to discuss your current setup and see how modernisation could work for your RTO.
          </p>
        </div>
      </section>

      {/* Two Contact Cards */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Book a Call */}
          <div className="bg-accent-gold/10 rounded-3xl p-8 border border-accent-gold/30 hover:border-accent-gold/50 transition-all">
            <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-accent-gold" />
            </div>
            <h2 className="text-2xl font-black mb-3">Book a Discovery Call</h2>
            <p className="text-gray-300 mb-6">
              Schedule a free 30-minute call at a time that suits you. We'll discuss your current setup and explore what's possible.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent-gold text-[#2D1B4E] py-4 rounded-xl font-bold text-lg text-center hover:scale-105 transition-all shadow-lg shadow-gold/20"
            >
              Book Now
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-black mb-3">Send an Email</h2>
            <p className="text-gray-300 mb-6">
              Prefer to write? I'll get back to you within 24 hours with a response tailored to your situation.
            </p>
            <a
              href="mailto:nickbeashel@hotmail.com"
              className="block w-full bg-cyan-500 text-[#1a102e] py-4 rounded-xl font-bold text-lg text-center hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
            >
              nickbeashel@hotmail.com
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-[#120a1f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-heading mb-4">What to Expect on the Call</h2>
            <p className="text-gray-400">A relaxed conversation about your training challenges</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Your current training setup and pain points",
              "What you're hoping to achieve",
              "A quick overview of what's possible",
              "Whether we're a good fit to work together"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent-gold/10 rounded-2xl p-6 border border-accent-gold/20 text-center">
            <p className="text-xl text-accent-gold font-bold">
              No hard sell. No obligation. Just straight talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black font-heading mb-4">Contact Details</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Email</h4>
              <a href="mailto:nickbeashel@hotmail.com" className="text-gray-300 hover:text-accent-gold transition-colors">
                nickbeashel@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-gray-300">Based in Australia, delivering 100% remotely nationwide</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Response Time</h4>
              <p className="text-gray-300">Within 24 hours for emails</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Consultation</h4>
              <p className="text-gray-300">Free 30-minute discovery call</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

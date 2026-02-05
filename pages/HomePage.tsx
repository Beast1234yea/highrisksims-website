
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSearch, BookOpen, Gamepad2, Monitor,
  ArrowRight, CheckCircle2, Award, Shield,
  HardHat, Building, Clock, FileSpreadsheet,
  Presentation, Laptop, ClipboardCheck, Cog
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a102e]/50 via-[#1a102e] to-[#1a102e]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-black font-heading leading-tight">
                Transform Your <span className="text-cyan-400">RTO Training</span>
              </h1>
              <p className="text-xl sm:text-2xl text-accent-gold font-bold">
                Expert consulting • Interactive eLearning • 3D Simulations
              </p>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Stop losing learners to outdated PDFs. I help RTOs modernise their training delivery with engaging digital experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-accent-gold text-[#2D1B4E] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-gold/20 flex items-center">
                Book a Free Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#120a1f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-accent-gold font-bold uppercase tracking-widest">The Problem</h2>
            <h3 className="text-4xl font-black font-heading">Is Your Training Stuck in 2010?</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileSpreadsheet, title: "Paper Learner Guides", text: "Boring documents that learners skim and forget immediately." },
              { icon: Presentation, title: "Generic PowerPoints", text: "Death by bullet point. Trainers watching eyes glaze over." },
              { icon: FileSearch, title: "Spreadsheet Nightmares", text: "Manual compliance tracking that eats hours every week." },
              { icon: Shield, title: "No Safe Practice", text: "No way to let learners fail safely before touching real equipment." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-red-500/5 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all group">
                <item.icon className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-accent-gold font-bold uppercase tracking-widest">Services</h2>
          <h3 className="text-4xl font-black font-heading">How I Help RTOs Modernise</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FileSearch,
              title: "Audit & Strategy",
              price: "$1,500+",
              text: "Comprehensive review of your training materials with a clear modernisation roadmap."
            },
            {
              icon: BookOpen,
              title: "Course Transformation",
              price: "$6,000+",
              text: "Turn your existing courses into engaging, interactive eLearning experiences."
            },
            {
              icon: Gamepad2,
              title: "Simulation Development",
              price: "$25,000+",
              text: "Custom Unity-based training simulators for high-risk work scenarios."
            },
            {
              icon: Monitor,
              title: "LMS Implementation",
              price: "$5,000+",
              text: "Modern learning management system setup with full training and support."
            },
          ].map((service, i) => (
            <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-accent-gold/50 transition-all hover:bg-white/10 group">
              <service.icon className="w-12 h-12 text-accent-gold mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-cyan-400 font-bold text-lg mb-4">{service.price}</p>
              <p className="text-gray-400 text-sm">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center text-accent-gold font-bold text-lg hover:underline">
            View All Services & Pricing <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-purple-deep relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-accent-gold font-bold uppercase tracking-widest">About Me</h2>
                <h3 className="text-4xl font-black font-heading">Built by Someone Who's Done the Job</h3>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                After 23 years operating cranes and training workers in the field, I saw how far behind the training industry was. Paper guides, boring PowerPoints, no way to practice safely. So I started building the systems I wished existed - and now I help other RTOs do the same.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center shrink-0">
                    <HardHat className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">23 Years Operational</h5>
                    <p className="text-gray-400 text-sm">Crane operator, rigger, dogman</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">TAE40122 Qualified</h5>
                    <p className="text-gray-400 text-sm">Cert IV Training & Assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">SafeWork Accredited</h5>
                    <p className="text-gray-400 text-sm">NSW Accredited Assessor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Major Projects</h5>
                    <p className="text-gray-400 text-sm">Cotter Dam, Sydney Desal, Law Courts</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500 font-medium">
                  Clients trained: Royal Navy, Australian Army, John Holland, NSW Transport
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-accent-gold/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-accent-gold/30 rounded-full mx-auto flex items-center justify-center">
                      <HardHat className="w-16 h-16 text-accent-gold" />
                    </div>
                    <div>
                      <p className="text-2xl font-black">Nick Beashel</p>
                      <p className="text-accent-gold font-bold">High Risk Sims</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build With */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-accent-gold font-bold uppercase tracking-widest">Capabilities</h2>
          <h3 className="text-4xl font-black font-heading">Technology That Powers Modern Training</h3>
          <p className="text-gray-400 text-lg">These are the tools I use to transform your training</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: Laptop, title: "Interactive eLearning", text: "SCORM compliant" },
            { icon: Gamepad2, title: "3D Simulations", text: "Unity-based" },
            { icon: Monitor, title: "Modern LMS", text: "Full featured" },
            { icon: ClipboardCheck, title: "Digital Assessments", text: "Evidence-based" },
            { icon: Cog, title: "VOC Systems", text: "Compliance ready" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-400/50 transition-all text-center group">
              <item.icon className="w-10 h-10 text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-gray-500 text-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-accent-gold rounded-[2rem] p-12 text-center shadow-2xl shadow-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/20 blur-3xl rounded-full"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#2D1B4E] font-heading">Ready to Modernise Your Training?</h2>
            <p className="text-xl text-[#2D1B4E]/80 font-medium max-w-2xl mx-auto">
              Book a free 30-minute discovery call to discuss your current setup and see how modernisation could work for your RTO. No hard sell. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-[#2D1B4E] text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl">
                Book Your Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

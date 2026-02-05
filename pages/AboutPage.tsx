
import React from 'react';
import { Link } from 'react-router-dom';
import {
  HardHat, Award, Shield, Building, MapPin,
  Users, ArrowRight, CheckCircle2, Briefcase
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-20 bg-purple-deep overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <HardHat className="w-96 h-96 text-accent-gold" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black font-heading mb-6">
              Built by Someone Who's <span className="text-accent-gold">Done the Job</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              After 23 years operating cranes and training workers in the field, I saw how far behind the training industry was. So I started building the systems I wished existed.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black font-heading mb-6">The Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  From 2000 to 2023, I worked on some of Australia's biggest construction projects - the Enlarged Cotter Dam, Sydney Desalination Plant, and the Law Courts of Canberra. As a crane operator, rigger, and dogman, I've spent thousands of hours in the cabin.
                </p>
                <p>
                  But it wasn't until I became a trainer that I saw the real problem. Paper learner guides that bore students. Generic PowerPoints that send people to sleep. Spreadsheet nightmares for compliance tracking. No safe way to practice high-risk skills.
                </p>
                <p>
                  The training industry was stuck in 2010 while every other industry had moved on.
                </p>
                <p>
                  So I started building. Interactive eLearning that actually engages learners. 3D simulators that let people fail safely. Modern LMS systems that make compliance easy. And now I help other RTOs do the same.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <HardHat className="w-8 h-8 text-accent-gold mb-4" />
                <h4 className="font-bold mb-2">Operational Background</h4>
                <p className="text-sm text-gray-400">23 years in construction (2000-2023). Crane operator, rigger, dogman.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <Award className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="font-bold mb-2">Training Credentials</h4>
                <p className="text-sm text-gray-400">TAE40122 Certificate IV in Training and Assessment (2023)</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <Shield className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="font-bold mb-2">Accreditation</h4>
                <p className="text-sm text-gray-400">SafeWork NSW Accredited Assessor. Elite Licensing partner.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <Building className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-bold mb-2">Major Projects</h4>
                <p className="text-sm text-gray-400">Enlarged Cotter Dam, Sydney Desalination Plant, Law Courts of Canberra</p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-accent-gold/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-accent-gold/30 rounded-full mx-auto flex items-center justify-center">
                    <HardHat className="w-16 h-16 text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-3xl font-black">Nick Beashel</p>
                    <p className="text-accent-gold font-bold">Founder, High Risk Sims</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                  <span>Based in Australia, delivering 100% remotely nationwide</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase className="w-5 h-5 text-accent-gold" />
                  <span>23+ years operational experience</span>
                </div>
              </div>
            </div>

            {/* Clients Trained */}
            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" /> Clients Trained
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Royal Navy",
                  "Australian Army",
                  "John Holland",
                  "NSW Transport"
                ].map((client, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="block w-full bg-accent-gold text-[#2D1B4E] py-5 rounded-xl font-bold text-lg text-center hover:scale-105 transition-all shadow-xl shadow-gold/20"
            >
              Book a Free Discovery Call <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#120a1f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black font-heading mb-8">My Mission</h2>
          <p className="text-2xl text-gray-300 leading-relaxed italic">
            "To help RTOs modernise their training delivery so learners actually engage, trainers actually enjoy teaching, and compliance actually takes care of itself."
          </p>
          <div className="flex justify-center space-x-12 mt-12 opacity-50">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Australian Owned</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">100% Remote Delivery</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

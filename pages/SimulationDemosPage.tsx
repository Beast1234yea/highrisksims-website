
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Shield, Gamepad2, Lock, Calculator, Box, Camera, Monitor } from 'lucide-react';
import '@google/model-viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        'shadow-intensity'?: string;
        exposure?: string;
        loading?: string;
        'environment-image'?: string;
        'camera-orbit'?: string;
        poster?: string;
      }, HTMLElement>;
    }
  }
}

const ACCESS_PASSWORD = 'highrisksims2026';

interface Model3D {
  name: string;
  src: string;
  description: string;
}

const models3D: Model3D[] = [
  { name: "Safety Hook", src: "/models/safety-hook.glb", description: "Standard crane safety hook with latch mechanism" },
  { name: "Chain Sling 60°", src: "/models/chain-sling-60deg.glb", description: "Two-leg chain sling at 60° included angle" },
  { name: "Chain Sling 90°", src: "/models/chain-sling-90deg.glb", description: "Two-leg chain sling at 90° included angle" },
  { name: "Chain Sling 120°", src: "/models/chain-sling-120deg.glb", description: "Two-leg chain sling at 120° included angle" },
  { name: "Spreader Bar", src: "/models/spreader-bar.glb", description: "Lifting spreader bar for balanced load distribution" },
  { name: "Wire Rope Assembly", src: "/models/wire-rope-assembly.glb", description: "Wire rope sling with thimble eyes and ferrule swages" },
  { name: "Vertical Plate Clamp", src: "/models/vertical-plate-clamp.glb", description: "Vertical lifting clamp for steel plates" },
  { name: "Horizontal Plate Clamp", src: "/models/horizontal-plate-clamp.glb", description: "Horizontal lifting clamp for steel plates" },
  { name: "Eye Bolt", src: "/models/eye-bolt.glb", description: "Forged eye bolt for lifting point attachment" },
  { name: "Two-Way Radio", src: "/models/two-way-radio.glb", description: "UHF two-way radio for crane communication" },
  { name: "Whistle", src: "/models/whistle.glb", description: "Safety whistle for crane signal communication" },
];

interface Screenshot {
  src: string;
  caption: string;
  category: 'simulation' | 'lms';
}

const screenshots: Screenshot[] = [
  { src: "/images/screenshots/boomlift-sim-overview.png", caption: "Boom lift simulation - full construction site environment with debug panel", category: "simulation" },
  { src: "/images/screenshots/boomlift-controls.png", caption: "Realistic boom lift control panel with functional buttons and joysticks", category: "simulation" },
  { src: "/images/screenshots/boomlift-extended.png", caption: "Boom lift fully extended on construction site", category: "simulation" },
  { src: "/images/screenshots/boomlift-dual.png", caption: "Multiple boom lifts operating simultaneously", category: "simulation" },
  { src: "/images/screenshots/boomlift-scaffolding.png", caption: "Boom lift working near scaffolding with SimuTrain integration", category: "simulation" },
  { src: "/images/screenshots/boomlift-safety-screen.png", caption: "Boom lift navigating safety screens on site", category: "simulation" },
  { src: "/images/screenshots/highrisksims-branding.png", caption: "High Risk Sims branded construction environment", category: "simulation" },
  { src: "/images/screenshots/simutrain-site.png", caption: "Full construction site overview with SimuTrain platform", category: "simulation" },
  { src: "/images/screenshots/lms-dogging-intro.png", caption: "Dogging course - Introduction with AI chatbot and progress tracking", category: "lms" },
  { src: "/images/screenshots/lms-dogging-legislation.png", caption: "Interactive legislation pyramid - Acts, Regulations, Codes of Practice", category: "lms" },
  { src: "/images/screenshots/lms-dogging-hazards.png", caption: "Hazards & Risk Assessment - Hierarchy of Controls for rigging safety", category: "lms" },
  { src: "/images/screenshots/forklift-fulcrum.png", caption: "Forklift fulcrum and counterweight principles - interactive course content", category: "simulation" },
  { src: "/images/screenshots/forklift-centre-gravity.png", caption: "Load, combined, and forklift centre of gravity visualisation", category: "simulation" },
  { src: "/images/screenshots/forklift-stability-triangle.png", caption: "The Stability Triangle - CG must stay within drive wheels and rear axle", category: "simulation" },
  { src: "/images/screenshots/forklift-tipping.png", caption: "Tipping point progression - stable, unstable, and tip-over complete", category: "simulation" },
  { src: "/images/screenshots/forklift-3point-contact.png", caption: "3-point contact when getting on and off a forklift", category: "simulation" },
  { src: "/images/screenshots/forklift-tipover-brace.png", caption: "Tip-over incident response - brace for impact and safe position", category: "simulation" },
  { src: "/images/screenshots/lms-course-catalog.png", caption: "LMS course catalog with multiple training programs", category: "lms" },
  { src: "/images/screenshots/lms-leaderboard.png", caption: "Gamification leaderboard with points, badges, and rewards", category: "lms" },
  { src: "/images/screenshots/lms-rewards-shop.png", caption: "Rewards shop - earn points for completing lessons, quizzes, and simulations", category: "lms" },
  { src: "/images/screenshots/lms-admin-dashboard.png", caption: "Admin dashboard - user, course, enrolment, compliance, and payment management", category: "lms" },
  { src: "/images/screenshots/lms-course-editor.png", caption: "Course editor with lesson management and content creation tools", category: "lms" },
  { src: "/images/screenshots/lms-dogging-chatbot.png", caption: "Dogging lesson with AI Learning Assistant chatbot for real-time student support", category: "lms" },
  { src: "/images/screenshots/lms-ai-chatbot-closeup.png", caption: "AI chatbot close-up - Explain This, Quiz Me, Summarize, Ask Trainer features", category: "lms" },
];

interface SimDemo {
  title: string;
  description: string;
  videoSrc: string;
  tags: string[];
}

const demos: SimDemo[] = [
  {
    title: "VLC (Vehicle Loading Crane) Simulation",
    description: "Vehicle loading crane operator training covering setup, stabilisation, load charts, and safe lifting operations. Realistic physics engine for authentic crane behaviour.",
    videoSrc: "/videos/vlc-demo.mp4",
    tags: ["Crane", "High Risk", "3D Physics"]
  },
  {
    title: "Dogging & Whistles Simulation",
    description: "Dogging hand signals and whistle communication training. Learners practise correct crane signals in realistic construction site scenarios with immediate feedback.",
    videoSrc: "/videos/dogging-whistles-demo.mp4",
    tags: ["Dogging", "Crane Signals", "High Risk"]
  },
  {
    title: "Boom Lift Simulation",
    description: "Full 3D boom lift (EWP) operator training. Covers pre-start checks, controls familiarisation, safe operation at height, and emergency procedures in realistic site conditions.",
    videoSrc: "/videos/boomlift-demo.mp4",
    tags: ["EWP", "High Risk", "3D"]
  },
  {
    title: "Safety Screen Simulation",
    description: "Interactive safety screen training module. Learners identify hazards and apply correct safety protocols in a controlled virtual environment before working with real equipment.",
    videoSrc: "/videos/safety-screen-demo.mp4",
    tags: ["Safety", "Hazard ID", "Interactive"]
  },
  {
    title: "Loading Bay Simulation",
    description: "Loading bay operations training covering vehicle approach, dock leveller use, load securing, and pedestrian management. Realistic warehouse environment with dynamic scenarios.",
    videoSrc: "/videos/loading-bay-demo.mp4",
    tags: ["Logistics", "Warehouse", "Operations"]
  },
  {
    title: "Forklift Simulation",
    description: "Forklift operator training simulation with realistic warehouse and yard environments. Covers load handling, stacking operations, and safe driving practices with physics-based forklift controls.",
    videoSrc: "/videos/forklift-demo.mp4",
    tags: ["Forklift", "High Risk", "3D"]
  },
  {
    title: "Interactive Calculations Demo",
    description: "Real-time sling angle and load factor calculations built into the training platform. Learners work through realistic lifting scenarios with instant visual feedback on WLL, leg tension, and safety margins.",
    videoSrc: "/videos/calculations-demo.mp4",
    tags: ["Dogging", "Calculations", "Interactive"]
  },
  {
    title: "Web Design & Interactivity Showcase",
    description: "Walkthrough of the interactive dogging course platform showing the LMS interface, 3D equipment viewers, animated calculators, and responsive course content delivery system.",
    videoSrc: "/videos/web-design-interactivity.mp4",
    tags: ["LMS", "Web Design", "Interactive"]
  },
];

const SimulationDemosPage: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem('demos_unlocked') === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      setIsUnlocked(true);
      sessionStorage.setItem('demos_unlocked', 'true');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center space-y-6">
            <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-10 h-10 text-accent-gold" />
            </div>
            <div>
              <h1 className="text-3xl font-black font-heading mb-2">Private Demos</h1>
              <p className="text-gray-400">Enter the access code to view simulation demos.</p>
            </div>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Enter access code"
                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-center text-lg tracking-widest focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all`}
                autoFocus
              />
              {error && (
                <p className="text-red-400 text-sm">Incorrect access code. Please try again.</p>
              )}
              <button
                type="submit"
                className="w-full bg-accent-gold text-[#2D1B4E] py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-gold/20"
              >
                Unlock Demos
              </button>
            </form>
            <p className="text-xs text-gray-500">
              Don't have a code? <Link to="/contact" className="text-accent-gold hover:underline">Request access</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-purple-deep relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Gamepad2 className="w-96 h-96 text-accent-gold" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
              <Play className="w-3 h-3 mr-2" /> Live Demos
            </div>
            <h1 className="text-5xl font-black font-heading mb-4">
              Simulation <span className="text-accent-gold">Demos</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              See the quality of training simulations I build for RTOs. These are real demos from active projects - not mockups or concept videos.
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {demos.map((demo, i) => (
            <div key={i} className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-accent-gold/30 transition-all">
              {/* Video */}
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={demo.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {demo.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full text-accent-gold text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-3">{demo.title}</h3>
                <p className="text-gray-400 leading-relaxed">{demo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Equipment Models */}
      <section className="py-16 bg-[#120a1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
              <Box className="w-3 h-3 mr-2" /> Interactive 3D
            </div>
            <h2 className="text-3xl font-black font-heading mb-4">3D Equipment Models</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Interactive 3D models of rigging and dogging equipment used in our training simulations. Click and drag to rotate, scroll to zoom.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models3D.map((model, i) => (
              <div key={i} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-accent-gold/30 transition-all">
                <div className="aspect-square bg-gradient-to-b from-gray-900 to-black">
                  <model-viewer
                    src={model.src}
                    alt={model.name}
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    exposure="0.8"
                    loading="lazy"
                    environment-image="neutral"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white mb-1">{model.name}</h4>
                  <p className="text-gray-400 text-sm">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full text-accent-gold text-xs font-black uppercase tracking-widest mb-6">
            <Camera className="w-3 h-3 mr-2" /> Screenshots
          </div>
          <h2 className="text-3xl font-black font-heading mb-4">Simulation & LMS Screenshots</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Real screenshots from active simulation environments and the LMS dogging course platform.</p>
        </div>

        {/* Simulation Screenshots */}
        <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
          <Gamepad2 className="w-5 h-5 mr-2" /> 3D Simulation Environments
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {screenshots.filter(s => s.category === 'simulation').map((shot, i) => (
            <div key={i} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-accent-gold/30 transition-all">
              <div className="aspect-video overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm">{shot.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* LMS Screenshots */}
        <h3 className="text-xl font-bold text-accent-gold mb-6 flex items-center">
          <Monitor className="w-5 h-5 mr-2" /> LMS Course Platform
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.filter(s => s.category === 'lms').map((shot, i) => (
            <div key={i} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-accent-gold/30 transition-all">
              <div className="aspect-video overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm">{shot.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full text-accent-gold text-xs font-black uppercase tracking-widest mb-6">
            <Calculator className="w-3 h-3 mr-2" /> Interactive Tools
          </div>
          <h2 className="text-3xl font-black font-heading mb-4">Interactive Calculators</h2>
          <p className="text-gray-400">Fully interactive training tools built into our LMS platform</p>
        </div>

        <div className="space-y-16">
          {/* Sling Angle Calculator */}
          <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-8 border-b border-white/10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider">Dogging</span>
                <span className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full text-accent-gold text-xs font-bold uppercase tracking-wider">Interactive</span>
                <span className="px-3 py-1 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider">Calculator</span>
              </div>
              <h3 className="text-2xl font-black mb-3">Sling Angle Calculator</h3>
              <p className="text-gray-400 leading-relaxed">Interactive SVG-based calculator showing how sling angles affect leg tension and working load limits. Supports Grade 80/100 chain, flat slings (AS 1353), and round slings (AS 4497) with real WLL data tables.</p>
            </div>
            <div className="bg-white" style={{ height: '900px' }}>
              <iframe
                src="https://rtoweblms-production-7f62.up.railway.app/dogging-sling-angles"
                className="w-full h-full border-0"
                title="Sling Angle Calculator"
              />
            </div>
          </div>

          {/* Load Factor Calculator */}
          <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-8 border-b border-white/10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider">Dogging</span>
                <span className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full text-accent-gold text-xs font-bold uppercase tracking-wider">Interactive</span>
                <span className="px-3 py-1 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider">Calculator</span>
              </div>
              <h3 className="text-2xl font-black mb-3">Load Factor Calculator</h3>
              <p className="text-gray-400 leading-relaxed">Learn how different slinging methods (direct, choke, basket) and load shapes affect lifting capacity. Visual demonstrations with real-time calculations using Australian Standard load factors.</p>
            </div>
            <div className="bg-white" style={{ height: '900px' }}>
              <iframe
                src="https://rtoweblms-production-7f62.up.railway.app/dogging-load-factors"
                className="w-full h-full border-0"
                title="Load Factor Calculator"
              />
            </div>
          </div>
          {/* Winch Setup Calculator */}
          <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-8 border-b border-white/10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider">Rigging</span>
                <span className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full text-accent-gold text-xs font-bold uppercase tracking-wider">Interactive</span>
                <span className="px-3 py-1 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider">Calculator</span>
              </div>
              <h3 className="text-2xl font-black mb-3">Winch Setup & Mechanical Advantage</h3>
              <p className="text-gray-400 leading-relaxed">Interactive purchase system and winch drum visualisation. Adjust the number of parts in the purchase system to see how mechanical advantage changes line pull, speed, and anchor loads. Includes fleet angle calculations and real-time SVG diagrams.</p>
            </div>
            <div className="bg-white" style={{ height: '900px' }}>
              <iframe
                src="https://rtoweblms-production-7f62.up.railway.app/winch-setup"
                className="w-full h-full border-0"
                title="Winch Setup Calculator"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes These Different */}
      <section className="py-16 bg-[#120a1f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-heading mb-4">What Makes These Different</h2>
            <p className="text-gray-400">Built by someone who's actually done the job</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Realistic Physics",
                text: "Load behaviour, wind effects, and equipment responses based on real-world operational experience."
              },
              {
                icon: Gamepad2,
                title: "Purpose-Built Scenarios",
                text: "Every scenario is designed around actual training package requirements and assessment criteria."
              },
              {
                icon: Play,
                title: "Evidence-Based",
                text: "Every interaction is logged. Collision data, time-on-task, and competency markers for ASQA compliance."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/5 text-center">
                <item.icon className="w-10 h-10 text-cyan-400 mb-4 mx-auto" />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-accent-gold rounded-[2rem] p-12 text-center shadow-2xl shadow-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/20 blur-3xl rounded-full"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#2D1B4E] font-heading">Want a Custom Simulation for Your RTO?</h2>
            <p className="text-lg text-[#2D1B4E]/80 font-medium max-w-xl mx-auto">
              Let's discuss what training scenarios you need and I'll show you what's possible.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-[#2D1B4E] text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl">
              Book a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimulationDemosPage;

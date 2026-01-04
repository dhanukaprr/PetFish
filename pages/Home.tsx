import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Truck, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <RevealOnScroll>
                <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6 backdrop-blur-sm">
                  New 2024 Collection Available
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                  Discover the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Ocean's Magic
                  </span>
                </h1>
                <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Transform your space with ethically sourced, vibrant aquatic life. From beginner-friendly guppies to rare exotic species, we bring the reef to you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/products" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center">
                    Explore Collection <ArrowRight size={20} className="ml-2" />
                  </Link>
                  <Link to="/contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 backdrop-blur-md transition-all">
                    Contact Experts
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Hero Image */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
               <RevealOnScroll delay={200}>
                <div className="relative z-10 animate-float">
                  {/* Using a placeholder that looks like a fish/aquarium */}
                  <img 
                    src="https://picsum.photos/id/152/600/600" 
                    alt="Exotic Fish" 
                    className="rounded-[3rem] shadow-2xl border-4 border-white/10 w-full max-w-md mx-auto object-cover aspect-[4/5]"
                  />
                  {/* Floating Glass Card */}
                  <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl max-w-[200px]">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Health Guarantee</p>
                        <p className="text-sm font-bold text-white">14 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Fin & Flora?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">We don't just sell fish; we curate aquatic ecosystems designed to thrive in your home.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: "Ethically Sourced",
                desc: "We partner directly with sustainable breeders to ensure every fish is healthy and ethically raised."
              },
              {
                icon: <Truck size={32} />,
                title: "Safe Shipping",
                desc: "Our specialized packaging ensures your aquatic friends arrive safe, warm, and stress-free."
              },
              {
                icon: <Droplets size={32} />,
                title: "Expert Support",
                desc: "Get 24/7 access to our team of marine biologists for any care questions you might have."
              }
            ].map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all hover:-translate-y-2 group">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-slate-950 -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Build Your Ecosystem?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Start your journey today with our beginner-friendly kits and premium selection.
            </p>
            <Link to="/products" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-cyan-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              Shop All Products
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
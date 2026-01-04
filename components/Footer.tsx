import React from 'react';
import { Waves, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-1.5 rounded-lg bg-cyan-500 text-white">
                <Waves size={20} />
              </div>
              <span className="text-xl font-bold text-white">Fin & Flora</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Bringing the mesmerizing beauty of the underwater world directly to your living room. Sustainable, ethical, and beautiful.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Shop</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {['Freshwater Fish', 'Saltwater Fish', 'Plants', 'Tanks & Equipment', 'Food & Care'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {['About Us', 'Sustainability', 'Care Guides', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe for care tips and new arrivals.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-500"
              />
              <button className="w-full bg-white text-slate-900 font-medium py-2.5 rounded-lg hover:bg-cyan-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Fin & Flora. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
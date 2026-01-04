import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const tempErrors: Partial<ContactFormData> = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 3 seconds
        setTimeout(() => setStatus('idle'), 4000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Section */}
        <div className="space-y-8">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Have questions about tank setup, compatibility, or maintenance? Our team of aquatic specialists is here to help you succeed.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail className="text-cyan-400" size={24} />, title: "Email Us", info: "support@finandflora.com" },
                { icon: <Phone className="text-cyan-400" size={24} />, title: "Call Us", info: "+1 (555) 123-4567" },
                { icon: <MapPin className="text-cyan-400" size={24} />, title: "Visit Us", info: "42 Coral Reef Way, Ocean City, CA" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-lg bg-cyan-500/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-slate-400">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Form Section */}
        <div>
          <RevealOnScroll delay={200}>
            <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>

              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField 
                    label="Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    error={errors.name} 
                  />
                  <InputField 
                    label="Email" 
                    name="email" 
                    type="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    error={errors.email} 
                  />
                </div>
                <InputField 
                  label="Subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  error={errors.subject} 
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                    placeholder="Tell us about your tank..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-xs flex items-center mt-1"><AlertCircle size={12} className="mr-1"/> {errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === 'submitting' ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : status === 'success' ? (
                    <>Sent Successfully <CheckCircle size={20} className="ml-2" /></>
                  ) : (
                    <>Send Message <Send size={20} className="ml-2" /></>
                  )}
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 transform transition-all duration-500 ${status === 'success' ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <CheckCircle size={24} />
        <div>
          <h4 className="font-bold">Success!</h4>
          <p className="text-sm text-green-100">Your message has been sent.</p>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, error, className = "", ...props }) => (
  <div className="space-y-2 w-full">
    <label className="text-sm font-medium text-slate-300">{label}</label>
    <input
      {...props}
      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all ${
        error 
          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
          : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20'
      } ${className}`}
    />
    {error && (
      <p className="text-red-400 text-xs flex items-center mt-1"><AlertCircle size={12} className="mr-1"/> {error}</p>
    )}
  </div>
);

export default Contact;
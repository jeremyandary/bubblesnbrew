import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function EmailSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('email_signups').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting email signup:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Mail className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's stay in touch
          </h2>
          <p className="text-xl text-gray-300">
            Get updates, offers, and event inspiration delivered to your inbox
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-6 py-4 rounded-full bg-white text-black outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-6 py-4 rounded-full bg-white text-black outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-white text-black outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <p className="text-green-400 font-semibold">Welcome to the list!</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-500/20 border-2 border-red-500 rounded-full flex items-center justify-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-400 font-semibold">Already subscribed or error occurred</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </section>
  );
}

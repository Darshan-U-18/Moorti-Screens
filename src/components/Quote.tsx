import React, { useState } from 'react';
import { siteConfig } from '../config/site';

interface QuoteFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  size: string;
  printingType: string;
  requirements: string;
}

export const Quote: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    size: '',
    printingType: '',
    requirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const products = [
    "Business Card", "Letterhead", "Brochure", "Leaflet", "Invitation",
    "Sticker", "Bill Book", "ID Card", "Folder", "Menu Card", "Certificate", "Other"
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.product) newErrors.product = 'Please select a product';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the formatted WhatsApp message
    const message =
`*NEW PRINTING QUOTE INQUIRY - MOORTI SCREENS* 📋
-----------------------------------------
👤 *Name:* ${formData.name.trim()}
🏢 *Company:* ${formData.company.trim() || 'Not specified'}
📱 *Phone:* ${formData.phone.trim()}
✉️ *Email:* ${formData.email.trim() || 'Not specified'}

📦 *Product:* ${formData.product}
🔢 *Quantity:* ${formData.quantity.trim() || 'Not specified'}
📐 *Size:* ${formData.size.trim() || 'Not specified'}
⚙️ *Printing Type:* ${formData.printingType || 'Not specified'}
📝 *Requirements:* ${formData.requirements.trim() || 'None'}
-----------------------------------------
*(Official Quote PDF downloaded on device for attachment)*`;

    // Construct WhatsApp API URL
    const cleanNumber = siteConfig.contact.whatsapp.replace(/\D/g, '');
    const url = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`;

    // Redirect directly to WhatsApp — no confirmation screen
    window.location.href = url;
  };

  return (
    <section id="quote" className="py-24 bg-navy-800 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Something <span className="text-gradient">Printed?</span>
          </h2>
          <p className="text-silver-400">
            Tell us what you need and we'll help you choose the right printing solution.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
            {/* Row 1: Name + Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-silver-200 mb-2">Name *</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-navy-900 border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white outline-none transition-colors`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-silver-200 mb-2">Company Name</label>
                <input
                  type="text" id="company" name="company"
                  value={formData.company} onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full bg-navy-900 border border-white/10 focus:border-gold/50 rounded px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-silver-200 mb-2">Phone / WhatsApp *</label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  placeholder="Your Number"
                  className={`w-full bg-navy-900 border ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white outline-none transition-colors`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-silver-200 mb-2">Email</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-navy-900 border border-white/10 focus:border-gold/50 rounded px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Product + Quantity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-silver-200 mb-2">Product *</label>
                <select
                  id="product" name="product"
                  value={formData.product} onChange={handleChange}
                  className={`w-full bg-navy-900 border ${errors.product ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white outline-none transition-colors appearance-none`}
                >
                  <option value="">Select a product...</option>
                  {products.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.product && <p className="text-red-400 text-xs mt-1">{errors.product}</p>}
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-silver-200 mb-2">Quantity</label>
                <input
                  type="text" id="quantity" name="quantity"
                  value={formData.quantity} onChange={handleChange}
                  placeholder="e.g. 1000 pcs"
                  className="w-full bg-navy-900 border border-white/10 focus:border-gold/50 rounded px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Size + Printing Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-silver-200 mb-2">Size (if known)</label>
                <input
                  type="text" id="size" name="size"
                  value={formData.size} onChange={handleChange}
                  placeholder="e.g. A4, 90x50mm"
                  className="w-full bg-navy-900 border border-white/10 focus:border-gold/50 rounded px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="printingType" className="block text-sm font-medium text-silver-200 mb-2">Printing Type</label>
                <select
                  id="printingType" name="printingType"
                  value={formData.printingType} onChange={handleChange}
                  className="w-full bg-navy-900 border border-white/10 focus:border-gold/50 rounded px-4 py-3 text-white outline-none transition-colors appearance-none"
                >
                  <option value="">Not Sure</option>
                  <option value="Screen Printing">Screen Printing</option>
                  <option value="Offset Printing">Offset Printing</option>
                  <option value="Multicolour Printing">Multicolour Printing</option>
                </select>
              </div>
            </div>

            {/* Row 5: Additional Requirements */}
            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-silver-200 mb-2">Additional Requirements</label>
              <textarea
                id="requirements" name="requirements"
                value={formData.requirements} onChange={handleChange}
                rows={4}
                placeholder="Tell us more about your project..."
                className="w-full bg-navy-900 border border-white/10 focus:border-gold/50 rounded px-4 py-3 text-white outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/5 gap-6">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-gold to-yellow-600 text-navy-900 font-bold hover:shadow-[0_0_15px_rgba(217,184,108,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Request a Quote
              </button>

              <div className="flex items-center gap-2 text-sm text-silver-400">
                <span>Prefer WhatsApp?</span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I need a quote for printing.')}`}
                  target="_blank" rel="noreferrer"
                  className="text-white hover:text-gold transition-colors font-medium border-b border-white/20 hover:border-gold pb-0.5"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

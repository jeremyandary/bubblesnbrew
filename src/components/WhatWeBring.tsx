import { CheckCircle2 } from 'lucide-react';

const features = [
  'Certified bartenders',
  'Custom menus',
  'Full setup + breakdown',
  'Alcohol guidance',
];

export default function WhatWeBring() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What we bring to your event
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#FAF9F6] p-6 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
              <span className="text-lg font-semibold text-black">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

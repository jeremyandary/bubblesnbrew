import { Check } from 'lucide-react';

const standardPackage = {
  name: 'Standard Package',
  price: '$1,250.00',
  features: [
    'Service for up to 4 hours / up to 100 guests',
    '2 Certified bartenders',
    'Service with 5 liquors, wine, beer & 2 Signature cocktails',
    'All bar tools, cups, napkins, ice',
    'Basic mixers (coke, sprite, ginger ale, tonic, club soda, cranberry juice, pineapple juice)',
    'Fresh juices: lemon/lime',
    'Standard garnishes, house made syrups',
    'Mobile bar trailer or portable bar, & Coolers',
    'Premium bar set up and décor',
    'Self-serve water station',
    'Customized cocktail menu consultation',
    'General liquor & liability insurance',
    'Set up/ breakdown of bar',
  ],
};

const addOns = [
  { name: 'Additional bartender', price: '$50.00 per hour' },
  { name: 'Additional guests', price: '$200.00 per 50 additional guests' },
  { name: 'Additional hours', price: '$100.00' },
  { name: 'Pub table with or without cover', price: '$20.00' },
  { name: 'Additional signature cocktail', price: '$50.00' },
  { name: 'Additional Bar set up', price: '$200.00' },
  { name: 'Champagne Service', price: '$25.00' },
  { name: 'Dirty soda', price: '$3.00 per person' },
  { name: 'Package incl. 35 miles of travel from 48047', price: 'additional miles 75¢ per mile' },
  { name: 'Premium garnishes', price: 'TBD' },
  { name: 'Large cubed ice', price: '$1.00 per person' },
  { name: 'Alcohol or Mocktail Slushies', price: '$100.00' },
  { name: 'Glassware', price: 'TBD' },
];

const additionalServices = [
  'Mobile trailer rental for Photo shoots',
  'Custom cocktail classes (Minimum 8 people)',
  'Mini pop-up Happy Hour service (1-2-hour events for smaller groups)',
];

export default function Packages() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Packages & Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Professional mobile bar service for your special event
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-2 md:mb-0">
                {standardPackage.name}
              </h3>
              <div className="text-3xl md:text-4xl font-bold text-black">
                {standardPackage.price}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {standardPackage.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">
                Optional Add-Ons
              </h3>
              <ul className="space-y-3">
                {addOns.map((addOn, index) => (
                  <li key={index} className="flex justify-between items-start gap-4 text-gray-700">
                    <span className="flex-1">{addOn.name}</span>
                    <span className="font-semibold text-black whitespace-nowrap text-sm">
                      {addOn.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">
                We Also Offer
              </h3>
              <p className="text-gray-600 mb-6 italic">
                We would be happy to provide a quote
              </p>
              <ul className="space-y-4">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#FAF9F6] text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all border-2 border-black"
            >
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

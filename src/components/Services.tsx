import { Heart, PartyPopper, Briefcase, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Elegant mobile bar setups to toast your special day',
    image: '/0768_20171021_Andary-E.jpg',
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    description: 'Fun, memorable experiences for birthdays and celebrations',
    image: '/C5F56BC5-6F83-4BAA-99A4-2AB10169F596_VSCO.JPG',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional bar service for networking and team events',
    image: '/D074D6E2-8420-45E4-AA93-E4D74572C888_VSCO.JPG',
  },
  {
    icon: Sparkles,
    title: 'Custom Experiences',
    description: 'Tailored bar setups designed just for your vision',
    image: '/FullSizeRender_VSCO.JPG',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            A few ways we can have fun together
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 h-80 shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <service.icon className="w-8 h-8 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
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

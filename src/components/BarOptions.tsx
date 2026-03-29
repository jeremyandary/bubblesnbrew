const barOptions = [
  {
    name: 'The Mobile Trailer Bar',
    description: 'Full-service trailer bar for larger events with complete beverage station capabilities',
    image: '/1D29F6F8-0CD9-48A7-B86C-0C3FAAB76B87.JPG',
  },
  {
    name: 'The Classic Bar',
    description: 'Traditional mobile bar setup with elegant design for weddings and upscale events',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function BarOptions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Choose your bar setup
          </h2>
          <p className="text-xl text-gray-600">
            Each option brings its own unique charm to your event
          </p>
        </div>

        <div className="space-y-16">
          {barOptions.map((bar, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-xl h-96">
                  <img
                    src={bar.image}
                    alt={bar.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {bar.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {bar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 fill-[#FAF9F6]"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

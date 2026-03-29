export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              About Bubbles & Brews
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're a premier mobile bar service bringing exceptional beverage experiences to
              weddings, private parties, and corporate events throughout Metro Detroit and
              beyond.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our focus is on creating stress-free, memorable moments for you and your guests.
              With professional bartending, elevated presentation, and custom drink menus
              tailored to your vision, we handle every detail so you can enjoy your celebration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From intimate gatherings to grand celebrations, we bring the bar to you with
              style, sophistication, and a commitment to exceptional service.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 mt-6"
            >
              Book Now
            </button>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/3459320753710179698.JPEG"
                  alt="Cocktails and celebration"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-full opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-black rounded-full opacity-10"></div>
            </div>
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

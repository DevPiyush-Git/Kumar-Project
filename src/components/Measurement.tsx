interface MeasurementProps {
  onBookingClick: () => void;
}

function Measurement({ onBookingClick }: MeasurementProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#1e4620]">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <div className="relative h-[500px] md:h-[600px]">
            <img
              src="/measurment.jpeg"
              alt="Master tailor taking measurements"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 max-w-xl">
                Precision in Every Measurement
              </h2>
              <p className="text-lg md:text-xl text-[#f6ddab] mb-8 max-w-lg leading-relaxed">
                Our master tailors use time-honored techniques to ensure your
                garment fits perfectly. Experience the difference that 26 years
                of expertise makes.
              </p>

              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-[#f6ddab] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f6ddab] text-[#1e4620] px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Schedule Your Fitting
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-[#f6ddab]/30">
            <h3 className="text-[#f6ddab] text-5xl font-bold mb-2">15+</h3>
            <p className="text-white">Measurement Points</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-[#f6ddab]/30">
            <h3 className="text-[#f6ddab] text-5xl font-bold mb-2">48hrs</h3>
            <p className="text-white">Express Service Available</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-[#f6ddab]/30">
            <h3 className="text-[#f6ddab] text-5xl font-bold mb-2">100%</h3>
            <p className="text-white">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Measurement;

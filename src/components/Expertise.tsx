import { Sparkles, Ruler, Shirt, Palette } from "lucide-react";

interface ExpertiseProps {
  onBookingClick: () => void;
}

function Expertise({ onBookingClick }: ExpertiseProps) {
  const expertiseItems = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Traditional Dishdasha",
      description:
        "Expert craftsmanship in classic and modern dishdasha styles with perfect fit and finish",
      image: "/expertise1.jpg",
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Custom Measurements",
      description:
        "Precise measuring techniques ensuring your garment fits like it was made just for you",
      image: "/expertise2.jpg",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Premium Fabrics",
      description:
        "Finest selection of imported fabrics from around the world for ultimate comfort",
      image: "/expertise3.jpg",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Special Occasions",
      description:
        "Bespoke designs for weddings, Eid, and special celebrations with intricate detailing",
      image: "/expertise4.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#1e4620]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f6ddab] to-[#d4af37] mx-auto mb-6"></div>
          <p className="text-[#f6ddab] text-lg max-w-2xl mx-auto">
            Master tailors specializing in the art of Arabic menswear with
            unparalleled attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="text-[#2d5f2e] mb-3">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#1e4620] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <button
                  onClick={onBookingClick}
                  className="bg-gradient-to-r from-[#2d5f2e] to-[#1e4620] hover:from-[#3a7a3c] hover:to-[#2d5f2e] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-[#f6ddab]"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;

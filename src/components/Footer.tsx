import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#1e4620] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#f6ddab] mb-4">Heritage Tailors</h3>
            <p className="text-gray-300 mb-4">
              Celebrating 26 years of excellence in traditional Arabic menswear tailoring. Your trusted partner for quality and authenticity.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#f6ddab] mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#f6ddab] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+971 4 XXX XXXX</p>
                  <p className="text-gray-300">+971 50 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#f6ddab] mt-1 flex-shrink-0" />
                <p className="text-gray-300">info@heritagetailors.ae</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f6ddab] mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Al Fahidi Street, Bur Dubai<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#f6ddab] mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#f6ddab] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#f6ddab] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#f6ddab] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div>
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">Saturday - Thursday: 9:00 AM - 9:00 PM</p>
              <p className="text-gray-300 text-sm">Friday: 2:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Heritage Tailors. All rights reserved. | 26 Years of Excellence Since 1999
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

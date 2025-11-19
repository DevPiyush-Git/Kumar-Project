import { useState, FormEvent } from "react";
import {
  X,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import Loader from './Loader';
import { sanitizeInput, validatePhone, validateEmail, rateLimiter } from '../utils/security';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
  message: string;
}

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.date) {
      newErrors.date = "Appointment date is required";
    }

    if (!formData.time) {
      newErrors.time = "Appointment time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveToGoogleSheets = async (data: FormData) => {
    const submissionData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      date: data.date,
      time: data.time,
      message: data.message,
      submissionDate: new Date().toLocaleString(),
    };

    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbxCJXxXBCDOLpIvnnLZPvWVAqHyKrHbvgZAqu0wwCUdL6zjd3Uaen4MRZ7WmJTd2ASOZQ/exec";

      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });
        console.log("Data sent to Google Sheets");
      } else {
        throw new Error("Google Script URL not configured");
      }
    } catch (error) {
      console.error("Error saving to Google Sheets:", error);
      // Fallback: save to localStorage
      const existingData = localStorage.getItem("bookingData");
      const bookings = existingData ? JSON.parse(existingData) : [];
      bookings.push(submissionData);
      localStorage.setItem("bookingData", JSON.stringify(bookings));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    const userIdentifier = formData.email || formData.phone;
    if (!rateLimiter.canSubmit(userIdentifier)) {
      setErrors({ email: "Too many attempts. Please try again in 15 minutes." });
      return;
    }

    if (validateForm()) {
      setIsLoading(true);
      
      // Sanitize form data before submission
      const sanitizedData = {
        ...formData,
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        address: sanitizeInput(formData.address),
        message: sanitizeInput(formData.message)
      };
      
      await saveToGoogleSheets(sanitizedData);
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          date: "",
          time: "",
          message: "",
        });
        onClose();
      }, 3000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="sticky top-0 bg-gradient-to-r from-[#2d5f2e] to-[#1e4620] text-white p-6 rounded-t-2xl z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Book Your Appointment</h2>
              <p className="text-[#f6ddab] mt-1">
                Experience 26 years of excellence
              </p>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <Loader />
              </div>
              <h3 className="text-2xl font-bold text-[#1e4620] mb-3">
                Submitting Your Booking...
              </h3>
              <p className="text-gray-600">
                Please wait while we process your appointment request.
              </p>
            </div>
          ) : isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1e4620] mb-3">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600">
                Thank you for choosing Kumar & Co. We'll contact you
                shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-[#1e4620] font-semibold mb-2">
                  <User className="w-5 h-5" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f2e] transition-all ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-[#1e4620] font-semibold mb-2">
                    <Phone className="w-5 h-5" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f2e] transition-all ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="+971 XX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#1e4620] font-semibold mb-2">
                    <Mail className="w-5 h-5" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f2e] transition-all ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[#1e4620] font-semibold mb-2">
                  <MapPin className="w-5 h-5" />
                  Address *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f2e] transition-all ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-[#1e4620] font-semibold mb-2">
                    <Calendar className="w-5 h-5" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f2e] transition-all ${
                      errors.date ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#1e4620] font-semibold mb-2">
                    <Calendar className="w-5 h-5" />
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleChange("time", e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f2e] transition-all ${
                      errors.time ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[#1e4620] font-semibold mb-2">
                  <MessageSquare className="w-5 h-5" />
                  Special Requests (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f2e] transition-all resize-none"
                  placeholder="Tell us about your requirements or any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2d5f2e] to-[#1e4620] hover:from-[#3a7a3c] hover:to-[#2d5f2e] text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Confirm Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingModal;

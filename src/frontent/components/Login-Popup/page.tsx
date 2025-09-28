// src/components/LoginModal.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    company: "",
    services: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose(); // Close after submit
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 p-3 flex items-center justify-center bg-[#0000005b] backdrop-blur bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative"
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-center  text-gray-800">
            Letter of Credit Application
          </h2>
          <p className="text-center mb-6 pt-1 text-[15px]">Please complete this form to initiate your Letter of Credit application. All fields marked with * are required.    </p>

          <form onSubmit={handleSubmit} className="space-y-4" >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-0 "
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-0"
            />

            {/* Number */}
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-0"
            />

            {/* City */}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring-0"
            />

            {/* Company */}
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring-0"
            />

            {/* Services Dropdown */}
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded bg-white focus:ring-0"
            >
              <option value="">Select a Service</option>
              <option value="Letters of Credit">Letters of Credit</option>
              <option value="Bank Guarantee">Bank Guarantee </option>
              <option value="SBLC">SBLC</option>
              <option value="Proof of Funds">Proof of Funds </option>
              <option value="Business IBAN">Business IBAN</option>
              <option value="Card issuing ">Card issuing </option>
              <option value="Crypto cards">Crypto cards</option>
              <option value="Credit/debit cards">Credit/debit cards</option>
              <option value="Corporate Expense cards">Corporate Expense cards</option>
              <option value="Prepaid/Gift Cards">Prepaid/Gift Cards</option>

            </select>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

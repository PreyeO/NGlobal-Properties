// ContactForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      to_name: "NGlobal Properties",
      from_name: formData.name,
      from_email: formData.email,
      // subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 4000,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error(" Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B0082]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B0082]"
        />
      </div>

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B0082]"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        rows={6}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B0082]"
      />

      <div className="text-center">
        <Button
          type="submit"
          className="bg-[#4B0082] text-white px-8 py-4 rounded-2xl hover:bg-[#4B0082]/90 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>

      <ToastContainer />
    </form>
  );
}

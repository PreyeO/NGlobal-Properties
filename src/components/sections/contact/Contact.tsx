// Contact.tsx
import ContactForm from "./ContactForm";
import ContactMethods from "./ContactMethods";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Form */}
        <div className="flex-1">
          <ContactForm />
        </div>

        {/* Contact Methods */}
        <div className="flex-1 flex flex-col gap-6">
          <ContactMethods />
        </div>
      </div>
    </section>
  );
}

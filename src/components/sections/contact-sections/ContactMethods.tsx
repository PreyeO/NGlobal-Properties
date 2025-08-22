import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactMethods() {
  const contacts = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: "Phone",
      value: "+234 800 123 4567",
      link: "tel:+2348001234567",
      bg: "bg-[#4B0082]",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      label: "WhatsApp",
      value: "+234 808 888 8441",
      // 👇 prefilled WhatsApp message
      link: "https://wa.me/2348088888441?text=Hello%20NGlobal%20Properties!%20I%27m%20interested%20in%20your%20services.",
      bg: "bg-green-500",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: "Email",
      value: "info@nglobalproperty.com",
      link: "mailto:info@nglobalproperty.com",
      bg: "bg-[#4B0082]/80",
    },
  ];

  return (
    <div className="space-y-6">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-4 p-4 rounded-xl ${contact.bg} hover:scale-105 transition-transform`}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
            {contact.icon}
          </div>
          <div className="text-white">
            <p className="font-semibold">{contact.label}</p>
            <p className="text-sm">{contact.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

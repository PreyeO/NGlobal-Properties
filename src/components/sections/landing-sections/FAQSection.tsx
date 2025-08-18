// FAQSection.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I book a property viewing?",
    answer:
      "You can book a free consultation using our 'Book a Free Consultation' button or contact our agents directly through the inquiry form.",
  },
  {
    question: "Do you offer investment advisory services?",
    answer:
      "Yes! Our team provides expert guidance to help you make profitable real estate decisions.",
  },
  {
    question: "Are your properties verified and secure?",
    answer:
      "Absolutely. All listed properties go through thorough verification, including C of O checks, survey plans, and legal documentation.",
  },
  {
    question: "Can I buy properties abroad?",
    answer:
      "Yes, we offer global property listings and provide assistance with all international transaction requirements.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Answers to common questions from our clients.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-4xl mx-auto space-y-4"
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border rounded-lg"
          >
            <AccordionTrigger className="px-6 text-[#4B0082]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

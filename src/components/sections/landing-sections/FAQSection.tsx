// FAQSection.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/data";

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 px-6 md:px-12 bg-white">
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
            <AccordionTrigger className="px-6 text-[#4B0082] text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-700 text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

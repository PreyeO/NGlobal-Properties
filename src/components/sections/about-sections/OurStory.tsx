// OurStory.tsx
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold honesty and strong moral principles in every interaction and decision.",
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest quality in our services, ensuring client satisfaction and long-term value.",
  },

  {
    title: "Customer Focus",
    description:
      "Putting our clients at the heart of everything we do, delivering tailored solutions for their needs.",
  },
];

export default function OurStory() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Story Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              North Global Property is the next-rated real estate company
              striving to bring a balance to the needs of landed properties
              globally. We provide quality and affordable properties to those
              who choose to invest in an affordable yet superior luxury. We buy,
              sell, and develop properties, empowering individuals and families
              to achieve financial independence through real estate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/hero-bg.jpg"
              alt="Our Story"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Commitment Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/hero-bg.jpg"
              alt="Our Commitment"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Commitment
            </h2>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Empower individuals and families with expert guidance,
                exceptional service, and diverse property options. With
                integrity, trust, and understanding of client needs, we ensure
                everyone finds their perfect home, land, or investment
                opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be globally recognized for client satisfaction, innovative
                solutions, and positive impact on communities, ensuring access
                to quality housing and land investments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Block - image on right, text on left */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>

            {coreValues.map((value, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/hero-bg.jpg"
              alt="Our Core Values"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

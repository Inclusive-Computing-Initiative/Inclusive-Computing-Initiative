import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TeacherImage from './teacher.jpg';
import pic1 from './pic1crop.png';
import pic2 from './pic3crop.png';
import pic4 from './two.jpg';

const slides = [pic1, pic2, pic4];

const approach = [
  {
    title: 'Visual Learning',
    text: "Many children are visual learners. That's why our curriculum focuses on representing topics in a tangible and engaging way, using hands-on examples and vivid illustrations to ensure that every student sufficiently understands the topics.",
  },
  {
    title: 'Individual Attention',
    text: 'We ensure that every student gets individual attention from our highly qualified teachers. This attention is necessary to create a safe and welcoming environment and to understand and care for the needs of each and every student.',
  },
  {
    title: 'Custom Pace',
    text: 'Is the student eager to learn, or not? Do they grasp concepts quickly, or need some time to think it through? Either way, we can accommodate. We let each student learn at their own pace while still encouraging and challenging them to improve.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-20 pt-16 lg:flex-row lg:items-center lg:pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2"
        >
          <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Inclusive Computing Initiative
          </h1>
          <p className="mt-4 text-xl italic text-ink-400">Everyone can learn and create.</p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link to="/hackathon" className="btn-primary">
              CodeTogether Hackathon
            </Link>
            <a
              href="https://hcb.hackclub.com/donations/start/inclusive-computing-initiative"
              className="btn-secondary"
            >
              Donate Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-lg">
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Students learning together"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === slide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === slide ? 'bg-brand-600' : 'bg-ink/15'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={TeacherImage}
            alt="A teacher working with a student"
            className="w-full rounded-card object-cover shadow-md lg:order-2"
          />
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:order-1"
          >
            <span className="section-eyebrow">Testimonials</span>
            <p className="mt-4 text-xl leading-relaxed text-ink">
              The class you taught my son was amazing! He learned a valuable skill and I am
              hoping this class will make way for further learning & development. The
              personalized attention to students was very encouraging and motivated my son to
              attend the sessions.
            </p>
            <cite className="mt-4 block not-italic text-ink-400">&mdash; Anonymous Parent</cite>
          </motion.blockquote>
        </div>
      </section>

      <section className="bg-brand-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-ink">About Us</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              The Inclusive Computing Initiative is a non-profit organization that aims to
              increase knowledge of Computer Science among students with special needs. We
              believe that everyone deserves an equal opportunity to learn and create.
            </p>
            <Link to="/about" className="btn-secondary mt-6">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-ink"
          >
            Our Approach
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-card border border-ink/5 bg-cream p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-ink-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-600 py-16 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interested? Take a look at our upcoming classes.
          </h2>
          <Link
            to="/classes"
            className="mt-6 rounded-full bg-white px-8 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            View Classes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import { useEffect } from 'react';
import './Hackathon.css'
import { motion } from 'framer-motion';
import { ArrowRight, Check, Calendar, MapPin, Users, Code, Utensils, Presentation, Star, CheckCircle, Mail, Phone } from 'lucide-react';
import ctaImage from './chem.jpg';

const Hackathon = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const facts = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "August 16th, 2026",
      detail: "1:30 PM – 3:30 PM",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Mentored Teams",
      detail: "Grouped by age & interest",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Plano Davis Library",
      detail: "Accessible venue",
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      title: "Snacks Included",
      detail: "Dietary accommodations available",
    },
  ];

  const whatHappens = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Learn to Code",
      description: "No experience needed — every team has a mentor trained in neurodivergent learning styles."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build in Teams",
      description: "Small groups matched by age and interest, working together on one project."
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Present Your Way",
      description: "Multiple formats to choose from — no pressure, no single 'right' way to share your work."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Finish Something Real",
      description: "Every team leaves with a finished project, whatever their starting point."
    }
  ];

  const accessibilityCommitments = [
    "Mentors trained in neurodivergent learning styles",
    "Clear, consistent communication throughout the event",
    "Dietary accommodations for all meal provisions",
    "Multiple presentation format options",
    "Dedicated quiet zones and break areas",
    "Anti-bullying policy and supportive atmosphere"
  ];

  return (
    <div className="hackathon-page min-h-screen bg-white overflow-hidden">
      <main>

        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-cream">
          <div className="container-section relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="section-eyebrow mb-6">
                First Hackathon for Neurodivergent Students
              </div>

              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto mb-6 pb-2 text-ink leading-[1.1]">
                <span className="text-brand-600">CodeTogether</span>
              </h1>

              <p className="text-xl text-ink-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                A hackathon for neurodivergent students to build something real — with a dedicated mentor, a small team, and no pressure to do it alone.
              </p>

              <a href='https://docs.google.com/forms/d/e/1FAIpQLSe-LO2y5DlUMH8AdYq_6EbI_P-jUPdyU3ejtocqMG7Ri9rRJw/viewform?usp=header'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
                >
                  <button className="btn-primary text-lg px-8 py-4">
                    Register Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </a>

              {/* Event Facts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-wrap justify-center items-stretch divide-x divide-ink/10 bg-white rounded-card border border-ink/5 max-w-4xl mx-auto overflow-hidden"
              >
                {facts.map((fact, index) => (
                  <div key={index} className="flex-1 min-w-[45%] sm:min-w-0 flex items-center gap-3 px-5 py-4 text-left">
                    <div className="text-brand-600 flex-shrink-0">{fact.icon}</div>
                    <div>
                      <div className="font-semibold text-ink text-sm leading-tight">{fact.title}</div>
                      <div className="text-xs text-ink-400 leading-tight">{fact.detail}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Happens Section */}
        <section className="py-20 bg-white" id="about">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <div className="section-eyebrow mb-4">
                    What Happens
                  </div>
                  <h2 className="text-3xl font-bold text-ink leading-tight mb-4">
                    Code, build, present — together.
                  </h2>
                  <p className="text-ink-600 text-lg leading-relaxed">
                    Students pair up in mentored teams to build a tech project from scratch, then present it however works best for them.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                {whatHappens.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex gap-6 py-6 ${index !== whatHappens.length - 1 ? 'border-b border-ink/10' : ''}`}
                  >
                    <span className="text-4xl font-bold text-brand-200 leading-none flex-shrink-0 w-14">
                      0{index + 1}
                    </span>
                    <div className="flex items-start gap-4">
                      <div className="text-ink flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-ink mb-1">{item.title}</h3>
                        <p className="text-ink-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="py-20 bg-brand-50" id="accessibility">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="section-eyebrow mb-4">
                  Accessibility
                </div>
                <h2 className="text-3xl font-bold text-ink mb-4 leading-tight">
                  Built for every mind.
                </h2>
                <p className="text-ink-600 text-lg leading-relaxed">
                  Neurodivergent students shouldn't have to fit a hackathon that wasn't built for them. So we built one that is.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
              >
                {accessibilityCommitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-ink-600 leading-snug">{commitment}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact + CTA Section */}
        <section className="py-16 px-6" id="cta">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-card overflow-hidden relative bg-ink">
              <div className="absolute inset-0 z-0">
                <img
                  src={ctaImage}
                  alt="Students Collaborating"
                  className="w-full h-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-ink/85"></div>
              </div>

              <div className="relative z-10 p-12 md:p-16 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="max-w-xl"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Ready to Join CodeTogether?
                  </h2>

                  <div className="flex flex-col space-y-3 mb-8">
                    {[
                      "Supportive, accessible environment",
                      "Dedicated mentors for every team",
                      "All skill levels welcome"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-brand-300 mr-2 flex-shrink-0" />
                        <span className="text-white/90 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSe-LO2y5DlUMH8AdYq_6EbI_P-jUPdyU3ejtocqMG7Ri9rRJw/viewform?usp=header'>
                    <button className="btn-primary text-lg px-8 py-4 mb-10">
                      Register for CodeTogether
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>

                  <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10 text-sm">
                    <a href="mailto:joshua.vigel@inclusivecompute.org" className="flex items-center gap-2 text-white/80 hover:text-white">
                      <Mail className="w-4 h-4" />
                      joshua.vigel@inclusivecompute.org
                    </a>
                    <a href="tel:+15866768033" className="flex items-center gap-2 text-white/80 hover:text-white">
                      <Phone className="w-4 h-4" />
                      (586) 676-8033
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hackathon;

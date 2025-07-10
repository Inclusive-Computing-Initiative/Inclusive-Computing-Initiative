import React, { useEffect } from 'react';
import './Hackathon.css'
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Calendar, MapPin, Users, Code, Heart, Trophy, Clock, Utensils, Palette, Lightbulb, Presentation, Star, Volume2, Shield, CheckCircle, Mail, MessageCircle, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const hackathonFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Learn to Code",
      description: "From beginners to advanced, everyone will learn new programming skills in a supportive environment."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build Together",
      description: "Work in small teams with peers who share similar interests and learning styles."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Celebrate Success",
      description: "Every team creates a project they can be proud of and share with the community."
    }
  ];

  const logistics = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Date",
      detail: "July 19th",
      description: "Mark your calendars for an amazing day of coding!"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time",
      detail: "10:15 AM – 1:15 PM",
      description: "3 hours of focused coding, learning, and fun"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Lunch",
      detail: "Provided for all participants",
      description: "Delicious, inclusive meal options for everyone"
    },
  ];

  const expectations = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentored Team Formation",
      description: "Students will be paired in groups by age and interest, and each group will be matched with a dedicated mentor who understands neurodivergent learning styles."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Skill Development",
      description: "Students will learn coding, teamwork, and problem-solving skills in a supportive, accessible environment designed to accommodate different learning preferences."
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Presentation Skills",
      description: "Teams will practice presenting their projects in a low-pressure, encouraging environment with multiple presentation format options to choose from."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Finished Projects",
      description: "By the end, every team will have a finished project they can share and celebrate, regardless of their starting skill level or experience."
    }
  ];

  const accessibilityFeatures = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Flexible Learning",
      description: "Multiple ways to participate, learn, and present - find what works best for your learning style."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe Environment",
      description: "Anti-bullying policies, clear communication channels, and supportive atmosphere for all participants."
    }
  ];

  const commitments = [
    "Clear, consistent communication throughout the event",
    "Dietary accommodations for all meal provisions",
    "Multiple presentation format options",
    "Dedicated quiet zones and break areas"
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "joshua.vigel@inclusivecompute.org",
      description: "General questions and registration support"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      detail: "(586) 676-8033",
      description: "Speak directly with our team"
    }
  ];

  const helpTopics = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      topic: "Registration Process",
      description: "Need help signing up or have questions about eligibility?"
    },
    {
      icon: <Users className="w-5 h-5" />,
      topic: "Accessibility Needs",
      description: "Want to discuss specific accommodations or support requirements?"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      topic: "Event Logistics",
      description: "Questions about timing, location, or what to bring?"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue overflow-hidden">
      <main>

	          {/* Hero Section */}
        <section className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-[#F9F6F3]">
          <div className="container-section relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium font-inter tracking-wide">First Hackathon for Neurodivergent Students</span>
              </div>
              
              <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 pb-6 text-convrt-dark-blue leading-[1.1]">
                <span className="text-convrt-purple font-extrabold">CodeTogether</span>
              </h1>
              
              <p className="font-inter text-xl text-convrt-dark-blue/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                An inclusive hackathon designed specifically for neurodivergent students to code, create, and celebrate together in a supportive environment.
              </p>
             	
	  	 	  <a href='https://docs.google.com/forms/d/e/1FAIpQLSe-LO2y5DlUMH8AdYq_6EbI_P-jUPdyU3ejtocqMG7Ri9rRJw/viewform?usp=header'>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
              >
                <button className="button-primary flex items-center group font-inter font-medium text-lg px-8 py-4">
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
	  		  </a>
              
              {/* Event Highlights */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Calendar className="w-5 h-5 text-convrt-purple" />
                  <div className="text-center">
                    <div className="font-semibold text-convrt-dark-blue">July 19th</div>
                    <div className="text-sm text-convrt-dark-blue/70">10:15 AM – 1:15 PM</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Users className="w-5 h-5 text-convrt-purple" />
                  <div className="text-center">
                    <div className="font-semibold text-convrt-dark-blue">Mentored Teams</div>
                    <div className="text-sm text-convrt-dark-blue/70">Grouped by age & interest</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <MapPin className="w-5 h-5 text-convrt-purple" />
                  <div className="text-center">
                    <div className="font-semibold text-convrt-dark-blue">Accessible Venue</div>
                    <div className="text-sm text-convrt-dark-blue/70">Plano Davis Library</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hackathon Info Section */}
        <section className="py-20 bg-white" id="about">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="section-tag">
                About CodeTogether
              </div>
              <h2 className="heading-lg text-convrt-dark-blue mb-6 pb-6">
                The First Hackathon Designed for <span className="gradient-text">Neurodivergent Students</span>
              </h2>
              <p className="text-convrt-dark-blue/80 text-lg leading-relaxed">
	  Welcome to Code Together, the first ever hackathon designed for students in special education, an event where people come together to build creative tech projects. 

At our hackathon, students will be paired up in groups and will learn how to collaborate with their teammates to create ideas using technology. Each group will have a mentor to guide the group along the way.

              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {hackathonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="feature-card text-center"
                >
                  <div className="bg-convrt-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-convrt-purple">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="heading-sm text-convrt-dark-blue mb-3">{feature.title}</h3>
                  <p className="text-convrt-dark-blue/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Logistics Section */}
        <section className="py-20 bg-gray-50" id="logistics">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="section-tag">
                Event Details
              </div>
              <h2 className="heading-lg text-convrt-dark-blue mb-6  pb-6">
                Event <span className="gradient-text">Logistics</span>
              </h2>
              <p className="text-convrt-dark-blue/80 text-lg leading-relaxed">
                Everything you need to know about the CodeTogether hackathon, designed with accessibility and inclusion in mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {logistics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-convrt-purple/20 transition-all duration-300"
                >
                  <div className="bg-convrt-purple/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <div className="text-convrt-purple">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-convrt-dark-blue mb-2">{item.title}</h3>
                  <div className="text-xl font-bold text-convrt-purple mb-2">{item.detail}</div>
                  <p className="text-convrt-dark-blue/70 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
            </motion.div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 bg-white" id="what-to-expect">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="section-tag">
                What to Expect
              </div>
              <h2 className="heading-lg text-convrt-dark-blue mb-6  pb-6">
                Your <span className="gradient-text">CodeTogether</span> Experience
              </h2>
              <p className="text-convrt-dark-blue/80 text-lg leading-relaxed">
                From the moment you arrive to the celebration at the end, every aspect of CodeTogether 
                is designed to be inclusive, supportive, and empowering for neurodivergent students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {expectations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 rounded-xl bg-gray-50 hover:bg-convrt-purple/5 transition-colors duration-300"
                >
                  <div className="bg-convrt-purple/10 rounded-xl p-4 flex-shrink-0">
                    <div className="text-convrt-purple">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-convrt-dark-blue mb-3">{item.title}</h3>
                    <p className="text-convrt-dark-blue/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-convrt-purple/10 via-convrt-purple/5 to-convrt-purple/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-convrt-dark-blue mb-4">
                  Success Looks Different for Everyone
                </h3>
                <p className="text-convrt-dark-blue/80 text-lg leading-relaxed">
                  Whether you're debugging your first line of code or building complex applications, 
                  CodeTogether celebrates every milestone. Our mentors and organizers are trained to 
                  recognize and support different learning styles, ensuring every participant leaves 
                  feeling accomplished and excited about coding.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="py-20 bg-gradient-to-br from-convrt-purple/5 to-convrt-purple/10" id="accessibility">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="section-tag">
                Accessibility & Inclusion
              </div>
              <h2 className="heading-lg text-convrt-dark-blue mb-6  pb-6">
                Built for <span className="gradient-text">Every Mind</span>
              </h2>
              <p className="text-convrt-dark-blue/80 text-lg leading-relaxed">
                CodeTogether isn't just accessible—it's designed from the ground up to celebrate 
                neurodiversity and ensure every participant can thrive in their own unique way.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-convrt-purple/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <div className="text-convrt-purple">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-convrt-dark-blue mb-3">{feature.title}</h3>
                  <p className="text-convrt-dark-blue/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm"
            >
              <div className="text-center mb-8">
                <div className="bg-convrt-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-convrt-purple" />
                </div>
                <h3 className="text-2xl font-bold text-convrt-dark-blue mb-4">Our Accessibility Commitments</h3>
                <p className="text-convrt-dark-blue/70">
                  We're committed to removing barriers and creating an environment where neurodivergent 
                  students can focus on what they do best—creating amazing things with code.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-convrt-purple mt-0.5 flex-shrink-0" />
                    <span className="text-convrt-dark-blue/80">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white" id="contact">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="section-tag">
                Get in Touch
              </div>
              <h2 className="heading-lg text-convrt-dark-blue mb-6">
                Questions? <span className="gradient-text">We're Here to Help</span>
              </h2>
              <p className="text-convrt-dark-blue/80 text-lg leading-relaxed">
                Our team is ready to answer any questions about CodeTogether, accessibility accommodations, 
                or anything else you need to know. We're committed to making this experience amazing for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-convrt-purple/5 transition-colors duration-300"
                >
                  <div className="bg-convrt-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-convrt-purple">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-convrt-dark-blue mb-2">{method.title}</h3>
                  <div className="text-convrt-purple font-medium mb-2">{method.detail}</div>
                  <p className="text-convrt-dark-blue/70 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-convrt-purple/5 to-convrt-purple/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-convrt-dark-blue mb-6 text-center">
                  Common Questions We Can Help With
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {helpTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-4"
                    >
                      <div className="flex items-center mb-3">
                        <div className="text-convrt-purple mr-3">
                          {topic.icon}
                        </div>
                        <h4 className="font-semibold text-convrt-dark-blue">{topic.topic}</h4>
                      </div>
                      <p className="text-convrt-dark-blue/70 text-sm">{topic.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-convrt-dark-blue/80 mb-4">
                    <strong>Response Time:</strong> We typically respond within 24 hours

	  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6" id="cta">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden relative bg-convrt-dark-blue">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/lovable-uploads/eada8c8b-332c-4ac7-813d-42884f942368.png" 
                  alt="Students Collaborating" 
                  className="w-full h-full object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-convrt-dark-blue via-convrt-dark-blue/90 to-convrt-dark-blue/80"></div>
              </div>
              
              <div className="relative z-10 p-12 md:p-16 text-white">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="max-w-lg"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/20 text-convrt-purple mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium font-inter tracking-wide">Join CodeTogether</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Ready to 
                    <span className="text-convrt-purple font-extrabold"> Code</span>, 
                    <span className="text-convrt-purple font-extrabold"> Create</span>, and 
                    <span className="text-convrt-purple font-extrabold"> Celebrate</span>?
                  </h2>
                  
                  <p className="text-lg text-gray-100 mb-8">
                    Join students from across the community for an inclusive hackathon experience designed with accessibility in mind.
                  </p>
                  
                  <div className="flex flex-col space-y-3 mb-8">
                    {[
                      "Supportive, accessible environment",
                      "Dedicated mentors for every team",
                      "All skill levels welcome"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-convrt-purple mr-2 flex-shrink-0" />
                        <span className="text-gray-100 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSe-LO2y5DlUMH8AdYq_6EbI_P-jUPdyU3ejtocqMG7Ri9rRJw/viewform?usp=header'> 
                  <motion.button 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="button-primary flex items-center text-lg px-8 py-4 shadow-lg shadow-convrt-purple/10 hover:shadow-xl hover:shadow-convrt-purple/20 rounded-full group"
                  >
                    Register for CodeTogether
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
	  			  </a>
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


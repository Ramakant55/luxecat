import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting unforgettable culinary experiences since 2010
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 md:mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
              Founded by renowned chef Maria Rodriguez, LuxeCater began with a vision to transform ordinary events into extraordinary culinary journeys. With over a decade of experience in fine dining and event planning, we've served thousands of delighted clients.
            </p>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Our passion lies in creating bespoke menus that reflect your unique taste and style. From intimate family gatherings to corporate galas, we bring creativity, precision, and elegance to every plate.
            </p>
            <button className="bg-gold text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:bg-gold-dark transition-colors">
              Meet Our Team
            </button>
          </motion.div>
          
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Chef" 
              className="rounded-xl w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 md:mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <ChefHat size={32} />,
                title: "Culinary Excellence",
                description: "We uphold the highest standards in every dish we create, using only the finest ingredients."
              },
              {
                icon: <Award size={32} />,
                title: "Exceptional Service",
                description: "Our dedicated team ensures seamless execution and personalized attention to every detail."
              },
              {
                icon: <Heart size={32} />,
                title: "Passion & Creativity",
                description: "We infuse creativity and genuine passion into every culinary creation we present."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-6 md:p-8 text-center">
                <div className="text-gold mb-4 md:mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 md:mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="glass-card p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "500+", label: "Events Served" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
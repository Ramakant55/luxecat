import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting unforgettable culinary experiences since 2010
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Founded by renowned chef Maria Rodriguez, LuxeCater began with a vision to transform ordinary events into extraordinary culinary journeys. With over a decade of experience in fine dining and event planning, we've served thousands of delighted clients.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our passion lies in creating bespoke menus that reflect your unique taste and style. From intimate family gatherings to corporate galas, we bring creativity, precision, and elegance to every plate.
            </p>
            <button className="bg-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition-colors">
              Meet Our Team
            </button>
          </motion.div>
          
          <motion.div
            className="glass-card p-8"
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
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat size={40} />,
                title: "Culinary Excellence",
                description: "We uphold the highest standards in every dish we create, using only the finest ingredients."
              },
              {
                icon: <Award size={40} />,
                title: "Exceptional Service",
                description: "Our dedicated team ensures seamless execution and personalized attention to every detail."
              },
              {
                icon: <Heart size={40} />,
                title: "Passion & Creativity",
                description: "We infuse creativity and genuine passion into every culinary creation we present."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="text-gold mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="glass-card p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Events Served" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-heading font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
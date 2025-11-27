import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Utensils, Wine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Exquisite <span className="text-gold">Catering</span> Experiences
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elevate your events with our premium culinary services. From intimate gatherings to grand celebrations, we craft unforgettable dining experiences.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/booking" className="glass-card px-8 py-4 text-lg font-medium text-gold neon-glow">
                Book Now
              </Link>
              <Link to="/menu" className="bg-gold text-white px-8 py-4 text-lg font-medium rounded-xl hover:bg-gold-dark transition-colors">
                View Menu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold text-gold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring exceptional culinary experiences to every event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat size={48} />,
                title: "Expert Chefs",
                description: "Our team of award-winning chefs brings creativity and expertise to every dish."
              },
              {
                icon: <Utensils size={48} />,
                title: "Premium Ingredients",
                description: "We source only the finest ingredients to ensure exceptional taste and quality."
              },
              {
                icon: <Wine size={48} />,
                title: "Perfect Pairings",
                description: "Our sommeliers curate the perfect beverages to complement your menu."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 text-center hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-gold mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
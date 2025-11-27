import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Essential",
      price: "$1,200",
      description: "Perfect for intimate gatherings",
      guests: "Up to 30 guests",
      features: [
        "Seasonal menu selection",
        "Basic table settings",
        "Standard beverage service",
        "Event coordination",
        "Basic dessert selection"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$2,800",
      description: "Ideal for weddings and celebrations",
      guests: "Up to 75 guests",
      features: [
        "Custom menu design",
        "Premium table settings",
        "Full bar service",
        "Dedicated event manager",
        "Signature dessert display",
        "Live cooking station"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "$5,500",
      description: "For grand celebrations",
      guests: "Up to 150 guests",
      features: [
        "Fully customized menu",
        "Luxury table settings",
        "Premium open bar",
        "Personal event concierge",
        "Gourmet dessert bar",
        "Multiple live cooking stations",
        "Complimentary tasting session"
      ],
      popular: false
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-4">Pricing Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Custom packages available upon request.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative glass-card p-8 ${
                plan.popular ? 'ring-2 ring-gold scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold mb-2">{plan.name}</h2>
                <div className="text-4xl font-heading font-bold text-gold mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
                <div className="mt-4 text-green font-medium">{plan.guests}</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="text-gold mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-gold text-white hover:bg-gold-dark' 
                    : 'bg-cream text-gold border border-gold hover:bg-gold hover:text-white'
                }`}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div 
          className="glass-card p-12 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every event is unique. Contact us to create a bespoke catering solution tailored to your specific needs.
          </p>
          <button className="bg-gold text-white px-8 py-4 rounded-xl font-medium hover:bg-gold-dark transition-colors">
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
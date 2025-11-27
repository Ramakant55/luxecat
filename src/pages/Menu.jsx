import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { name: "Truffle Arancini", description: "Risotto balls with black truffle and mozzarella", price: "$18" },
        { name: "Seared Scallops", description: "With cauliflower puree and caviar", price: "$24" },
        { name: "Beef Carpaccio", description: "With arugula, capers and truffle oil", price: "$22" },
      ]
    },
    {
      name: "Main Courses",
      items: [
        { name: "Wagyu Beef Tenderloin", description: "With roasted vegetables and red wine jus", price: "$65" },
        { name: "Pan-Seared Salmon", description: "With lemon butter sauce and asparagus", price: "$38" },
        { name: "Lobster Risotto", description: "Creamy arborio rice with fresh lobster", price: "$48" },
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Chocolate Soufflé", description: "With vanilla bean ice cream", price: "$16" },
        { name: "Crème Brûlée", description: "Classic vanilla with caramelized sugar", price: "$14" },
        { name: "Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone", price: "$15" },
      ]
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully crafted dishes using the finest seasonal ingredients
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-3xl font-heading font-bold text-center mb-10 text-green">
                {category.name}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                    whileHover={{ 
                      y: -10,
                      rotateY: 5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <h3 className="text-xl font-heading font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="text-gold font-bold text-lg">{item.price}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Menu CTA */}
        <motion.div 
          className="glass-card p-12 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Custom Menus</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have specific dietary requirements or preferences? Our chefs can create a bespoke menu tailored to your event.
          </p>
          <button className="bg-gold text-white px-8 py-4 rounded-xl font-medium hover:bg-gold-dark transition-colors">
            Request Custom Menu
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
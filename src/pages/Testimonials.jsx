import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Planner",
      content: "LuxeCater transformed our wedding reception into a culinary masterpiece. The attention to detail and exceptional service exceeded all expectations. Our guests are still raving about the food!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, TechStart Inc.",
      content: "The corporate gala was flawlessly executed. From the elegant presentation to the impeccable timing, LuxeCater delivered beyond our ambitious goals. Highly recommended for premium events.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Event Coordinator",
      content: "Working with LuxeCater has been a game-changer for our events. Their creativity and professionalism consistently impress both clients and attendees. They truly understand the art of hospitality.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      content: "As someone in the food industry, I'm extremely selective. LuxeCater's culinary expertise and innovative approach to catering sets them apart. They've become our go-to partner for special occasions.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our valued clients have to say about their experiences with us
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-8 md:p-12 text-center">
                    <Quote className="text-gold mx-auto mb-6" size={40} />
                    
                    <p className="text-gray-600 text-lg md:text-xl italic mb-8 max-w-3xl mx-auto">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-gold fill-current" size={24} />
                      ))}
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mb-4"
                      />
                      <h3 className="text-xl font-heading font-bold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-gold text-white p-3 rounded-full hover:bg-gold-dark transition-colors"
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-gold text-white p-3 rounded-full hover:bg-gold-dark transition-colors"
            aria-label="Next testimonial"
          >
            &#8250;
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "500+", label: "Events Catered" },
            { number: "15+", label: "Years Experience" },
            { number: "5★", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="text-3xl font-heading font-bold text-gold mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, Mail, Phone, MessageCircle } from 'lucide-react';

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // In a real app, you would send this data to your backend
    alert('Thank you for your booking request! We will contact you shortly.');
    reset();
  };

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gold mb-4">Book Your Event</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Reserve our premium catering services for your special occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Booking Form */}
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-heading font-bold mb-6">Event Details</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-gold`}
                  placeholder="John Smith"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone is required' })}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Event Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      {...register('date', { required: 'Date is required' })}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Event Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="time"
                      {...register('time', { required: 'Time is required' })}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.time ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                    />
                  </div>
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    {...register('guests', { 
                      required: 'Number of guests is required',
                      min: { value: 1, message: 'Minimum 1 guest required' }
                    })}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.guests ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-gold`}
                    placeholder="50"
                  />
                </div>
                {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Event Type</label>
                <select
                  {...register('eventType', { required: 'Event type is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.eventType ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-gold`}
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
                {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Special Requests</label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    {...register('requests')}
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Any dietary restrictions, special arrangements, or specific requests..."
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold text-white py-3 md:py-4 rounded-xl font-medium hover:bg-gold-dark transition-colors"
              >
                Submit Booking Request
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-6 md:p-8 mb-6 md:mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start">
                  <Mail className="text-gold mr-3 md:mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@luxecater.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gold mr-3 md:mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="text-gold mr-3 md:mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Why Book With Us?</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gold/20 p-1.5 md:p-2 rounded-full mr-3 mt-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold rounded-full"></div>
                  </div>
                  <span className="text-gray-600 text-sm md:text-base">Free consultation and menu planning</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gold/20 p-1.5 md:p-2 rounded-full mr-3 mt-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold rounded-full"></div>
                  </div>
                  <span className="text-gray-600 text-sm md:text-base">Flexible cancellation policy</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gold/20 p-1.5 md:p-2 rounded-full mr-3 mt-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold rounded-full"></div>
                  </div>
                  <span className="text-gray-600 text-sm md:text-base">Professional event coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gold/20 p-1.5 md:p-2 rounded-full mr-3 mt-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold rounded-full"></div>
                  </div>
                  <span className="text-gray-600 text-sm md:text-base">Customizable packages for any budget</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
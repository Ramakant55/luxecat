import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';

const Gallery = () => {
  // Gallery images data
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Elegant Plating" },
    { id: 2, src: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Wedding Catering" },
    { id: 3, src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Corporate Event" },
    { id: 4, src: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Gourmet Dessert" },
    { id: 5, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Fine Dining" },
    { id: 6, src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Buffet Setup" },
    { id: 7, src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Cocktail Party" },
    { id: 8, src: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Birthday Celebration" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-4">Signature Dishes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our culinary artistry and presentation excellence
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-heading text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gold/80 p-3 rounded-full">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white bg-gold p-2 rounded-full"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h3 className="font-heading text-2xl font-bold">{selectedImage.alt}</h3>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="glass-card p-12 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Experience Our Culinary Artistry</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Each dish is meticulously crafted to delight your senses and create lasting memories.
          </p>
          <button className="bg-gold text-white px-8 py-4 rounded-xl font-medium hover:bg-gold-dark transition-colors">
            Book a Tasting Session
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
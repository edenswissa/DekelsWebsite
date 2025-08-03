import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  // title: string; // להסיר כותרות - להשאיר להערה לעתיד
  // description: string; // להסיר תיאורים - להשאיר להערה לעתיד
  objectPosition?: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Real images from public/images/dekel
  const images: ImageItem[] = [
    {
      id: 1,
      src: './images/dekel/main.JPG',
      alt: 'דקל סויסה - תמונה ראשית',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה ראשית של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-[50%_10%]'
    },
    {
      id: 2,
      src: './images/dekel/officer.jpg',
      alt: 'דקל סויסה במדים',
      // title: 'בשירות הצבאי', // להשאיר להערה לעתיד
      // description: 'דקל במדים', // להשאיר להערה לעתיד
      objectPosition: 'object-[50%_10%]'
    },
    {
      id: 3,
      src: './images/dekel/whiteShirt.JPG',
      alt: 'דקל סויסה בחולצה לבנה',
      // title: 'דקל בחולצה לבנה', // להשאיר להערה לעתיד
      // description: 'דקל בחולצה לבנה', // להשאיר להערה לעתיד
      objectPosition: 'object-center'
    },
    {
      id: 4,
      src: './images/dekel/PHOTO-2024-05-12-01-10-37 2.jpg',
      alt: 'דקל סויסה - תמונה 4',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-left'
    },
    {
      id: 5,
      src: './images/dekel/72833904-44c4-4182-80b3-c800d46857f0.jpg',
      alt: 'דקל סויסה - תמונה 5',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-[50%_10%]'
    },
    {
      id: 6,
      src: './images/dekel/14347ed2-d937-49f3-a64a-a7bb7a2a8521.JPG',
      alt: 'דקל סויסה - תמונה 6',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-center'
    },
    {
      id: 7,
      src: './images/dekel/b9845ecf-e075-4faa-81b5-2e6d009d9cc6.JPG',
      alt: 'דקל סויסה - תמונה 7',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-[50%_10%]'
    },
    {
      id: 8,
      src: './images/dekel/IMG_5525.JPG',
      alt: 'דקל סויסה - תמונה 8',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-center'
    },
    {
      id: 9,
      src: './images/dekel/IMG_6238.jpeg',
      alt: 'דקל סויסה - תמונה 9',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-center'
    },
    {
      id: 10,
      src: './images/dekel/0fe50942-2e45-475e-87f5-ff9a177d1fff.JPG',
      alt: 'דקל סויסה - תמונה 10',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-center'
    },
    {
      id: 11,
      src: './images/dekel/63aad398-2222-422a-974e-77a37ccd0ae1.JPG',
      alt: 'דקל סויסה - תמונה 11',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-center'
    },
    {
      id: 12,
      src: './images/dekel/IMG_1198.jpeg',
      alt: 'דקל סויסה - תמונה 12',
      // title: 'דקל סויסה', // להשאיר להערה לעתיד
      // description: 'תמונה של דקל', // להשאיר להערה לעתיד
      objectPosition: 'object-center'
    }
  ];

  const openLightbox = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8 pt-2 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-fifth mb-4">
              גלריה
            </h1>
            <p className="text-lg text-primary-fourth max-w-2xl mx-auto">
              תמונות מחייו של דקל סויסה - זיכרונות יקרים של אדם מיוחד
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full aspect-square object-cover ${image.objectPosition || 'object-center'}`}
                    loading="lazy"
                  />
                  {/* להסיר כותרות ותיאורים - להשאיר להערה לעתיד */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-primary-second transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-second transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-second transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <motion.img
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {/* להסיר כותרות ותיאורים - להשאיר להערה לעתיד */}
              {/* <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-sm opacity-90">{selectedImage.description}</p>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 
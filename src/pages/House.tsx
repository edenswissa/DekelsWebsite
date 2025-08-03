import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, Home, ChevronLeft, ChevronRight } from 'lucide-react';

const House: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const houseImages = [
    '/images/house/PHOTO-2025-07-10-16-24-54.jpg',
    '/images/house/PHOTO-2025-07-10-10-34-32.jpg',
    '/images/house/PHOTO-2025-07-09-16-02-21.jpg',
    '/images/house/PHOTO-2025-05-29-16-57-58 2.jpg',
    '/images/house/PHOTO-2025-05-29-16-57-58 3.jpg',
    '/images/house/PHOTO-2025-05-29-16-57-58.jpg',
    '/images/house/PHOTO-2025-05-29-16-57-59.jpg',
    '/images/house/PHOTO-2025-05-22-06-19-19.jpg',
    '/images/house/PHOTO-2025-04-22-22-57-11.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % houseImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + houseImages.length) % houseImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8 pt-2 md:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-2"
            >
              <img
                src="/images/house/logo2.png"
                alt="לוגו בית דקל"
                className="h-40 md:h-40 mx-auto object-contain"
              />
            </motion.div>
            
            <div className="flex items-center justify-center space-x-reverse space-x-6 text-primary-fourth mb-6">
              <div className="flex items-center space-x-reverse space-x-2">
                <Home size={18} />
                <span>מושב פטיש</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2">
                <Heart size={18} />
                <span>לזכרו של סרן דקל סויסה הי״ד</span>
              </div>
            </div>
            <div className="w-24 h-1 bg-primary-third mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Text */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Main Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-primary-fifth/5 rounded-2xl p-8"
              >
                <div className="space-y-6">
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    בית דקל הוקם לזכרו של סרן דקל סויסה, שראה באירוח ובנתינה דרך חיים. מהפנימייה הצבאית, השנת שירות, המכינה בעלי והשירות הקרבי במגלן וגולני ועד הבית במושב – דקל תמיד דאג לפתוח את הדלת ואת הלב לחבריו ולחייליו.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    בהובלת משפחתו ובעזרת עמותת נחמה והצלה לישראל, הבית ממשיך את דרכו.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    בית דקל הוא מקום מפגש ומנוחה לחיילים – לכמה שעות או כמה ימים – מקום לעצור בו רגע, לנשום, להתחזק.
                  </p>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-primary-main/20 rounded-2xl p-8 border-l-4 border-primary-third"
              >
                <blockquote className="text-xl md:text-2xl font-bold text-primary-fifth mb-4 text-center">
                  "לאדם יש שתי אפשרויות – או להתעסק בעצמך,<br/> או לעשות דברים טובים."
                </blockquote>
              </motion.div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <p className="text-lg font-bold text-primary-fourth">
                  אנחנו כאן כדי להמשיך ולעשות את הדברים הטובים. באורו של דקל.
                </p>
              </motion.div>

              {/* What We Do */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-primary-fifth mb-6">
                  כאן אפשר
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-reverse space-x-3">
                    <div className="w-2 h-2 bg-primary-third rounded-full mt-3"></div>
                    <p className="text-primary-fourth">לקיים ערבי צוות, פיקוד ומנהיגות</p>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <div className="w-2 h-2 bg-primary-third rounded-full mt-3"></div>
                    <p className="text-primary-fourth">לארח חיילים שמחפשים מקלחת חמה, אוכל ומקום לישון</p>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <div className="w-2 h-2 bg-primary-third rounded-full mt-3"></div>
                    <p className="text-primary-fourth">להעניק לחיילים רגע של שקט והתחדשות אחרי פעילות</p>
                  </div>
                </div>
              </motion.div>

              {/* Article */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-fifth mb-4">
                  כתבה על הבית
                </h3>
                <div className="bg-gray-100 rounded-xl aspect-video overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-contain"
                    poster="/images/house/logo2.png"
                  >
                    <source src="/movies/House.mp4" type="video/mp4" />
                    הדפדפן שלך לא תומך בסרטון.
                  </video>
                </div>
              </motion.div>

              {/* House Images Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-fifth mb-4">
                  תמונות מהבית
                </h3>
                <div className="relative bg-gray-100 rounded-xl aspect-video overflow-hidden">
                  <img
                    src={houseImages[currentImageIndex]}
                    alt={`תמונה ${currentImageIndex + 1} מהבית`}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-fifth p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-fifth p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {houseImages.length}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-6"
            >
              {/* Foundation Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-fifth mb-4">
                  בחסות ובתמיכה
                </h3>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/house/logo1.jpg"
                    alt="לוגו העמותה"
                    className="h-40 w-40 object-contain"
                  />
                </div>
                <p className="text-sm text-primary-fourth mt-3">
                  עמותת נחמה והצלה לישראל
                </p>
              </motion.div>

              {/* Map */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary-fifth mb-4">
                  מיקום הבית
                </h3>
                <div className="bg-gray-100 rounded-xl aspect-video mb-4 overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=34.558722,31.320861,34.562722,31.324861&layer=mapnik&marker=31.322861,34.560722"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    title="מיקום בית דקל"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="text-center text-primary-fourth">
                  <p className="text-sm font-medium">החיטה 454, מושב פטיש</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-center gap-4">
                  <h3 className="text-lg font-bold text-primary-fifth">
                    עקבו אחרינו
                  </h3>
                  <a 
                    href="https://www.instagram.com/beit_dekel?igsh=ZjRmcHkwNzM0aHZl" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-reverse space-x-2 text-primary-fourth hover:text-primary-fifth transition-colors font-medium"
                  >
                    <Instagram size={20} />
                    <span>@beit_dekel</span>
                  </a>
                </div>
              </div>

              {/* English Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
              >
                <h3 className="text-sm font-bold text-primary-fifth mb-3">
                  House of Deke - ILTV
                </h3>
                <div className="bg-gray-100 rounded-lg aspect-video overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-contain"
                    poster="/images/house/PHOTO-2025-05-22-06-19-19.jpg"
                  >
                    <source src="/movies/HouseEnglish.mp4" type="video/mp4" />
                    הדפדפן שלך לא תומך בסרטון.
                  </video>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default House; 
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Notebooks: React.FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white pt-[73px] md:pt-[195px]">
      {/* Header Section with Background */}
      <section className="relative h-48 md:h-[250px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(./images/notebooks/background.jpeg)' }}
        >
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-gray-800 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            מתוך המחברות של דקל
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg max-w-4xl leading-relaxed text-gray-600"
          >
            דקל כתב לעצמו מחשבות, תובנות, ציטוטים מהלימוד ומהחיים. מתוך המחברות שלו – קטעים שבחרנו לשתף, כדי להעביר הלאה את מי שהוא היה
          </motion.p>
        </div>
      </section>

      {/* Section 1 - Video */}
      <motion.section 
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-8 bg-[#8BA794]"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            {/* Video */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-[480px] p-4">
                {/* מסגרת חיצונית */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8BA794] to-[#5D6E75] rounded-xl shadow-2xl"></div>
                
                {/* מסגרת פנימית */}
                <div className="absolute inset-2 bg-white rounded-lg shadow-inner"></div>
                
                {/* הסרטון */}
                <div className="relative w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
                  <video 
                    className="w-full h-full object-contain"
                    controls
                    controlsList="nodownload"
                    poster="./images/notebooks/video-poster.jpg"
                  >
                    <source src="./images/notebooks/asafGranit.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* אפקט זוהר */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10 rounded-xl pointer-events-none"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-fourth">
                אסף גרניט מקריא מדבריו של דקל
              </h3>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  לקראת יום הזיכרון תשפ״ה, כחלק ממיזם מרגש של ״ישראל בידור״, השף אסף גרניט קיבל את המחברת של דקל – והתרגש.
                </p>
                <p>
                  הוא קרא, התחבר, ובחר להקריא קטע שדיבר אליו במיוחד.
                </p>
                <p>
                  המילים שדקל כתב לעצמו, לעצמו בלבד, הפכו – דרך הקול של אסף – למסר שכולנו יכולים לקחת ללב.
                </p>
                <p>
                  כאן, בדקה וחצי, משהו מדקל עובר הלאה.
                </p>
                <p>
                  משהו מהאמת שלו. מהאמונה שלו. מהלב הגדול שהיה לו.
                </p>
                <p>
                  צפו בקטע. תנו למילים להיכנס לאט. הן מגיעות ממקום אמיתי.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2 - Image 1 */}
      <motion.section 
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-8 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-8">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-auto">
                <div className="relative bg-white rounded-lg shadow-lg p-6 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100 opacity-30 rounded-lg"></div>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                      transparent,
                      transparent 24px,
                      #e5e5e5 24px,
                      #e5e5e5 25px
                    )`,
                    opacity: 0.3
                  }}></div>
                  <img 
                    src="./images/notebooks/gvora.jpg" 
                    alt="מידת הגבורה" 
                    className="w-full h-auto rounded-lg relative z-10"
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 text-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-fourth">
                מידת הגבורה
              </h3>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  <span className="font-semibold italic">"היכולת לראות בקושי – אתגר.</span>
                </p>
                <p>
                  <span className="font-semibold italic">העולם הזה הוא כולו אתגרים תמידיים עם ׳הפסקות אש׳ (שלווה ונחת) מידי פעם."</span>
                </p>
                <p>
                  דקל האמין שגבורה אמיתית היא לא להימנע מהקושי – אלא להתגבר עליו, שוב ושוב.
                </p>
                <p>
                  <span className="font-semibold italic">"הסעיף הראשון בשולחן ערוך הוא מידת הגבורה. כלומר בלי מידה זו, כלום לא יכול להתקיים."</span>
                </p>
                <p>
                  במוצב ״פגה״, ברגע האמת, דקל זכר את זה.
                </p>
                <p>
                  הוא פעל באומץ, בקור רוח, ובאמונה – בדיוק כמו שכתב לעצמו מראש.
                </p>
                <p>
                  הוא לא רק כתב על גבורה - הוא חי אותה
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3 - Image 2 */}
      <motion.section 
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-8 bg-[#8BA794]"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-8">
            {/* Content */}
            <div className="w-full lg:w-1/2 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-fourth">
                אמונה
              </h3>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  דקל כתב את זה לעצמו, אבל היום אנחנו קוראים ולומדים ממנו. בימים של כאב וגעגוע – אנחנו מנסים להאמין, כמו שהוא האמין.
                </p>
                <p>
                  לזכור שבתוך כל קושי יש גם כוח.
                </p>
                <p>
                  והוא בתוכנו.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-auto">
                <div className="relative bg-white rounded-lg shadow-lg p-6 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100 opacity-30 rounded-lg"></div>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                      transparent,
                      transparent 24px,
                      #e5e5e5 24px,
                      #e5e5e5 25px
                    )`,
                    opacity: 0.3
                  }}></div>
                  <img 
                    src="./images/notebooks/problem.jpg" 
                    alt="אמונה" 
                    className="w-full h-auto rounded-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4 - Image 3 */}
      <motion.section 
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={inView4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-8 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            {/* Content */}
            <div className="w-full lg:w-1/2 text-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-fourth">
                "אין איום בלי מענה"
              </h3>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  <span className="font-semibold italic">"ברגע שאני מזהה שיש מחבל – אני רוצה להגיע אליו.</span>
                </p>
                <p>
                  <span className="font-semibold italic">זה שיש מחבל – לא אמור לשנות את סדר הלחימה.</span>
                </p>
                <p>
                  <span className="font-semibold italic">לא להילחץ!</span>
                </p>
                <p>
                  <span className="font-semibold italic">אין איום בלי מענה."</span>
                </p>
                <p>
                  דקל כתב את הדברים במהלך ההכשרה במגלן,
                </p>
                <p>
                  ובזמן הלחימה במוצב פגה – פעל בדיוק כך:
                </p>
                <p>
                  לא נלחץ, שמר על סדר הפעולות, חתר למגע ומצא פתרונות תחת אש.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-auto">
                <div className="relative bg-white rounded-lg shadow-lg p-6 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100 opacity-30 rounded-lg"></div>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                      transparent,
                      transparent 24px,
                      #e5e5e5 24px,
                      #e5e5e5 25px
                    )`,
                    opacity: 0.3
                  }}></div>
                  <img 
                    src="./images/notebooks/maane.jpg" 
                    alt="אין איום בלי מענה" 
                    className="w-full h-auto rounded-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Summary Section */}
      <section className="py-8 bg-[#BAC6B8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-4"
            >
              <p>
                דקל לא כתב לאחרים – הוא כתב בשביל עצמו.
              </p>
              <p>
                כדי ללמוד, להשתפר, ולשמר את הערכים וההתנהגויות שרצה לחיות לפיהם.
              </p>
              <p>
                בעט פשוט, במחברות מהחיים, הוא תיעד מחשבות על אמונה, גבורה, התמודדות ושליחות.
              </p>
              <p>
                הוא כתב לעצמו – אבל המילים שלו מדברות גם אלינו.
              </p>
              <p>
                אנחנו משתפים כאן קטעים נבחרים,
              </p>
              <p>
                כדי שדקל ימשיך לעורר השראה – בדיוק כמו שהוא היה.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notebooks; 
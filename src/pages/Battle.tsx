import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Battle: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8 pt-2 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-fifth mb-4">
              הקרב על מוצב פגה
            </h1>
            <div className="flex items-center justify-center space-x-reverse space-x-6 text-primary-fourth mb-6">
              <div className="flex items-center space-x-reverse space-x-2">
                <Calendar size={18} />
                <span>7 באוקטובר 2023</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2">
                <MapPin size={18} />
                <span>מוצב פגה (״מגן-בארי״)</span>
              </div>
            </div>
            <div className="w-24 h-1 bg-primary-third mx-auto rounded-full"></div>
          </div>

          {/* Main Content - Newspaper Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Main Story Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >    
                <div className="space-y-6">
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    מוצב פגה הנקרא גם ״מגן בארי״, הינו מוצב פלוגתי, בו הוצבו פלוגה ג' ומחלקת המרגמות של גדוד 13. כשני קילומטרים ממנו פועל צוות קרבי משורין (צק״מ) של מחלקת אלון, השייכת לפלוגה ג'.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    דקל, מ״מ המחלקה הפיקודית בפלוגה ג', נותר הקצין היחיד במוצב לאחר שסגן מפקד הפלוגה (סמ״פ) וצוותו יצאו לעבר הצק״מ במהלך זמן "כוננות עם שחר".
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    בשבת, שמחת תורה, 7.10.2023, 6:29 פתחו ארגוני חמאס והג׳יהאד האסלאמי במתקפה רחבה על ישראל, ובה הותקפו גם מוצבי עוטף עזה, כולל מוצב פגה.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    אש המחבלים כוּוְנה תחילה אל מחלקת המרגמות שבמוצב: ארבעה חיילים נהרגו ושניים נפצעו. דקל קיבל מהסמ״פ פקודה: "אתה מפקד המוצב, אם אתה עוזב, המוצב הזה מושמד."
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    דקל ארגן את חייליו בעמדות, פינה את הפצועים לחדר האוכל ששימש מרחב מוגן, והוביל קרב מול עשרות מחבלים שירו ופיצצו את המוצב. הוא שלח שני חיילים לירות טיל לאו מעמדה גבוהה; צלף פגע באחד החיילים והרגו, והשני נפצע.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    העמדה הפכה לשטח השמדה, אך דקל סירב להשאיר בשטח את גופת החייל העלולה להיחטף. לבדו, תחת אש, הוא רץ לעמדה, הרים את החייל על גבו, ביקש חיפוי ופינה אותו לחדר האוכל. שם כיסה את החלל במפה, כינס את הלוחמים ואמר:
                  </p>
                  
                  {/* The Quote */}
                  <div className="bg-primary-main/20 rounded-2xl p-8 border-l-4 border-primary-third my-8">
                    <blockquote className="text-xl md:text-2xl font-bold text-primary-fifth mb-4 text-center">
                      "זה הרגע שאליו התאמנו. נילחם עד הטיפה האחרונה. אנחנו גדוד 13 של גולני — גולני לא נשברים."
                    </blockquote>
                    <p className="text-primary-fourth text-center font-medium">- תחת אש כבדה, דקל בוחר לעצור רגע ולהרים את מורל החיילים</p>
                  </div>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    שעות ארוכות לחמו החיילים. דקל עבר בין העמדות, נתקל במחבלים נוספים, פיקד והנהיג, עודד את חייליו ותכנן חילוץ לפצועים. אחד מהנהגים ששהה נעול בחדרו, סיפר כי דקל התקשר אליו, בירר את מיקומו וחילץ אותו בעצמו אל חדר האוכל.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    "השיחה הזאת הצילה לי את החיים", העיד הנהג.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    כשהתברר שהחילוץ לא מגיע והם מעטים מול רבים, קיבל דקל החלטה: לרכז את כולם בחדר האוכל ולדרוש הפצצה מהאוויר או חילוץ. הוא חילק את החיילים לזוגות על מנת שידלגו אל חדר האוכל דרך הש״ג, שהיה אזור השמדה, בעוד הוא והצמד שהתלווה אליו מחפים עליהם. כשהזוג האחרון הגיע, נותרו דקל והצמד שלו בעמדה. הם המשיכו לחפות עד שנפלו, מגינים על חבריהם.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    דקל הקריב את חייו כדי להציל את חייליו — וכך קיים את הבטחתו להורי חייליו במסע הכומתה:
                  </p>
                  
                  {/* The Promise */}
                  <div className="bg-primary-main/10 rounded-xl p-6 border-r-4 border-primary-third my-6">
                    <blockquote className="text-lg font-bold text-primary-fifth mb-2">
                      "אני יודע שאני אעשה הכול ואני מבטיח לכם שאני אחזיר אותם בשלום הביתה״
                    </blockquote>
                    <p className="text-primary-fourth text-sm">- הבטחה להורי החיילים בנאומו בסוף מסע הכומתה</p>
                  </div>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    אומץ-לבו, דאגתו לאדם ואחריותו יהדהדו לנצח בקירות הבית הזה — עדות לכוח הרוח ולגבורה.
                  </p>
                  
                  <p className="text-lg text-primary-fourth leading-relaxed">
                    אחד מהנהגים ששהה נעול בחדרו, סיפר כי דקל התקשר אליו, בירר את מיקומו וחילץ אותו בעצמו אל חדר האוכל. "השיחה הזאת הצילה לי את החיים", העיד הנהג.
                  </p>
                  
                  {/* Video Player */}
                  <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video my-8">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/fwytNEt-Jbg"
                      title="הקרב על מוצב פגה - סיפור הגבורה של דקל"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              
              {/* Hero Image */}
              <div className="hidden md:block bg-gray-100 rounded-2xl aspect-[4/5] overflow-hidden">
                <img
                  src="./images/dekel/63aad398-2222-422a-974e-77a37ccd0ae1.JPG"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: '50% 50%' // מרכז מושלם - נותן זום אאוט טבעי
                  }}
                />
              </div>

              {/* Fallen Heroes */}
              <div className="bg-primary-main/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-fifth mb-4">
                  חללי מוצב פגה
                </h3>
                <p className="text-sm text-primary-fourth mb-4">
                  במוצב פגה (״מגן בארי״) הקריבו את חייהם:
                </p>
                <div className="space-y-2 text-sm text-primary-fourth">
                  <p>• דקל סויסה</p>
                  <p>• איתמר כהן</p>
                  <p>• רועי פרי</p>
                  <p>• ליאור עזיזוב</p>
                  <p>• שלו ברנס</p>
                  <p>• עידן רז</p>
                  <p>• איתי גליסקו</p>
                  <p>• יקיר לוי</p>
                  <p>• חיים מאיר עדן</p>
                  <p>• עידו דוד ביננשטוק</p>
                  <p>• איתמר בן יהודה</p>
                  <p>• תומר ברק</p>
                  <p>• דולב אמויאל</p>
                  <p>• חביב קיעאן</p>
                </div>
                <p className="text-sm text-primary-fourth mt-4 font-medium">
                  השם יקום דמם
                </p>
              </div>

              {/* External Links */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-fifth mb-4">
                  קישורים נוספים
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://www.youtube.com/watch?v=f5k2tEMxxRE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-2 text-primary-fourth hover:text-primary-fifth transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">הלוחמים משחזרים את סיפור הקרב - כאן 11</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=DNdbfXZ5rjo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-2 text-primary-fourth hover:text-primary-fifth transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">הקרב על מוצב פגה - ערוץ 13</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Battle; 
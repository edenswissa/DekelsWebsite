import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Quote, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Speech: React.FC = () => {
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-[90px] md:pt-[195px]">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-fifth mb-4">
              נאום מסע הכומתה
            </h1>
            <p className="text-lg text-primary-fourth">
              הנאום האחרון של דקל בפני המחלקה וההורים
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video mb-6">
              <video controls className="w-full h-full object-contain" poster="./images/dekel/officer.jpg">
                <source src="https://github.com/edenswissa/DekelsWebsite/releases/download/1.0/speech.mp4" type="video/mp4" />
                הדפדפן שלך לא תומך בסרטון.
              </video>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
                className="inline-flex items-center space-x-reverse space-x-3 text-primary-third hover:text-primary-fourth transition-colors bg-primary-second/10 px-8 py-4 rounded-2xl border border-primary-third/20 hover:border-primary-third/40 text-lg font-medium"
              >
                <Quote size={20} />
                <span>{isTranscriptOpen ? 'סגור תמלול הנאום' : 'תמלול הנאום'}</span>
                {isTranscriptOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
          </div>

          {/* Speech Transcript */}
          <AnimatePresence>
            {isTranscriptOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-12"
              >
                <div className="bg-primary-second/10 rounded-2xl p-8">
                  <div className="text-right">
                    <p className="text-primary-fifth leading-relaxed mb-4">
                      בחיים אתה יכול לבחור בין שני דברים או להתעסק בעצמך או לעשות משהו טוב יותר... האמת שלא הכנתי כלום, אמרתי מה שיזרום לי על הלב אני אגיד. אבל את המסע הזה שעשינו ואת כל ההכשרה סיכמנו בעיקר עם שני אנשים שלא איתנו, בשביל שני הלוחמים האחרונים שנפלו דוד יצחק ושילה אמיר.
                    </p>
                    
                    <p className="text-primary-fifth leading-relaxed mb-4">
                      אני רוצה להגיד לכם שהילדים שלכם, אם אתם מכירים את זה או לא מכירים, אתם יודעים שזה ככה? אבל מהרגע שהם התגייסו היה להם איזה שהוא תהליך שהם עברו בפנים שלהם, שלעבור מהאני העצמי, שלצערי זה מאוד חזק בדור שלנו, להסתכל על הכלל. כן זה היה קשה, זה עדיין בתהליכים. גם אנחנו כמחלקה עדיין בתהליך, אבל זה תהליך מאוד בריא. אנחנו יוצאים מהבועה של העצמי והתחלנו להסתכל טיפה ככה (פותח את ידיו לרווחה).
                    </p>
                    
                    <p className="text-primary-fifth leading-relaxed mb-4">
                      אני לא יודע מי מספר לכם ומשתף אתכם בשולחן שבת?, האם הוא שומר את זה לעצמו? אבל הילדים שלכם עוברים פה בסיס ערכי ונבנים פה מכל דבר ומכל שבוע שאנחנו עוברים, בין אם זה שבוע קשה ובין אם זה שבוע שאנחנו חצי חצי. זה לא מובן מאיליו שהם פה, באמת לא מובן מאיליו וגם רציתי להגיד לכם שמי שמכיר או לא, אני דקל סויסה, אני סה"כ בן 23, לקחת אחריות על הילדים שלכם וזה שנתתם לי להיות אחראי על הילדים שלכם, גם עכשיו בעזרת השם בקו ולשמור עליהם ואני יודע שאני אעשה הכל ואני מבטיח לכם שאני אחזיר אותם בשלום הביתה.
                    </p>
                    
                    <p className="text-primary-fifth leading-relaxed mb-4">
                      כן יש אתגר, אני לוקח על עצמי את האתגר הזה ואני שמח מאוד שזאת המחלקה שלי. וכן כל ההורים שלנו פה גם ההורים שלי, גם אחותי פה, גם אחיינים שלי פה ואנחנו משפחה אחת (מסמן אגרוף בידיו) תודה רבה על הכל, אוהב אתכם!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Explanation Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary-fifth mb-6 text-center">
              על הנאום
            </h2>
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-primary-fifth leading-relaxed mb-4">
                בסיום מסע הכומתה של המחלקה, דקל נאם מול ההורים והחיילים. נאומו, שנאמר בפשטות מהלב, 
                חושף את תפיסת עולמו – שילוב של אחריות, מחויבות וראיית הכלל לפני הפרט.
              </p>
              <p className="text-primary-fifth leading-relaxed mb-4">
                בניגוד לנאומים רגילים שמתחילים בהצגה עצמית, דקל בחר דרך אחרת: הוא פתח במשפט שהפך 
                לשורת חייו – "בחיים אתה יכול לבחור בין שני דברים: או להתעסק בעצמך או לעשות משהו טוב יותר". 
                לאחר מכן הקדיש דברים ללוחמים שנפלו, המשיך לדבר על התהליך הערכי שהחיילים עוברים – 
                מעבר מה"אני" הפרטי אל ההסתכלות על הכלל – ורק בסוף הציג את עצמו כמי שנושא באחריות 
                להשיב את החיילים בשלום.
              </p>
              <p className="text-primary-fifth leading-relaxed mb-4">
                בנאום זה, בתוך שתי דקות, הוא פתח את ליבו בלי הכנה מוקדמת והראה מי הוא – אדם של ערכים, 
                של צניעות וענווה ושל משפחה. הוא הבטיח להורים ולחיילים שלא משנה איזה אתגר יגיע, 
                יעשה כל שביכולתו כדי להחזיר את החיילים בשלום הביתה, וסיים בתחושת משפחתיות ואהבה 
                שחיברה את כולם יחד.
              </p>
            </div>
          </div>

          {/* Memorial Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary-fifth mb-6 text-center">
              החיילים שהזכיר דקל
            </h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="bg-primary-second/10 rounded-xl p-6 mb-6">
                <p className="text-primary-fifth leading-relaxed text-center font-medium">
                  דקל הזכיר בנאומו את שני הלוחמים האחרונים שנפלו - דוד יצחק ושילה אמיר, 
                  וסיכם את המסע וההכשרה בשבילם.
                  דקל הבין בחייו את החשיבות של זיכרון והנצחה - גם של מי שלא הכיר באופן אישי, 
                  וידע שכל מי שהקריב את חייו למען מדינת ישראל ראוי לזיכרון ולכבוד, 
                  ושהזכרת השמות והסיפורים היא חלק מהמחויבות שלנו כלפי העבר והעתיד.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.izkor.gov.il/%D7%93%D7%95%D7%93-%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%99%D7%A6%D7%97%D7%A7/en_89c71e7b1d2f58974d18065d24ffce39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-reverse space-x-2 text-primary-third hover:text-primary-fourth transition-colors bg-primary-second/10 px-6 py-3 rounded-xl"
                >
                  <span>דוד יצחק - לעמוד הזיכרון</span>
                  <ExternalLink size={16} />
                </a>
                
                <a 
                  href="https://www.izkor.gov.il/%D7%A9%D7%99%D7%9C%D7%94-%D7%99%D7%95%D7%A1%D7%A3%20%D7%90%D7%9E%D7%99%D7%A8/en_89ba8affefa132511bf6ba120428c647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-reverse space-x-2 text-primary-third hover:text-primary-fourth transition-colors bg-primary-second/10 px-6 py-3 rounded-xl"
                >
                  <span>שילה אמיר - לעמוד הזיכרון</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Final Tribute */}
          <div className="text-center">
            <div className="bg-primary-second/20 p-8 rounded-2xl border-r-4 border-primary-third">
              <h3 className="text-2xl font-bold text-primary-fourth mb-4">
              הוא עמד בהבטחתו
              </h3>
              <p className="text-lg text-primary-fifth">
                דקל עמד בהבטחתו עד הרגע האחרון - הוא עשה הכול כדי להחזיר את חייליו הביתה בשלום
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Speech;

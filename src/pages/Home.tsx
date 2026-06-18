import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Calendar, MapPin, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Full-bleed cinematic hero */}
      <section className="relative h-[100svh] min-h-[520px] w-full overflow-hidden bg-primary-fifth dark:bg-[#13162a]">
        {/* Blurred backdrop keeps the screen full-bleed (no empty bars) */}
        <img
          src="./images/dekel/officer.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
        />
        {/* Foreground portrait. Knobs are SEPARATE per screen size:
            MOBILE  (no prefix): scale-[1.4]  translate-y-[10%]
            DESKTOP (md: prefix): md:scale-[2.7] md:translate-y-[50%]
            scale = zoom (higher = closer) · translate-y = vertical (higher % = moves DOWN / more face) */}
        <img
          src="./images/dekel/officer.jpg"
          alt="סרן דקל סויסה"
          className="absolute inset-0 w-full h-full object-contain object-center scale-[1.4] translate-y-[0%] md:scale-[2.7] md:translate-y-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative h-full flex flex-col items-center justify-end text-center text-white px-4 pb-28 md:pb-32"
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
            סרן דקל סויסה הי״ד
          </h1>
          <p className="text-xl md:text-3xl font-light italic drop-shadow-md max-w-2xl">
            "אל תשכחו לחייך כשאתם מתעוררים"
          </p>
          <p className="mt-4 text-sm md:text-base text-white/90 drop-shadow leading-relaxed">
             כ"א אדר א׳ תש"ס&nbsp;|&nbsp;27.2.2000&nbsp;&nbsp;·&nbsp;&nbsp; כ"ב תשרי תשפ"ד&nbsp;|&nbsp;7.10.2023
          </p>
        </motion.div>
        <a
          href="#story"
          aria-label="גלילה לסיפור חייו"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={36} />
        </a>
      </section>

      {/* Biography */}
      <div id="story" className="scroll-mt-24 container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Facts strip */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            <span className="flex items-center gap-2 bg-primary-second/20 text-primary-fourth rounded-full px-4 py-2 text-sm md:text-base">
              <Award size={18} className="text-primary-third" />
              סרן
            </span>
            <span className="flex items-center gap-2 bg-primary-second/20 text-primary-fourth rounded-full px-4 py-2 text-sm md:text-base">
              <Shield size={18} className="text-primary-third" />
              גדוד 13, גולני
            </span>
            <span className="flex items-center gap-2 bg-primary-second/20 text-primary-fourth rounded-full px-4 py-2 text-sm md:text-base">
              <Calendar size={18} className="text-primary-third" />
              נולד כ"א אדר א׳ תש"ס · 27.2.2000
            </span>
            <span className="flex items-center gap-2 bg-primary-second/20 text-primary-fourth rounded-full px-4 py-2 text-sm md:text-base">
              <Calendar size={18} className="text-primary-third" />
              נפל כ"ב תשרי תשפ"ד · 7.10.2023
            </span>
            <span className="flex items-center gap-2 bg-primary-second/20 text-primary-fourth rounded-full px-4 py-2 text-sm md:text-base">
              <MapPin size={18} className="text-primary-third" />
              מוצב פגה (מגן בארי)
            </span>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row-reverse lg:gap-12">
            {/* Images Section */}
            <div className="lg:w-2/5">
              {/* Mobile: Newspaper layout */}
              <div className="lg:hidden">
                <div className="flex gap-4 mb-6">
                  <div className="w-44 h-56 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                    <img
                      src="./images/dekel/main.JPG"
                      alt="דקל סויסה"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-base text-primary-fifth leading-relaxed">
                      דקל סויסה נולד במושב בר גיורא, בן הזקונים של משפחת סויסה – בנם של משה וגילה ואח לליטל, עדן ונוי. 
                      את לימודיו החל בבית הספר היסודי "עין הרים" והמשיך בחטיבת הביניים "אור" בצור הדסה.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Desktop: Multiple images */}
              <div className="hidden lg:block space-y-8">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="./images/dekel/maglan.JPG"
                    alt="דקל סויסה במדים"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-44 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="./images/dekel/whiteShirt.JPG"
                      alt="דקל סויסה"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-44 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="./images/dekel/profile.JPG"
                      alt="דקל סויסה"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:w-3/5 prose prose-lg max-w-none text-right">
              {/* Mobile: Full content after image */}
              <div className="lg:hidden space-y-6 text-primary-fifth leading-relaxed">
                <p>
                  בכיתה ט' עבר לפנימייה הצבאית לפיקוד של בית הספר הריאלי בחיפה, מתוך רצון ללמוד במסגרת ערכית ומאתגרת. 
                  לאחר סיום הלימודים, התנדב לשנת שירות באטלנטה, ארצות הברית, מטעם הסוכנות היהודית. 
                  במהלך השנה פעל לחיזוק הקשר בין הקהילה היהודית למדינת ישראל. עם חזרתו, הצטרף למכינה הקדם-צבאית בעלי, 
                  שם העמיק בלימוד, התבוננות פנימית והתחזקות באמונה.
                </p>

                <p>
                  דקל היה אדם של עבודה עצמית מתמשכת. ספר מסילת ישרים היה מלווה אותו לכל מקום, והוא נהג לרשום בו הערות אישיות. 
                  במחברות שכתב לעצמו תיעד מחשבות, כיווני שיפור, ודרכים לשמר ערכים חשובים – איך להיות אדם טוב יותר, יום אחרי יום.
                </p>

                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <p className="text-base text-primary-fifth leading-relaxed">
                      במרץ 2020 התגייס ליחידת מגלן. שם סיים בהצלחה את מסלול ההכשרה ושירת כסמל בצוות לוחמים. 
                      לאחר מכן יצא לקורס קצינים, ולאחר סיומו שובץ כמפקד מחלקת טירונים בגדוד 13 של גולני. 
                      דקל האמין שתפקיד המפקד הוא לא רק ללמד לחימה, אלא גם לחנך לערכים ולהוביל.
                    </p>
                  </div>
                  <div className="w-48 h-48 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src="./images/dekel/b9845ecf-e075-4faa-81b5-2e6d009d9cc6.JPG" 
                      alt="דקל סויסה במדים" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Quote Section */}
                <div className="bg-primary-second/20 p-6 rounded-xl my-8 border-r-4 border-primary-third">
                  <blockquote className="text-lg font-medium text-primary-fourth mb-2">
                    "לאדם יש שתי אפשרויות, או להתעסק בעצמך או לעשות משהו טוב יותר"
                  </blockquote>
                  <p className="text-sm text-primary-fifth">
                    דקל סויסה, נאום מסע הכומתה של המחלקה
                  </p>
                </div>

                <p>
                  בסיום מסע הכומתה של המחלקה, נאם מול ההורים והחיילים ואמר: "לאדם יש שתי אפשרויות, או להתעסק בעצמך או לעשות משהו טוב יותר". 
                  הוא סיים את נאומו בהבטחה להורים: "אני אעשה הכול כדי להחזיר את הילדים שלכם הביתה בשלום."
                </p>

                <p>
                  ביום שבת, 7 באוקטובר 2023, בעיצומה של מתקפת חמאס, דקל נשאר הקצין היחיד במוצב "פגה" (מגן בארי). 
                  הוא לקח על עצמו את הפיקוד על המוצב ותוך כדי ירי כבד, הוא עבר מעמדה לעמדה, ארגן את החיילים, 
                  חילק פקודות, דירבן, דיווח בקשר, טיפל בפצועים, והחזיק את המוצב.
                </p>

                <p>
                  הלוחמים מעידים שהוא לא עצר לרגע. הוא היה בכל מקום, דילג בין העמדות, יצר שליטה והשרה ביטחון. 
                  הוא נלחם כמו אריה. הוא העמיד אותם במעגל סביבו ואמר להם "לשם כך התאמנו, אנחנו לא נשברים, 
                  אנחנו גדוד 13, אנחנו גולני ונילחם עד טיפת הדם האחרונה".
                </p>

                <p>
                  כשמצאו אותו, היה מוקף בגופותיהם של חמישה מחבלים. חייליו העידו: "הוא הציל את חיינו. 
                  הוא נלחם בעוז וגבורה עד הרגע האחרון – והרג עשרות מחבלים."
                </p>

                <p>
                  דקל עמד בהבטחתו, עשה הכול – עד הרגע האחרון – כדי להחזיר את חייליו הביתה בשלום.
                </p>

                {/* Final Tribute */}
                <div className="text-center mt-12">
                  <h3 className="text-2xl font-bold text-primary-fourth">
                    גיבור ישראל
                  </h3>
                </div>
              </div>

              {/* Desktop: Full content */}
              <div className="hidden lg:block space-y-6 text-primary-fifth leading-relaxed">
                <p>
                  דקל סויסה נולד במושב בר גיורא, בן הזקונים של משפחת סויסה – בנם של משה וגילה ואח לליטל, עדן ונוי. 
                  את לימודיו החל בבית הספר היסודי "עין הרים" והמשיך בחטיבת הביניים "אור" בצור הדסה.
                </p>

                <p>
                  בכיתה ט' עבר לפנימייה הצבאית לפיקוד של בית הספר הריאלי בחיפה, מתוך רצון ללמוד במסגרת ערכית ומאתגרת. 
                  לאחר סיום הלימודים, התנדב לשנת שירות באטלנטה, ארצות הברית, מטעם הסוכנות היהודית. 
                  במהלך השנה פעל לחיזוק הקשר בין הקהילה היהודית למדינת ישראל. עם חזרתו, הצטרף למכינה הקדם-צבאית בעלי, 
                  שם העמיק בלימוד, התבוננות פנימית והתחזקות באמונה.
                </p>

                <p>
                  דקל היה אדם של עבודה עצמית מתמשכת. ספר מסילת ישרים היה מלווה אותו לכל מקום, והוא נהג לרשום בו הערות אישיות. 
                  במחברות שכתב לעצמו תיעד מחשבות, כיווני שיפור, ודרכים לשמר ערכים חשובים – איך להיות אדם טוב יותר, יום אחרי יום.
                </p>

                <p>
                  במרץ 2020 התגייס ליחידת מגלן. שם סיים בהצלחה את מסלול ההכשרה ושירת כסמל בצוות לוחמים. 
                  לאחר מכן יצא לקורס קצינים, ולאחר סיומו שובץ כמפקד מחלקת טירונים בגדוד 13 של גולני. 
                  דקל האמין שתפקיד המפקד הוא לא רק ללמד לחימה, אלא גם לחנך לערכים ולהוביל.
                </p>

                {/* Quote Section */}
                <div className="bg-primary-second/20 p-6 rounded-xl my-8 border-r-4 border-primary-third">
                  <blockquote className="text-lg font-bold text-primary-fourth mb-2">
                    "לאדם יש שתי אפשרויות,<br />או להתעסק בעצמך או לעשות משהו טוב יותר"
                  </blockquote>
                  <p className="text-sm text-primary-fifth">
                    דקל סויסה, נאום מסע הכומתה של המחלקה
                  </p>
                </div>

                <p>
                  בסיום מסע הכומתה של המחלקה, נאם מול ההורים והחיילים ואמר: "לאדם יש שתי אפשרויות, או להתעסק בעצמך או לעשות משהו טוב יותר". 
                  הוא סיים את נאומו בהבטחה להורים: "אני אעשה הכול כדי להחזיר את הילדים שלכם הביתה בשלום."
                </p>

                <p>
                  ביום שבת, 7 באוקטובר 2023, בעיצומה של מתקפת חמאס, דקל נשאר הקצין היחיד במוצב "פגה" (מגן בארי). 
                  הוא לקח על עצמו את הפיקוד על המוצב ותוך כדי ירי כבד, הוא עבר מעמדה לעמדה, ארגן את החיילים, 
                  חילק פקודות, דירבן, דיווח בקשר, טיפל בפצועים, והחזיק את המוצב.
                </p>

                <p>
                  הלוחמים מעידים שהוא לא עצר לרגע. הוא היה בכל מקום, דילג בין העמדות, יצר שליטה והשרה ביטחון. 
                  הוא נלחם כמו אריה. הוא העמיד אותם במעגל סביבו ואמר להם "לשם כך התאמנו, אנחנו לא נשברים, 
                  אנחנו גדוד 13, אנחנו גולני ונילחם עד טיפת הדם האחרונה".
                </p>

                <p>
                  כשמצאו אותו, היה מוקף בגופותיהם של חמישה מחבלים. חייליו העידו: "הוא הציל את חיינו. 
                  הוא נלחם בעוז וגבורה עד הרגע האחרון – והרג עשרות מחבלים."
                </p>

                <p>
                  דקל עמד בהבטחתו, עשה הכול – עד הרגע האחרון – כדי להחזיר את חייליו הביתה בשלום.
                </p>

                {/* Final Tribute */}
                <div className="text-center mt-12">
                  <h3 className="text-2xl font-bold text-primary-fourth">
                    גיבור ישראל
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 
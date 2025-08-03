import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row-reverse lg:gap-12">
            {/* Images Section */}
            <div className="lg:w-2/5">
              {/* Mobile: Newspaper layout */}
              <div className="lg:hidden">
                <div className="flex gap-4 mb-6">
                  <div className="w-48 h-48 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src="/images/dekel/main.JPG" 
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
              <div className="hidden lg:block space-y-12">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/dekel/main.JPG" 
                    alt="דקל סויסה במדים" 
                    className="w-full h-full object-cover object-[50%_10%]"
                  />
                </div>
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/dekel/officer.jpg" 
                    alt="דקל סויסה" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/dekel/whiteShirt.JPG" 
                    alt="דקל סויסה" 
                    className="w-full h-full object-cover"
                  />
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
                      src="/images/dekel/officer.jpg" 
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
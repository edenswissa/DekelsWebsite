import React from 'react';
import { motion } from 'framer-motion';
// ... existing code ...

interface ArticleItem {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  youtubeId: string;
}

const Articles: React.FC = () => {
  // Placeholder articles with the same YouTube video
  const articles: ArticleItem[] = [
    {
      id: 1,
      title: "הקרב על מוצב פגה - ערוץ 13",
      description: "ראיון עם אוהד , לוחם ותיק בפלוגה המבצעית, שנכח באותה שבת, מספר על הקרב הקשה דקה אחר דקה ועל הממשק שהיה לו עם דקל. איך דקל ניהל את הקרב ואיך בדיעבד הבין (אוהד) שדקל הציל את החיים שלו ובזכותו הוא יצא משם.  ",
      youtubeUrl: "https://www.youtube.com/watch?v=DNdbfXZ5rjo",
      youtubeId: "DNdbfXZ5rjo"
    },
    {
      id: 2,
      title: "הקרב על מוצב פגה - כאן 11",
      description: "כתבה על קרב הגבורה במוצב ״פגה״, שני חיילים שנכחו באותה שבת וניצלו הגיעו לבית משפחת סויסה כדי להודות על כך שדקל הציל את חייהם, הם מספרים מה היה שם ואיך הם שרדו, מספרים על דקל ושומעים את התחושות שעברו על המשפחה באותם רגעים.",
      youtubeUrl: "https://www.youtube.com/watch?v=f5k2tEMxxRE",
      youtubeId: "f5k2tEMxxRE"
    },
    {
      id: 3,
      title: "הדלקת נרות בבית משפחת סויסה, עם המחלקה של דקל",
      description: "נר שישי של חנוכה תשפ״ד, המחלה הפיקודית הגיעה לבית משפחת סויסה כדי להדליק נר, להתייחד עם הנופלים, לשמוע סיפורים ופשוט להיות ביחד, בכתבה מסקרים את הערב, את הקרב על המוצב ומציינים את ההקשר לשיחת הטלפון המרגשת שבועיים קודם לכן.",
      youtubeUrl: "https://www.youtube.com/watch?v=kwIG_K1ce60",
      youtubeId: "kwIG_K1ce60"
    },
    {
      id: 4,
      title: "פק״ל קפה לזכרו של סרן דקל סויסה הי״ד",
      description: "ראיון בערוץ 13 על היוזמה המבורכת של ליקר הפק״ל קפה, איך זה התחיל? מהמשמעות שהקפה מסמל עבור דקל ועד הפק״ל קפה שלו - השריד האחרון מהחדר השרוף",
      youtubeUrl: "https://www.youtube.com/watch?v=Xz1shT188zk",
      youtubeId: "Xz1shT188zk"
    },
    {
        id: 5,
        title: "ראיון עם האחים",
        description: "במהלך השבעה דיברו האחים, ליטל, עדן ונוי בחדשות הבוקר של ערוץ 13, סיפרו על הרגעים האחרונים עם סרן דקל סויסה הי״ד ועל הבשורה המרה.",
        youtubeUrl: "https://www.youtube.com/watch?v=-ZMeVgoqa1w&t=1s",
        youtubeId: "-ZMeVgoqa1w"
    },
    {
        id: 6,
        title: "הדלקת נר שביעי עם אביו, אל״מ משה סויסה",
        description: "ערוץ 14, אחרי כתבה על סיפור הגבורה של סרן דקל סויסה הי״ד במוצב פגה. אביו אל״מ משה סויסה הדליק נר שביעי באולפן לזכרו, סיפר על הדלקת נר שישי שנעשתה בביתו של דקל עם כל המחלקה השלו, ועל הקשר לנפילת סא״ל תומר גרינברג ז״ל מגד 13, ולסרן רועי מלדסי ז״ל מ״פ בגדוד 13. ",
        youtubeUrl: "https://www.youtube.com/watch?v=3cH5bFbbyQc",
        youtubeId: "3cH5bFbbyQc"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8 pt-2 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-fifth/5 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Article Header */}
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-primary-fifth">
                    {article.title}
                  </h2>
                </div>

                {/* Video Section */}
                <div className="relative aspect-video bg-gray-100">
                  <iframe
                    src={`https://www.youtube.com/embed/${article.youtubeId}?rel=0&modestbranding=1`}
                    title={article.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <p className="text-primary-fourth leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-primary-main/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-fifth mb-4">
                זיכרון חי
              </h3>
              <p className="text-primary-fourth">
                סיפורים ועדויות שמתעדים את הגבורה והמורשת של דקל
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles; 
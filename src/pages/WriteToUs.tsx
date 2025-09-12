import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Sample letters data - in real app this would come from API
const SAMPLE_LETTERS = [
  {
    id: 1,
    name: "חייל מהפלוגה",
    content: "הבן שלכם היה אחד האנשים הכי מדהימים שפגשתי בחיים שלי. הייתי לידו בשלב מסוים בקרב, הוא דיבר המון בקשר, הגיע לכל מקום, היה בכל מקום. הוא דאג לנו כל הזמן, הציל פצועים שוב ושוב, נלחם ללא הפסקה. אני נפצעתי ואז תפסתי מחסה, והוא רץ להרים את אחד החיילים שלנו שנפצע. הוא הגיע לא ברור איך, פשוט היה בכל מקום במוצב. לא עניין אותו שום דבר חוץ מלדאוג שכולנו נהיה מוגנים, ושאף אחד לא יחדור פנימה.",
    date: "2023-10-15"
  },
  {
    id: 2,
    name: "חייל מהמחלקה",
    content: "בדקות הראשונות שזה התחיל, הסמ'פ עלה מול דקל ואמר לו שהוא מפקד המוצב. הוא לא הפסיק לרוץ, לארגן את המוצב, לדלג בין העמדות, לסחוב פצועים ולוודא שהכול מסודר. הוא נלחם כמו אריה, הרג כמויות של מחבלים, והחזיק את המוצב בגבורה. בזכותו הצלחנו להילחם ולצאת בחיים.",
    date: "2023-10-10"
  },
  {
    id: 3,
    name: "חייל מהמחלקה",
    content: "דקל הקצין היחידי שנשאר, הוא בא אלינו, הבן אדם הזהב, המלאך הזה. הוא אמר לנו שאנחנו נילחם פה עד טיפת דם האחרונה, שיש לנו משימות. הוא תפס עמדה שהגיעו אליה כמויות אדירות של מחבלים, הוא הרג עשרות, הוא הציל את כולנו.",
    date: "2023-10-10"
  }
];

const WriteToUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Load last submission time from localStorage on component mount
  useEffect(() => {
    const savedTime = localStorage.getItem('lastSubmissionTime');
    if (savedTime) {
      const time = parseInt(savedTime);
      const cooldownDuration = 5 * 60 * 1000; // 5 minutes
      const remainingTime = Math.max(0, cooldownDuration - (Date.now() - time));
      
      if (remainingTime > 0) {
        setLastSubmissionTime(time);
        setCooldownTime(remainingTime);
      }
    }
  }, []);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate letters every 8 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentLetterIndex((prev) => (prev + 1) % SAMPLE_LETTERS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Cooldown timer
  useEffect(() => {
    if (lastSubmissionTime) {
      const cooldownDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
      const remainingTime = Math.max(0, cooldownDuration - (Date.now() - lastSubmissionTime));
      
      if (remainingTime > 0) {
        setCooldownTime(remainingTime);
        const timer = setInterval(() => {
          const newRemainingTime = Math.max(0, cooldownDuration - (Date.now() - lastSubmissionTime));
          setCooldownTime(newRemainingTime);
          if (newRemainingTime === 0) {
            clearInterval(timer);
          }
        }, 1000);
        
        return () => clearInterval(timer);
      }
    }
  }, [lastSubmissionTime]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    
    // Check if user is in cooldown period
    if (cooldownTime > 0) return;

    // Show confirmation dialog
    setShowConfirmDialog(true);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmDialog(false);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        name: formData.name || 'אנונימי',
        message: formData.message
      };

      await emailjs.send(
        'service_0abgpzd',
        'template_u2hdtln',
        templateParams,
        'bmY-1OeVcR5S3y45a'
      );

      setSubmitStatus('success');
      setFormData({ name: '', message: '' });
      const now = Date.now();
      setLastSubmissionTime(now);
      localStorage.setItem('lastSubmissionTime', now.toString());
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextLetter = () => {
    setIsAutoPlay(false); // Stop auto-play when user navigates
    setCurrentLetterIndex((prev) => (prev + 1) % SAMPLE_LETTERS.length);
  };

  const prevLetter = () => {
    setIsAutoPlay(false); // Stop auto-play when user navigates
    setCurrentLetterIndex((prev) => (prev - 1 + SAMPLE_LETTERS.length) % SAMPLE_LETTERS.length);
  };


  return (
    <div className="min-h-screen bg-white pt-[90px] md:pt-[195px]">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-fifth mb-4">
              כתבו לנו
            </h1>
            <p className="text-lg text-primary-fourth">
              שתפו אותנו במחשבותיכם על דקל
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Letters Carousel */}
            <div className="order-1 lg:order-1">              
              <div className="relative bg-primary-second/10 rounded-2xl p-8 min-h-[400px]">
                <div className="relative h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLetterIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <div className="text-center mb-6">
                        <Heart className="w-8 h-8 text-primary-third mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-primary-fourth mb-2">
                          {SAMPLE_LETTERS[currentLetterIndex].name}
                        </h3>
                        <p className="text-sm text-primary-fifth">
                          {new Date(SAMPLE_LETTERS[currentLetterIndex].date).toLocaleDateString('he-IL')}
                        </p>
                      </div>
                      
                      <blockquote className="text-primary-fifth leading-relaxed text-center text-lg italic">
                        "{SAMPLE_LETTERS[currentLetterIndex].content}"
                      </blockquote>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center mt-6 space-x-reverse space-x-4">
                  <button
                    onClick={prevLetter}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ChevronRight className="w-5 h-5 text-primary-fourth" />
                  </button>
                  
                  <div className="flex space-x-reverse space-x-2">
                    {SAMPLE_LETTERS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoPlay(false); // Stop auto-play when user clicks dot
                          setCurrentLetterIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentLetterIndex ? 'bg-primary-third' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextLetter}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ChevronLeft className="w-5 h-5 text-primary-fourth" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl font-bold text-primary-fifth mb-6 text-center">
                כתבו מכתב
              </h2>
              
              <div className="bg-primary-second/10 rounded-2xl p-8">
                {cooldownTime > 0 ? (
                  /* Success Message - Show when in cooldown */
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700 mb-4">
                      תודה!
                    </h3>
                    <p className="text-lg text-green-600 mb-2">
                      המכתב נשלח בהצלחה
                    </p>
                    <p className="text-sm text-primary-fifth">
                      המכתב הגיע אלינו ישירות
                    </p>
                  </motion.div>
                ) : (
                  /* Form - Show when not in cooldown */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-fifth mb-2">
                        שם (אופציונלי)
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-third focus:border-transparent transition-colors"
                        placeholder="השם שלכם"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-fifth mb-2">
                        המכתב שלכם *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={8}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-third focus:border-transparent transition-colors resize-none"
                        placeholder="שתפו אותנו במחשבותיכם על דקל..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.message.trim()}
                      className="w-full bg-primary-third text-white py-4 px-6 rounded-xl font-medium hover:bg-primary-fourth transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-reverse space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>שולח...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>שלח מכתב</span>
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center"
                        >
                          <Mail className="w-5 h-5 mx-auto mb-2" />
                          תודה! המכתב נשלח בהצלחה
                        </motion.div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center"
                        >
                          שגיאה בשליחת המכתב. אנא נסו שוב
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                )}
              </div>

              {/* Info Section */}
              <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-fifth mb-4 text-center">
                  על המכתבים
                </h3>
                <p className="text-primary-fifth leading-relaxed text-center text-sm">
                  המכתבים שאתם שולחים מגיעים אלינו ישירות. חלק מהמכתבים מוצגים באתר 
                  כדי לשמור על פרטיות. אם תשאירו פרטי התקשרות, נוכל גם לחזור אליכם. 
                  כל מכתב חשוב לנו ומגיע אלינו.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Confirmation Dialog */}
      <AnimatePresence>
        {showConfirmDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowConfirmDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-second/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary-third" />
                </div>
                
                <h3 className="text-xl font-bold text-primary-fifth mb-4">
                  שליחת מכתב
                </h3>
                
                <p className="text-primary-fourth leading-relaxed mb-8">
                  האם אתם בטוחים שברצונכם לשלוח את המכתב?<br />
                  המכתב יגיע אלינו ישירות.
                </p>
                
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setShowConfirmDialog(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors"
                  >
                    ביטול
                  </button>
                  
                  <button
                    onClick={handleConfirmSubmit}
                    className="px-6 py-3 bg-primary-third text-white rounded-xl font-medium hover:bg-primary-fourth transition-colors flex items-center space-x-reverse space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>שלח מכתב</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WriteToUs;

import React from 'react';
import { Instagram, Coffee, BookOpen, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const EXTERNAL_LINKS = [
  {
    href: 'https://www.instagram.com/remember_dekel_swissa?igsh=MWdpdWoxcGFtMzFpbg==',
    icon: Instagram,
    label: 'דף האינסטגרם לזכרו',
  },
  {
    href: 'https://morning-shops.com/LaShaker',
    icon: Coffee,
    label: 'ליקר קפה לזכרו - La Shaker',
  },
  {
    href: 'https://www.matkonzikaron.co.il/kl-hmtkvnym/דקל-סויסה-ז%D7%B4ל',
    icon: BookOpen,
    label: "מתכון עם זיכרון - עוגיות שוקולד צ'יפס",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-primary-main border-t border-primary-second/30">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <Heart size={22} className="mx-auto text-primary-third mb-3" />
          <p className="text-base md:text-lg font-bold text-primary-fifth">
            {SITE_CONFIG.title}
          </p>
          <p className="text-sm text-primary-fourth mt-1">יהי זכרו ברוך</p>

          <div className="mx-auto my-6 w-16 h-px bg-primary-second" />

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {EXTERNAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-reverse space-x-2 text-primary-fourth hover:text-primary-fifth transition-colors"
              >
                <Icon size={16} className="text-primary-third" />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

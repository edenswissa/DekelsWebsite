# תוכנית פיתוח - אתר זיכרון לדקל סויסה

## שלב 1: תכנון וסביבת פיתוח

### 📦 ספריות נדרשות

#### ספריות בסיס
```bash
npm install react react-dom react-router-dom
npm install typescript @types/react @types/react-dom
npm install tailwindcss postcss autoprefixer
npm install framer-motion lucide-react
```

#### shadcn/ui
```bash
npm install @radix-ui/react-slot @radix-ui/react-navigation-menu
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-scroll-area @radix-ui/react-separator
```

#### ספריות נוספות
```bash
npm install react-intersection-observer
npm install react-image-gallery
npm install react-player
npm install react-markdown
```

### 📁 מבנה תיקיות מפורט

```
dekelswebsite/
├── public/
│   ├── images/           # תמונות האתר
│   │   ├── dekel/        # תמונות של דקל
│   │   ├── battle/       # תמונות מהקרב
│   │   ├── articles/     # תמונות מהכתבות
│   │   ├── house/        # תמונות מבית דקל
│   │   ├── gallery/      # תמונות גלריה
│   │   └── memorials/    # תמונות הנצחות
│   ├── videos/           # סרטונים
│   ├── audio/            # הקלטות
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/           # רכיבי shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── common/
│   │       ├── ImageGallery.tsx
│   │       ├── VideoPlayer.tsx
│   │       ├── ContactForm.tsx
│   │       └── MemorialCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Battle.tsx
│   │   ├── Articles.tsx
│   │   ├── House.tsx
│   │   ├── Gallery.tsx
│   │   └── Memorials.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useImageLoader.ts
│   │   └── useRTL.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── rtl.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── rtl.css
│   ├── data/
│   │   ├── dekel-story.ts
│   │   ├── battle-story.ts
│   │   ├── articles.ts
│   │   ├── house-info.ts
│   │   ├── gallery.ts
│   │   └── memorials.ts
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### 🎨 הגדרת RTL מהבסיס

#### 1. הגדרת Tailwind CSS עם RTL
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          brown: '#8B4513',
          lightBrown: '#D2691E',
          beige: '#F5F5DC',
          darkBeige: '#DEB887',
        }
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      direction: {
        'rtl': 'rtl',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

#### 2. הגדרת CSS גלובלי
```css
/* src/styles/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap');
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  direction: rtl;
  text-align: right;
}

body {
  font-family: 'Heebo', sans-serif;
  direction: rtl;
}

/* RTL specific styles */
.rtl {
  direction: rtl;
  text-align: right;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #8B4513;
  border-radius: 4px;
}
```

### 🔧 קבצי הגדרה

#### 1. TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### 2. Vite Configuration
```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
})
```

### 🎯 משתנים גלובליים

#### 1. Constants File
```typescript
// src/lib/constants.ts
export const SITE_CONFIG = {
  title: 'אתר זיכרון לדקל סויסה ז"ל',
  description: 'אתר זיכרון אינטראקטיבי לזכרו של דקל סויסה',
  author: 'משפחת סויסה',
  language: 'he',
  direction: 'rtl',
}

export const COLORS = {
  primary: {
    brown: '#8B4513',
    lightBrown: '#D2691E',
    beige: '#F5F5DC',
    darkBeige: '#DEB887',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#6B7280',
  }
}

export const FONTS = {
  primary: 'Heebo, sans-serif',
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  }
}

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
}
```

#### 2. RTL Utilities
```typescript
// src/lib/rtl.ts
export const isRTL = () => true; // תמיד RTL עבור עברית

export const getTextDirection = () => 'rtl';

export const getTextAlignment = () => 'right';

export const getFlexDirection = (direction: 'row' | 'col' = 'row') => {
  return direction === 'row' ? 'row-reverse' : 'col';
};

export const getMarginDirection = (side: 'start' | 'end') => {
  return side === 'start' ? 'mr' : 'ml';
};

export const getPaddingDirection = (side: 'start' | 'end') => {
  return side === 'start' ? 'pr' : 'pl';
};
```

### 📱 רכיבי UI בסיסיים

#### 1. Button Component
```typescript
// src/components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary-brown text-white hover:bg-primary-lightBrown",
        outline: "border border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white",
        ghost: "hover:bg-primary-beige hover:text-primary-brown",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### 🎭 אנימציות בסיסיות

#### 1. Scroll Animation Hook
```typescript
// src/hooks/useScrollAnimation.ts
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
```

### 📄 דפים ראשיים - מבנה בסיסי

#### 1. Home Page Structure
```typescript
// src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Home = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-primary-beige">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        {/* תוכן דף הבית */}
      </motion.div>
    </div>
  );
};

export default Home;
```

## שלב הבא: יצירת הקבצים

לאחר אישור התוכנית, נתחיל ביצירת:
1. קבצי הגדרה (package.json, tailwind.config.js, וכו')
2. רכיבי UI בסיסיים
3. דפים ראשיים
4. ניווט ו-RTL

האם התוכנית נראית לך טובה? האם יש שינויים שתרצה לבצע לפני שנתחיל ביצירת הקבצים? 
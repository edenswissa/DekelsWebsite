export const SITE_CONFIG = {
  title: 'לזכרו של סרן דקל סויסה הי״ד',
  subtitle: 'אל תשכחו לחייך כשאתם מתעוררים',
  description: 'אתר זיכרון אינטראקטיבי לזכרו של דקל סויסה',
  author: 'משפחת סויסה',
  language: 'he',
  direction: 'rtl',
}

export const COLORS = {
  primary: {
    main: '#E9E4DC',      /* Alabaster - cream/off-white */
    second: '#BAC6B8',     /* Ash gray - light sage */
    third: '#8BA794',      /* Cambridge blue - medium green */
    fourth: '#5D6E75',     /* Payne's gray - dark blue-gray */
    fifth: '#2F3456',      /* Space cadet - deep navy */
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

export const NAVIGATION_ITEMS = [
  {
    name: 'דף הבית',
    path: '/',
    icon: 'home',
    isActive: true
  },
  {
    name: 'סיפור הקרב',
    path: '/battle',
    icon: 'file-text'
  },
  {
    name: 'כתבות',
    path: '/articles',
    icon: 'file-text'
  },
  {
    name: 'בית דקל',
    path: '/house',
    icon: 'building'
  },
  {
    name: 'גלריה',
    path: '/gallery',
    icon: 'image'
  },
  // {
  //   name: 'הנצחות',
  //   path: '/memorials',
  //   icon: 'heart'
  // }
] 
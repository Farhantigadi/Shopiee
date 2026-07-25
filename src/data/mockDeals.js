export const STORES = [
  { id: 'all', name: 'All Stores' },
  { id: 'amazon', name: 'Amazon India', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30', badge: 'bg-amber-500 text-slate-950' },
  { id: 'flipkart', name: 'Flipkart', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30', badge: 'bg-blue-600 text-white' },
  { id: 'myntra', name: 'Myntra', color: 'bg-pink-500/10 text-pink-400 border-pink-500/30', badge: 'bg-pink-600 text-white' },
  { id: 'ajio', name: 'AJIO', color: 'bg-purple-500/10 text-purple-400 border-purple-500/30', badge: 'bg-purple-600 text-white' },
  { id: 'shopsy', name: 'Shopsy', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30', badge: 'bg-yellow-500 text-slate-950' },
  { id: 'tatacliq', name: 'Tata CLiQ', color: 'bg-red-500/10 text-red-400 border-red-500/30', badge: 'bg-red-600 text-white' },
  { id: 'nykaa', name: 'Nykaa', color: 'bg-rose-500/10 text-rose-400 border-rose-500/30', badge: 'bg-rose-600 text-white' },
  { id: 'meesho', name: 'Meesho', color: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30', badge: 'bg-fuchsia-600 text-white' },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Deals', icon: '⚡' },
  { id: 'loot', label: 'Loot Deals (50%+ OFF)', icon: '🔥' },
  { id: 'electronics', label: 'Tech & Electronics', icon: '💻' },
  { id: 'fashion', label: 'Fashion & Apparel', icon: '👗' },
  { id: 'home', label: 'Home & Kitchen', icon: '🏠' },
  { id: 'beauty', label: 'Beauty & Personal Care', icon: '💄' },
];

export const MOCK_DEALS = [
  {
    id: 'd1',
    title: 'Apple AirPods Pro (2nd Gen) with Active Noise Cancellation (USB-C)',
    store: 'amazon',
    storeName: 'Amazon',
    category: 'electronics',
    originalPrice: 24900,
    dealPrice: 16999,
    discountPercent: 32,
    isLoot: false,
    rating: 4.8,
    reviewsCount: 14250,
    timeAgo: '2 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/airpods-pro-2',
    stockStatus: 'Verified Price Drop',
    lowestPrice30Days: 16999,
    seller: 'Appario Retail'
  },
  {
    id: 'd2',
    title: 'Sony WH-1000XM5 Wireless Industry Leading ANC Headphones',
    store: 'flipkart',
    storeName: 'Flipkart',
    category: 'electronics',
    originalPrice: 34990,
    dealPrice: 11999,
    discountPercent: 66,
    isLoot: true,
    rating: 4.9,
    reviewsCount: 8930,
    timeAgo: '5 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/sony-wh1000xm5',
    stockStatus: 'Loot Deal (Fast Selling)',
    lowestPrice30Days: 11999,
    seller: 'SuperComNet'
  },
  {
    id: 'd3',
    title: 'Puma Men Running UltraRide Speed Performance Shoes',
    store: 'myntra',
    storeName: 'Myntra',
    category: 'fashion',
    originalPrice: 7999,
    dealPrice: 2399,
    discountPercent: 70,
    isLoot: true,
    rating: 4.6,
    reviewsCount: 3210,
    timeAgo: '12 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/puma-ultraride',
    stockStatus: '70% Off Steal Price',
    lowestPrice30Days: 2399,
    seller: 'Puma Official'
  },
  {
    id: 'd4',
    title: 'Samsung Galaxy Watch 6 LTE (44mm, Sapphire Crystal Glass)',
    store: 'amazon',
    storeName: 'Amazon',
    category: 'electronics',
    originalPrice: 36999,
    dealPrice: 15499,
    discountPercent: 58,
    isLoot: true,
    rating: 4.7,
    reviewsCount: 5120,
    timeAgo: '18 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/galaxy-watch-6',
    stockStatus: '58% Price Crash',
    lowestPrice30Days: 15499,
    seller: 'STPL Trading'
  },
  {
    id: 'd5',
    title: 'Philips Air Fryer HD9252/90 with Touch Panel & 7 Presets',
    store: 'amazon',
    storeName: 'Amazon',
    category: 'home',
    originalPrice: 11995,
    dealPrice: 4299,
    discountPercent: 64,
    isLoot: true,
    rating: 4.7,
    reviewsCount: 22100,
    timeAgo: '22 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/philips-airfryer',
    stockStatus: '64% OFF Loot',
    lowestPrice30Days: 4299,
    seller: 'Cloudtail India'
  },
  {
    id: 'd6',
    title: 'Levi\'s Men 511 Slim Fit Clean Stretchable Blue Jeans',
    store: 'ajio',
    storeName: 'AJIO',
    category: 'fashion',
    originalPrice: 4599,
    dealPrice: 1379,
    discountPercent: 70,
    isLoot: true,
    rating: 4.5,
    reviewsCount: 1840,
    timeAgo: '30 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/levis-511-jeans',
    stockStatus: 'Lowest Price Today',
    lowestPrice30Days: 1379,
    seller: 'AJIO Direct'
  },
  {
    id: 'd7',
    title: 'Minimalist 10% Vitamin C Face Serum for Radiant Glow (30ml)',
    store: 'shopsy',
    storeName: 'Shopsy',
    category: 'beauty',
    originalPrice: 699,
    dealPrice: 279,
    discountPercent: 60,
    isLoot: true,
    rating: 4.8,
    reviewsCount: 19400,
    timeAgo: '38 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/minimalist-serum',
    stockStatus: '60% OFF Flash Sale',
    lowestPrice30Days: 279,
    seller: 'Minimalist Direct'
  },
  {
    id: 'd8',
    title: 'Nespresso Essenza Mini Espresso Coffee Machine',
    store: 'tatacliq',
    storeName: 'Tata CLiQ',
    category: 'home',
    originalPrice: 18990,
    dealPrice: 8490,
    discountPercent: 55,
    isLoot: false,
    rating: 4.9,
    reviewsCount: 950,
    timeAgo: '45 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9eaa03afd2af?w=600&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://shoppingenie.in/deals/nespresso-essenza',
    stockStatus: 'Verified Price Drop',
    lowestPrice30Days: 8490,
    seller: 'Tata Luxury'
  }
];

export const OFFICIAL_FAQS = [
  {
    q: 'What is ShoppinGenie?',
    a: 'ShoppinGenie (shoppingenie.in) is India\'s #1 price drop alert and deals platform. It tracks real-time price changes across Amazon, Flipkart, Myntra, Shopsy, AJIO, Nykaa, Meesho, Tata CLiQ and H&M, and surfaces the best verified loot deals and curated offers with exclusive coupon codes.'
  },
  {
    q: 'Is ShoppinGenie free to use?',
    a: 'Yes, ShoppinGenie is completely free for shoppers. You can browse price drop deals, search products, and access coupon codes at no cost.'
  },
  {
    q: 'Which shopping sites does ShoppinGenie track?',
    a: 'ShoppinGenie tracks deals from Amazon India, Flipkart, Myntra, Shopsy, AJIO, Nykaa, Purplle, Meesho, Tata CLiQ, and H&M India.'
  },
  {
    q: 'What are Loot Deals?',
    a: 'Loot Deals on ShoppinGenie are extraordinary price drops — products priced so low they feel like a steal. These are typically discounts of 50% or more and are verified before being listed.'
  },
  {
    q: 'How do I get deal alerts from ShoppinGenie?',
    a: 'You can join the ShoppinGenie Telegram channel or WhatsApp group to receive instant deal alerts as they are posted.'
  }
];

export const FAQS = OFFICIAL_FAQS;

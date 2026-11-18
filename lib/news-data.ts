export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
};

export const newsCategories = [
  "Destinations",
  "Discover Bangladesh",
  "Travel Inspiration",
  "Stories",
  "Tips",
];

// Stories follow the same order as the reference's featured carousel and news feed.
export const featuredNewsSlugs = [
  "dhaka-to-coxs-bazar-flight-guide",
  "15-emerging-travel-destinations-asia",
  "40-best-places-to-visit-in-nepal",
  "domestic-flights-bangladesh-guide",
  "bangladeshi-tourist-visa-restrictions",
  "saint-martin-travel-guide",
];

export const newsArticles: NewsArticle[] = [
  { slug: "how-to-use-a-flight-tracker", title: "How to Use a Flight Tracker: Step-by-Step Guide for Smarter Travel", category: "Tips", date: "November 12, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80", excerpt: "Track your flight in real time, understand status updates and make airport days easier with a few simple steps." },
  { slug: "how-to-deal-with-jet-lag", title: "How to Deal With Jet Lag After Travel", category: "Tips", date: "November 8, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80", excerpt: "Simple ways to adjust your routine and feel more rested after crossing time zones." },
  { slug: "travel-with-kids-from-bangladesh", title: "10 Best Places to Travel with Kids from Bangladesh in 2026", category: "Discover Bangladesh", date: "November 2, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80", excerpt: "Family-friendly destinations and simple planning tips for a smoother holiday together." },
  { slug: "maldives-visa-bangladeshi-travellers", title: "Maldives Visa for Bangladeshi Travellers: Everything You Need to Know", category: "Tips", date: "October 28, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80", excerpt: "Get ready for a relaxed Maldives escape with this straightforward travel checklist." },
  { slug: "malaysia-tourist-visa-bangladeshi-travelers", title: "Malaysia Tourist Visa for Bangladeshi Travelers: Step-by-Step Guide", category: "Tips", date: "October 24, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80", excerpt: "A practical overview of the documents and steps to prepare before your Malaysia trip." },
  { slug: "best-time-to-visit-nepal-from-bangladesh", title: "Best Time to Visit Nepal from Bangladesh: Weather, Festivals & Travel Costs", category: "Travel Inspiration", date: "October 20, 2026", readTime: "8 min read", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85", excerpt: "From clear Himalayan skies to colourful festivals, find the season that suits your Nepal trip and plan your journey from Bangladesh with confidence." },
  { slug: "sylhet-to-dhaka-airfare-comparison", title: "Sylhet to Dhaka Airfare Comparison: Which Airline is Best?", category: "Destinations", date: "October 16, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80", excerpt: "Compare flight options and find the schedule that works best for your journey." },
  { slug: "dhaka-to-saidpur-flight-schedule", title: "Dhaka to Saidpur Flight Schedule, Airlines & Ticket Cost", category: "Destinations", date: "October 12, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80", excerpt: "Plan your trip to the north with helpful information about routes, airlines and fares." },
  { slug: "dhaka-to-coxs-bazar-flight-guide", title: "Dhaka to Cox's Bazar Flight Ticket Price, Airlines, and Schedules", category: "Tips", date: "October 8, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1473116763249-2e6351c8e812?auto=format&fit=crop&w=1000&q=80", excerpt: "Compare your options and find useful tips for planning a quick trip to the coast." },
  { slug: "dhaka-to-thailand-travel-guide", title: "Dhaka to Thailand Travel Guide 2026: Flight Ticket Price, Visa Cost & Total Trip Budget", category: "Tips", date: "October 4, 2026", readTime: "8 min read", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80", excerpt: "Estimate your travel budget and get ready for a trip from Dhaka to Thailand." },
  { slug: "chittagong-to-coxs-bazar-air-travel", title: "Chittagong to Cox's Bazar Air Travel: Flight Duration, Airlines & Travel Tips", category: "Tips", date: "September 30, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1473116763249-2e6351c8e812?auto=format&fit=crop&w=1000&q=80", excerpt: "What to know when planning a short flight between Chittagong and Cox's Bazar." },
  { slug: "best-hotels-in-bangladesh", title: "10 Best Hotels in Bangladesh for Every Type of Traveller", category: "Destinations", date: "September 25, 2026", readTime: "7 min read", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80", excerpt: "Find a comfortable stay for a city break, a family holiday or a quiet weekend away." },
  { slug: "15-emerging-travel-destinations-asia", title: "15 Emerging Travel Destinations in Asia: Top Countries for 2025", category: "Travel Inspiration", date: "September 20, 2026", readTime: "7 min read", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80", excerpt: "Discover memorable places across Asia, from quiet coastal escapes to vibrant cities full of culture." },
  { slug: "40-best-places-to-visit-in-nepal", title: "40 Best Places to Visit in Nepal: Tourist Attractions & Spots", category: "Destinations", date: "September 16, 2026", readTime: "10 min read", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80", excerpt: "A guide to Nepal's mountain viewpoints, historic cities, lakes and unforgettable trails." },
  { slug: "domestic-flights-bangladesh-guide", title: "Domestic Flights in Bangladesh: Airlines, Routes, Ticket Prices, and Booking", category: "Tips", date: "September 12, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80", excerpt: "Everything to know before booking a flight between Bangladesh's most popular destinations." },
  { slug: "bangladeshi-tourist-visa-restrictions", title: "Bangladeshi Tourist Visa Restrictions 2025 – Updated List of Visa-Free & Visa-on-Arrival Countries", category: "Tips", date: "September 8, 2026", readTime: "7 min read", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80", excerpt: "Review visa information and travel requirements before choosing your next destination." },
  { slug: "saint-martin-travel-guide", title: "Saint Martin Travel Guide 2025-26: Explore the Paradise Island of Bangladesh", category: "Discover Bangladesh", date: "September 4, 2026", readTime: "9 min read", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80", excerpt: "Make the most of your island getaway with practical advice on transport, stays and what to see." },
];

export const featuredNews = featuredNewsSlugs
  .map((slug) => newsArticles.find((article) => article.slug === slug))
  .filter((article): article is NewsArticle => Boolean(article));

export const getNewsArticle = (slug: string) => newsArticles.find((article) => article.slug === slug);

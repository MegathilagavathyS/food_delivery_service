// Mock data for testing the application without a backend

export const mockRestaurants = [
  // Chennai Restaurants
  {
    id: '1',
    name: 'Saravana Bhavan',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    cuisine: 'South Indian',
    rating: 4.6,
    reviewCount: 2850,
    deliveryTime: '25-35 min',
    deliveryFee: 25,
    minOrder: 150,
    isOpen: true,
    discount: 10,
    description: 'Authentic South Indian vegetarian cuisine since 1981. Famous for dosas, idlis, and filter coffee.',
    phone: '+91 44 2434 4999',
    address: 'T. Nagar, Chennai, Tamil Nadu 600017',
    city: 'Chennai',
    area: 'T. Nagar',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    tags: ['Vegetarian', 'Traditional', 'Dosa', 'Idli'],
    priceRange: 2,
    featured: true
  },
  {
    id: '2',
    name: 'Anjappar Chettinad Restaurant',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
    cuisine: 'Chettinad',
    rating: 4.4,
    reviewCount: 1920,
    deliveryTime: '30-40 min',
    deliveryFee: 30,
    minOrder: 200,
    isOpen: true,
    description: 'Authentic Chettinad cuisine with traditional spices. Famous for mutton and chicken dishes.',
    phone: '+91 44 2618 6300',
    address: 'Anna Nagar, Chennai, Tamil Nadu 600040',
    city: 'Chennai',
    area: 'Anna Nagar',
    coordinates: { lat: 13.0850, lng: 80.2101 },
    tags: ['Non-Vegetarian', 'Spicy', 'Mutton', 'Chicken'],
    priceRange: 3,
    featured: true
  },
  {
    id: '3',
    name: 'Murugan Idli Shop',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400',
    cuisine: 'South Indian',
    rating: 4.5,
    reviewCount: 3200,
    deliveryTime: '15-25 min',
    deliveryFee: 20,
    minOrder: 100,
    isOpen: true,
    discount: 15,
    description: 'Famous for soft idlis and crispy vadas. A Chennai breakfast institution.',
    phone: '+91 44 2491 2684',
    address: 'Besant Nagar, Chennai, Tamil Nadu 600090',
    city: 'Chennai',
    area: 'Besant Nagar',
    coordinates: { lat: 13.0067, lng: 80.2669 },
    tags: ['Vegetarian', 'Breakfast', 'Idli', 'Vada'],
    priceRange: 1,
    featured: false
  },
  {
    id: '4',
    name: 'Ponnusamy Hotel',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
    cuisine: 'Chettinad',
    rating: 4.3,
    reviewCount: 1650,
    deliveryTime: '35-45 min',
    deliveryFee: 35,
    minOrder: 250,
    isOpen: true,
    description: 'Traditional Chettinad non-vegetarian specialties. Famous for biryani and seafood.',
    phone: '+91 44 2819 2345',
    address: 'Egmore, Chennai, Tamil Nadu 600008',
    city: 'Chennai',
    area: 'Egmore',
    coordinates: { lat: 13.0732, lng: 80.2609 },
    tags: ['Non-Vegetarian', 'Biryani', 'Mutton', 'Seafood'],
    priceRange: 3,
    featured: false
  },
  {
    id: '5',
    name: 'Ratna Cafe',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400',
    cuisine: 'South Indian',
    rating: 4.2,
    reviewCount: 890,
    deliveryTime: '20-30 min',
    deliveryFee: 25,
    minOrder: 120,
    isOpen: true,
    description: 'Traditional South Indian tiffin and meals. Known for authentic filter coffee.',
    phone: '+91 44 2858 4567',
    address: 'Triplicane, Chennai, Tamil Nadu 600005',
    city: 'Chennai',
    area: 'Triplicane',
    coordinates: { lat: 13.0569, lng: 80.2707 },
    tags: ['Vegetarian', 'Filter Coffee', 'Tiffin', 'Meals'],
    priceRange: 2,
    featured: false
  },
  // Perundurai Restaurants
  {
    id: '1001',
    name: 'Perundurai Spice Corner',
  image: '/images/restaurants/1001.jpg',
    cuisine: 'South Indian',
    rating: 4.4,
    reviewCount: 320,
    deliveryTime: '20-30 min',
    deliveryFee: 20,
    minOrder: 100,
    isOpen: true,
    discount: 10,
    description: 'Local favorites serving dosa, idli and thali specials in Perundurai.',
    phone: '+91 424 123 4567',
    address: 'Anna Nagar Main Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Perundurai',
    coordinates: { lat: 11.3500, lng: 77.5333 },
    tags: ['Vegetarian', 'Thali', 'Dosa'],
    priceRange: 1,
    featured: true
  },
  {
    id: '1002',
    name: 'Perundurai Mess',
  image: '/images/restaurants/1002.jpg',
    cuisine: 'Home Style',
    rating: 4.2,
    reviewCount: 210,
    deliveryTime: '25-35 min',
    deliveryFee: 25,
    minOrder: 150,
    isOpen: true,
    description: 'Homely meals and biryani, popular with local offices and students.',
    phone: '+91 424 765 4321',
    address: 'Near Perundurai Bus Stand, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Perundurai Bus Stand',
    coordinates: { lat: 11.3450, lng: 77.5370 },
    tags: ['Biryani', 'Meals', 'Non-Vegetarian'],
    priceRange: 2,
    featured: false
  },
  {
    id: '1003',
    name: 'Perundurai Sweets & Snacks',
  image: '/images/restaurants/1003.jpg',
    cuisine: 'Snacks',
    rating: 4.5,
    reviewCount: 140,
    deliveryTime: '15-25 min',
    deliveryFee: 15,
    minOrder: 80,
    isOpen: true,
    description: 'Fresh snacks, sweets and quick bites loved by locals in Perundurai.',
    phone: '+91 424 998 8776',
    address: 'Market Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Market Road',
    coordinates: { lat: 11.3475, lng: 77.5350 },
    tags: ['Snacks', 'Sweets', 'Quick Bites'],
    priceRange: 1,
    featured: false
  },
  // Additional Perundurai Restaurants provided by user
  {
    id: '1004',
    name: "Hotel Aadhav's",
  image: '/images/restaurants/1004.jpg',
    cuisine: 'South Indian',
    rating: 4.3,
    reviewCount: 220,
    deliveryTime: '20-30 min',
    deliveryFee: 20,
    minOrder: 100,
    isOpen: true,
    description: "Comfort food and local favorites at Hotel Aadhav's.",
    phone: '+91 424 000 1004',
    address: 'Main Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Perundurai',
    coordinates: { lat: 11.3490, lng: 77.5340 },
    tags: ['Local', 'Homestyle'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1005',
    name: 'Royal Chettinad Restaurant',
  image: '/images/restaurants/1005.jpg',
    cuisine: 'Chettinad',
    rating: 4.4,
    reviewCount: 180,
    deliveryTime: '30-40 min',
    deliveryFee: 25,
    minOrder: 150,
    isOpen: true,
    description: 'Classic Chettinad flavors and spicy curries.',
    phone: '+91 424 000 1005',
    address: 'Near Bus Stand, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Bus Stand',
    coordinates: { lat: 11.3465, lng: 77.5360 },
    tags: ['Chettinad', 'Spicy'],
    priceRange: 2,
    featured: false
  },
  {
    id: '1006',
    name: 'New Star Biryani',
  image: '/images/restaurants/1006.jpeg',
    cuisine: 'Biryani',
    rating: 4.5,
    reviewCount: 300,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 120,
    isOpen: true,
    description: 'Fragrant biryanis and hearty meals.',
    phone: '+91 424 000 1006',
    address: 'Market Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Market Road',
    coordinates: { lat: 11.3478, lng: 77.5345 },
    tags: ['Biryani', 'Non-Veg'],
    priceRange: 2,
    featured: true
  },
  {
    id: '1007',
    name: 'Dhaba Hut',
  image: '/images/restaurants/1007.jpeg',
    cuisine: 'Dhaba',
    rating: 4.1,
    reviewCount: 95,
    deliveryTime: '30-40 min',
    deliveryFee: 25,
    minOrder: 120,
    isOpen: true,
    description: 'Hearty dhaba-style meals and quick platters.',
    phone: '+91 424 000 1007',
    address: 'Station Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Station Road',
    coordinates: { lat: 11.3455, lng: 77.5380 },
    tags: ['Dhaba', 'Non-Veg'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1008',
    name: 'Taste Me Multi-Cuisine Restaurant',
  image: '/images/restaurants/1008.jpg',
    cuisine: 'Multi Cuisine',
    rating: 4.0,
    reviewCount: 140,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 130,
    isOpen: true,
    description: 'Multi-cuisine family restaurant with varied menu.',
    phone: '+91 424 000 1008',
    address: 'Opposite Mall, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Opposite Mall',
    coordinates: { lat: 11.3482, lng: 77.5358 },
    tags: ['Family', 'Multi-Cuisine'],
    priceRange: 2,
    featured: false
  },
  {
    id: '1009',
    name: 'Madurai Best Muniyandi Vilas',
  image: '/images/restaurants/1009.jpeg',
    cuisine: 'Madurai',
    rating: 4.4,
    reviewCount: 160,
    deliveryTime: '20-30 min',
    deliveryFee: 18,
    minOrder: 120,
    isOpen: true,
    description: 'Madurai-style non-veg specialties and biryanis.',
    phone: '+91 424 000 1009',
    address: 'Near Temple, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Temple Area',
    coordinates: { lat: 11.3495, lng: 77.5325 },
    tags: ['Madurai', 'Non-Veg'],
    priceRange: 2,
    featured: false
  },
  {
    id: '1010',
    name: 'Lakshmi Vilas Hotel',
  image: '/images/restaurants/1010.jpg',
    cuisine: 'South Indian',
    rating: 4.2,
    reviewCount: 110,
    deliveryTime: '20-30 min',
    deliveryFee: 20,
    minOrder: 100,
    isOpen: true,
    description: 'Comfortable dining and quick service.',
    phone: '+91 424 000 1010',
    address: 'Main Junction, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Main Junction',
    coordinates: { lat: 11.3502, lng: 77.5339 },
    tags: ['Hotel', 'Family'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1011',
    name: 'Jagdamba Hotel',
  image: '/images/restaurants/1011.jpg',
    cuisine: 'Multi Cuisine',
    rating: 4.0,
    reviewCount: 90,
    deliveryTime: '25-35 min',
    deliveryFee: 22,
    minOrder: 120,
    isOpen: true,
    description: 'Homely meals and quick bites.',
    phone: '+91 424 000 1011',
    address: 'Lake Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Lake Road',
    coordinates: { lat: 11.3468, lng: 77.5365 },
    tags: ['Homestyle', 'Quick Bites'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1012',
    name: 'Paradise Family Restaurant',
  image: '/images/restaurants/1012.jpeg',
    cuisine: 'Family',
    rating: 4.1,
    reviewCount: 130,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 140,
    isOpen: true,
    description: 'Family-friendly dining with varied menu.',
    phone: '+91 424 000 1012',
    address: 'Ring Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Ring Road',
    coordinates: { lat: 11.3489, lng: 77.5332 },
    tags: ['Family', 'Multi-Cuisine'],
    priceRange: 2,
    featured: false
  },
  {
    id: '1013',
    name: 'Family Time',
  image: '/images/restaurants/1013.jpg',
    cuisine: 'Home Style',
    rating: 4.0,
    reviewCount: 85,
    deliveryTime: '20-30 min',
    deliveryFee: 18,
    minOrder: 100,
    isOpen: true,
    description: 'Comfort food perfect for family meals.',
    phone: '+91 424 000 1013',
    address: 'North Street, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'North Street',
    coordinates: { lat: 11.3470, lng: 77.5348 },
    tags: ['Family', 'Homestyle'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1014',
    name: 'Sri Annam Mess',
  image: '/images/restaurants/1014.jpg',
    cuisine: 'Mess',
    rating: 4.2,
    reviewCount: 150,
    deliveryTime: '20-30 min',
    deliveryFee: 15,
    minOrder: 90,
    isOpen: true,
    description: 'Budget meals and thali specials for locals.',
    phone: '+91 424 000 1014',
    address: 'South Bazaar, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'South Bazaar',
    coordinates: { lat: 11.3462, lng: 77.5352 },
    tags: ['Thali', 'Budget'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1015',
    name: 'Kumar Mess',
  image: '/images/restaurants/1015.jpg',
    cuisine: 'Mess',
    rating: 4.3,
    reviewCount: 170,
    deliveryTime: '25-35 min',
    deliveryFee: 18,
    minOrder: 100,
    isOpen: true,
    description: 'Popular mess serving full meals and biryani.',
    phone: '+91 424 000 1015',
    address: 'North Bazaar, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'North Bazaar',
    coordinates: { lat: 11.3480, lng: 77.5368 },
    tags: ['Meals', 'Biryani'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1016',
    name: 'Jothi Bhavan',
  image: '/images/restaurants/1016.jpg',
    cuisine: 'South Indian',
    rating: 4.1,
    reviewCount: 105,
    deliveryTime: '20-30 min',
    deliveryFee: 15,
    minOrder: 90,
    isOpen: true,
    description: 'Traditional tiffin and meals.',
    phone: '+91 424 000 1016',
    address: 'Old Town, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Old Town',
    coordinates: { lat: 11.3498, lng: 77.5328 },
    tags: ['Tiffin', 'Vegetarian'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1017',
    name: 'Hotel Sri Annalakshmi Garden Restaurant',
  image: '/images/restaurants/1017.jpg',
    cuisine: 'Family',
    rating: 4.2,
    reviewCount: 125,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 140,
    isOpen: true,
    description: 'Garden-side dining and family platters.',
    phone: '+91 424 000 1017',
    address: 'Garden Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Garden Road',
    coordinates: { lat: 11.3505, lng: 77.5350 },
    tags: ['Garden', 'Family'],
    priceRange: 2,
    featured: false
  },
  {
    id: '1018',
    name: 'Meant And Eat',
  image: '/images/restaurants/1018.jpg',
    cuisine: 'Fast Food',
    rating: 4.0,
    reviewCount: 80,
    deliveryTime: '15-25 min',
    deliveryFee: 12,
    minOrder: 80,
    isOpen: true,
    description: 'Quick bites, sandwiches and combo meals.',
    phone: '+91 424 000 1018',
    address: 'College Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'College Road',
    coordinates: { lat: 11.3472, lng: 77.5322 },
    tags: ['Fast Food', 'Quick Bites'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1019',
    name: 'Ajmeer Biryani & Fast Food',
  image: '/images/restaurants/1019.jpg',
    cuisine: 'Biryani',
    rating: 4.3,
    reviewCount: 95,
    deliveryTime: '20-30 min',
    deliveryFee: 15,
    minOrder: 90,
    isOpen: true,
    description: 'Biryani and quick fast food combos.',
    phone: '+91 424 000 1019',
    address: 'East Road, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'East Road',
    coordinates: { lat: 11.3485, lng: 77.5361 },
    tags: ['Biryani', 'Fast Food'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1020',
    name: 'Kongu Panju Parotta Stall',
  image: '/images/restaurants/1020.jpg',
    cuisine: 'Street Food',
    rating: 4.5,
    reviewCount: 210,
    deliveryTime: '15-25 min',
    deliveryFee: 10,
    minOrder: 60,
    isOpen: true,
    description: 'Famous Kongu-style panju parotta and sides.',
    phone: '+91 424 000 1020',
    address: 'Food Street, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Food Street',
    coordinates: { lat: 11.3479, lng: 77.5341 },
    tags: ['Street Food', 'Parotta'],
    priceRange: 1,
    featured: true
  },
  {
    id: '1021',
    name: 'Sri Ganapathy Mess',
  image: '/images/restaurants/1021.jpg',
    cuisine: 'Mess',
    rating: 4.1,
    reviewCount: 100,
    deliveryTime: '20-30 min',
    deliveryFee: 15,
    minOrder: 90,
    isOpen: true,
    description: 'Popular mess for daily commuters and workers.',
    phone: '+91 424 000 1021',
    address: 'Industrial Area, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Industrial Area',
    coordinates: { lat: 11.3458, lng: 77.5319 },
    tags: ['Mess', 'Budget'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1022',
    name: 'Rukmani Ammal Vegetarian Restaurant',
  image: '/images/restaurants/1022.jpg',
    cuisine: 'Vegetarian',
    rating: 4.4,
    reviewCount: 145,
    deliveryTime: '20-30 min',
    deliveryFee: 15,
    minOrder: 90,
    isOpen: true,
    description: 'Pure vegetarian restaurant with traditional meals.',
    phone: '+91 424 000 1022',
    address: 'West Street, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'West Street',
    coordinates: { lat: 11.3460, lng: 77.5335 },
    tags: ['Vegetarian', 'Thali'],
    priceRange: 1,
    featured: false
  },
  {
    id: '1023',
    name: 'Shrees Restaurant',
  image: '/images/restaurants/1023.jpg',
    cuisine: 'Multi Cuisine',
    rating: 4.2,
    reviewCount: 120,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 130,
    isOpen: true,
    description: 'Comfortable dining with popular local recipes.',
    phone: '+91 424 000 1023',
    address: 'Central Plaza, Perundurai, Tamil Nadu 638052',
    city: 'Perundurai',
    area: 'Central Plaza',
    coordinates: { lat: 11.3492, lng: 77.5355 },
    tags: ['Family', 'Local'],
    priceRange: 2,
    featured: false
  },
  // Coimbatore Restaurants
  {
    id: '6',
    name: 'Annapoorna Gowrishankar',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    cuisine: 'South Indian',
    rating: 4.5,
    reviewCount: 2100,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 150,
    isOpen: true,
    discount: 20,
    description: 'Famous for traditional sweets and South Indian meals. A Coimbatore institution.',
    phone: '+91 422 2544 789',
    address: 'RS Puram, Coimbatore, Tamil Nadu 641002',
    city: 'Coimbatore',
    area: 'RS Puram',
    coordinates: { lat: 11.0168, lng: 76.9558 },
    tags: ['Vegetarian', 'Sweets', 'Snacks', 'Meals'],
    priceRange: 2,
    featured: true
  },
  {
    id: '7',
    name: 'Hari Bhavaani',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    cuisine: 'Multi Cuisine',
    rating: 4.4,
    reviewCount: 1450,
    deliveryTime: '20-30 min',
    deliveryFee: 25,
    minOrder: 180,
    isOpen: true,
    description: 'Multi-cuisine vegetarian restaurant with North Indian, Chinese, and South Indian dishes.',
    phone: '+91 422 2230 456',
    address: 'Gandhipuram, Coimbatore, Tamil Nadu 641012',
    city: 'Coimbatore',
    area: 'Gandhipuram',
    coordinates: { lat: 11.0168, lng: 76.9558 },
    tags: ['Vegetarian', 'North Indian', 'Chinese', 'Dosa'],
    priceRange: 2,
    featured: false
  },
  {
    id: '8',
    name: 'Kongu Mess',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
    cuisine: 'South Indian',
    rating: 4.3,
    reviewCount: 980,
    deliveryTime: '30-40 min',
    deliveryFee: 30,
    minOrder: 200,
    isOpen: true,
    description: 'Authentic Kongu Nadu non-vegetarian cuisine. Famous for country chicken and mutton.',
    phone: '+91 422 2665 123',
    address: 'Peelamedu, Coimbatore, Tamil Nadu 641004',
    city: 'Coimbatore',
    area: 'Peelamedu',
    coordinates: { lat: 11.0168, lng: 76.9558 },
    tags: ['Non-Vegetarian', 'Kongu Cuisine', 'Mutton', 'Chicken'],
    priceRange: 2,
    featured: false
  },
  // Madurai Restaurants
  {
    id: '9',
    name: 'Kumar Mess',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    cuisine: 'South Indian',
    rating: 4.6,
    reviewCount: 2750,
    deliveryTime: '25-35 min',
    deliveryFee: 25,
    minOrder: 180,
    isOpen: true,
    discount: 10,
    description: 'Famous for mutton dishes and parottas. A Madurai legend since 1965.',
    phone: '+91 452 2345 678',
    address: 'SS Colony, Madurai, Tamil Nadu 625010',
    city: 'Madurai',
    area: 'SS Colony',
    coordinates: { lat: 9.9252, lng: 78.1198 },
    tags: ['Non-Vegetarian', 'Mutton', 'Parotta', 'Biryani'],
    priceRange: 2,
    featured: true
  },
  {
    id: '10',
    name: 'Meenakshi Bhavan',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
    cuisine: 'South Indian',
    rating: 4.2,
    reviewCount: 1200,
    deliveryTime: '20-30 min',
    deliveryFee: 20,
    minOrder: 100,
    isOpen: true,
    description: 'Traditional vegetarian meals and tiffin items. Known for authentic taste.',
    phone: '+91 452 2534 890',
    address: 'Town Hall, Madurai, Tamil Nadu 625001',
    city: 'Madurai',
    area: 'Town Hall',
    coordinates: { lat: 9.9252, lng: 78.1198 },
    tags: ['Vegetarian', 'Meals', 'Tiffin', 'Sweets'],
    priceRange: 1,
    featured: false
  },
  // Salem Restaurants
  {
    id: '11',
    name: 'Selvam Restaurant',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
    cuisine: 'Multi Cuisine',
    rating: 4.1,
    reviewCount: 850,
    deliveryTime: '30-40 min',
    deliveryFee: 25,
    minOrder: 200,
    isOpen: true,
    description: 'Multi-cuisine restaurant with grilled specialties and biryanis.',
    phone: '+91 427 2445 123',
    address: 'Junction, Salem, Tamil Nadu 636001',
    city: 'Salem',
    area: 'Junction',
    coordinates: { lat: 11.6643, lng: 78.1460 },
    tags: ['Non-Vegetarian', 'Biryani', 'Grill', 'Tandoor'],
    priceRange: 2,
    featured: false
  },
  {
    id: '12',
    name: 'Vasantha Bhavan',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    cuisine: 'South Indian',
    rating: 4.3,
    reviewCount: 1350,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 150,
    isOpen: true,
    discount: 15,
    description: 'Famous for sweets and vegetarian delicacies. Known for quality and taste.',
    phone: '+91 427 2334 567',
    address: 'Fairlands, Salem, Tamil Nadu 636016',
    city: 'Salem',
    area: 'Fairlands',
    coordinates: { lat: 11.6643, lng: 78.1460 },
    tags: ['Vegetarian', 'Sweets', 'Chat', 'Ice Cream'],
    priceRange: 2,
    featured: false
  },
  // Trichy Restaurants
  {
    id: '13',
    name: 'Sangeetha Veg Restaurant',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    cuisine: 'Multi Cuisine',
    rating: 4.4,
    reviewCount: 1680,
    deliveryTime: '20-30 min',
    deliveryFee: 25,
    minOrder: 160,
    isOpen: true,
    description: 'Multi-cuisine vegetarian restaurant chain with consistent quality.',
    phone: '+91 431 2414 789',
    address: 'Cantonment, Trichy, Tamil Nadu 620001',
    city: 'Trichy',
    area: 'Cantonment',
    coordinates: { lat: 10.7905, lng: 78.7047 },
    tags: ['Vegetarian', 'North Indian', 'Chinese', 'Desserts'],
    priceRange: 2,
    featured: false
  },
  {
    id: '14',
    name: 'Bhimas Paradise',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
    cuisine: 'Multi Cuisine',
    rating: 4.2,
    reviewCount: 1120,
    deliveryTime: '35-45 min',
    deliveryFee: 30,
    minOrder: 250,
    isOpen: true,
    description: 'Premium non-vegetarian restaurant with biryanis and kebabs.',
    phone: '+91 431 2765 432',
    address: 'Thillai Nagar, Trichy, Tamil Nadu 620018',
    city: 'Trichy',
    area: 'Thillai Nagar',
    coordinates: { lat: 10.7905, lng: 78.7047 },
    tags: ['Non-Vegetarian', 'Biryani', 'Kebab', 'Seafood'],
    priceRange: 3,
    featured: false
  },
  // Tirunelveli Restaurants
  {
    id: '15',
    name: 'Nellai Sodhi Kadai',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    cuisine: 'South Indian',
    rating: 4.5,
    reviewCount: 1890,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 120,
    isOpen: true,
    discount: 20,
    description: 'Famous for Tirunelveli halwa and traditional meals. A heritage restaurant.',
    phone: '+91 462 2334 567',
    address: 'Town, Tirunelveli, Tamil Nadu 627001',
    city: 'Tirunelveli',
    area: 'Town',
    coordinates: { lat: 8.7139, lng: 77.7567 },
    tags: ['Vegetarian', 'Traditional', 'Halwa', 'Meals'],
    priceRange: 1,
    featured: true
  },
  // North Indian Restaurants
  {
    id: '16',
    name: 'Punjabi Dhaba',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    cuisine: 'North Indian',
    rating: 4.3,
    reviewCount: 1250,
    deliveryTime: '30-40 min',
    deliveryFee: 35,
    minOrder: 200,
    isOpen: true,
    description: 'Authentic North Indian cuisine with rich curries, naan, and tandoori dishes.',
    phone: '+91 44 2345 6789',
    address: 'Velachery, Chennai, Tamil Nadu 600042',
    city: 'Chennai',
    area: 'Velachery',
    coordinates: { lat: 12.9756, lng: 80.2207 },
    tags: ['North Indian', 'Tandoori', 'Naan', 'Curry'],
    priceRange: 3,
    featured: false
  },
  {
    id: '17',
    name: 'Amritsar Kulcha Hub',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
    cuisine: 'North Indian',
    rating: 4.4,
    reviewCount: 980,
    deliveryTime: '25-35 min',
    deliveryFee: 30,
    minOrder: 180,
    isOpen: true,
    description: 'Famous for Amritsari kulchas, paranthas, and authentic Punjabi flavors.',
    phone: '+91 422 2456 789',
    address: 'RS Puram, Coimbatore, Tamil Nadu 641002',
    city: 'Coimbatore',
    area: 'RS Puram',
    coordinates: { lat: 11.0041, lng: 76.9597 },
    tags: ['North Indian', 'Kulcha', 'Parantha', 'Punjabi'],
    priceRange: 2,
    featured: false
  },
  // Chinese Restaurants
  {
    id: '18',
    name: 'Golden Dragon',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
    cuisine: 'Chinese',
    rating: 4.2,
    reviewCount: 1450,
    deliveryTime: '30-40 min',
    deliveryFee: 40,
    minOrder: 220,
    isOpen: true,
    description: 'Indo-Chinese favorites including fried rice, noodles, and Manchurian dishes.',
    phone: '+91 44 2567 8901',
    address: 'Adyar, Chennai, Tamil Nadu 600020',
    city: 'Chennai',
    area: 'Adyar',
    coordinates: { lat: 13.0067, lng: 80.2206 },
    tags: ['Chinese', 'Fried Rice', 'Noodles', 'Manchurian'],
    priceRange: 3,
    featured: false
  },
  {
    id: '19',
    name: 'Mainland China',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400',
    cuisine: 'Chinese',
    rating: 4.5,
    reviewCount: 2100,
    deliveryTime: '35-45 min',
    deliveryFee: 45,
    minOrder: 250,
    isOpen: true,
    description: 'Premium Chinese cuisine with authentic flavors and modern presentation.',
    phone: '+91 422 2678 901',
    address: 'Saibaba Colony, Coimbatore, Tamil Nadu 641011',
    city: 'Coimbatore',
    area: 'Saibaba Colony',
    coordinates: { lat: 11.0230, lng: 76.9350 },
    tags: ['Chinese', 'Premium', 'Authentic', 'Dim Sum'],
    priceRange: 4,
    featured: true
  },
  // Beverages Cafes
  {
    id: '20',
    name: 'Cafe Coffee Day',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    cuisine: 'Beverages',
    rating: 4.1,
    reviewCount: 890,
    deliveryTime: '15-25 min',
    deliveryFee: 20,
    minOrder: 100,
    isOpen: true,
    description: 'Fresh coffee, tea, smoothies, and light snacks. Perfect for your caffeine fix.',
    phone: '+91 44 2789 0123',
    address: 'Express Avenue, Chennai, Tamil Nadu 600002',
    city: 'Chennai',
    area: 'Express Avenue',
    coordinates: { lat: 13.0732, lng: 80.2609 },
    tags: ['Coffee', 'Tea', 'Smoothies', 'Snacks'],
    priceRange: 2,
    featured: false
  },
  {
    id: '21',
    name: 'Tea Trails',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    cuisine: 'Beverages',
    rating: 4.3,
    reviewCount: 650,
    deliveryTime: '20-30 min',
    deliveryFee: 25,
    minOrder: 120,
    isOpen: true,
    description: 'Specialty teas, fresh juices, milkshakes, and healthy beverages.',
    phone: '+91 422 2890 123',
    address: 'Brookefields Mall, Coimbatore, Tamil Nadu 641001',
    city: 'Coimbatore',
    area: 'Brookefields',
    coordinates: { lat: 11.0168, lng: 76.9558 },
    tags: ['Tea', 'Juice', 'Milkshakes', 'Healthy'],
    priceRange: 2,
    featured: false
  }
];

export const mockMenus = {
  '1': [ // Saravana Bhavan
    {
      category: 'Breakfast',
      items: [
        {
          id: 'sb1',
          name: 'Masala Dosa',
          description: 'Crispy rice crepe with spiced potato filling, served with sambar and chutneys',
          price: 120,
          image: 'https://images.unsplash.com/photo-1694159370168-f9d0d1e1a1c4?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sb2',
          name: 'Idli Sambar',
          description: 'Steamed rice cakes served with lentil curry and coconut chutney',
          price: 80,
          image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sb3',
          name: 'Rava Upma',
          description: 'Semolina cooked with vegetables and spices',
          price: 90,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sb4',
          name: 'Pongal',
          description: 'Rice and lentil dish cooked with ghee and black pepper',
          price: 100,
          image: 'https://images.unsplash.com/photo-1574653853027-5d5c7b9c6b14?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sb8',
          name: 'Mysore Masala Dosa',
          description: 'Crispy dosa with spicy red chutney and potato filling',
          price: 140,
          image: 'https://images.unsplash.com/photo-1694159370168-f9d0d1e1a1c4?w=200',
          isVegetarian: true,
          isSpicy: true,
        },
        {
          id: 'sb9',
          name: 'Rava Dosa',
          description: 'Thin crispy dosa made with semolina and rice flour',
          price: 130,
          image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
    {
      category: 'Meals',
      items: [
        {
          id: 'sb5',
          name: 'South Indian Meals',
          description: 'Traditional meals with rice, sambar, rasam, vegetables, and curd',
          price: 180,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sb6',
          name: 'Curd Rice',
          description: 'Rice mixed with yogurt, tempered with mustard seeds and curry leaves',
          price: 70,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sb10',
          name: 'Paneer Butter Masala',
          description: 'Creamy tomato-based curry with soft paneer cubes',
          price: 220,
          image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
    {
      category: 'Beverages',
      items: [
        {
          id: 'sb7',
          name: 'Filter Coffee',
          description: 'Traditional South Indian coffee made with chicory',
          price: 40,
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '2': [ // Anjappar Chettinad Restaurant
    {
      category: 'Chettinad Specials',
      items: [
        {
          id: 'ac1',
          name: 'Chettinad Chicken',
          description: 'Spicy chicken curry with traditional Chettinad spices',
          price: 280,
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'ac2',
          name: 'Mutton Chukka',
          description: 'Dry mutton preparation with aromatic spices',
          price: 350,
          image: 'https://images.unsplash.com/photo-1574653853027-5d5c7b9c6b14?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'ac3',
          name: 'Chettinad Fish Curry',
          description: 'Traditional fish curry with coconut and spices',
          price: 320,
          image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
      ],
    },
    {
      category: 'Biryani',
      items: [
        {
          id: 'ac4',
          name: 'Chicken Biryani',
          description: 'Fragrant basmati rice cooked with spiced chicken',
          price: 250,
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
        {
          id: 'ac5',
          name: 'Mutton Biryani',
          description: 'Premium mutton biryani with aromatic spices',
          price: 320,
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
        {
          id: 'ac6',
          name: 'Veg Fried Rice',
          description: 'Aromatic fried rice with mixed vegetables and spices',
          price: 180,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '3': [ // Murugan Idli Shop
    {
      category: 'Breakfast Specials',
      items: [
        {
          id: 'mi1',
          name: 'Soft Idli (4 pcs)',
          description: 'Famous soft and fluffy idlis served with sambar and chutney',
          price: 60,
          image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'mi2',
          name: 'Medu Vada (2 pcs)',
          description: 'Crispy lentil donuts served with sambar and chutney',
          price: 50,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'mi3',
          name: 'Podi Idli',
          description: 'Idlis tossed with spicy powder and ghee',
          price: 80,
          image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200',
          isVegetarian: true,
          isSpicy: true,
        },
      ],
    },
  ],
  '4': [ // Ponnusamy Hotel
    {
      category: 'Chettinad Non-Veg',
      items: [
        {
          id: 'ph1',
          name: 'Pepper Chicken',
          description: 'Spicy chicken cooked with black pepper and spices',
          price: 290,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'ph2',
          name: 'Crab Masala',
          description: 'Fresh crab cooked in traditional Chettinad masala',
          price: 450,
          image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'ph3',
          name: 'Prawn Fry',
          description: 'Crispy fried prawns with spices',
          price: 380,
          image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
      ],
    },
  ],
  '9': [ // Kumar Mess
    {
      category: 'Madurai Specials',
      items: [
        {
          id: 'km1',
          name: 'Mutton Kola Urundai',
          description: 'Spiced mutton balls - a Madurai specialty',
          price: 320,
          image: 'https://images.unsplash.com/photo-1574653853027-5d5c7b9c6b14?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'km2',
          name: 'Parotta with Chicken Curry',
          description: 'Flaky bread served with spicy chicken curry',
          price: 180,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'km3',
          name: 'Mutton Biryani',
          description: 'Madurai style mutton biryani with seeraga samba rice',
          price: 350,
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
      ],
    },
  ],
  '15': [ // Nellai Sodhi Kadai
    {
      category: 'Tirunelveli Specials',
      items: [
        {
          id: 'ns1',
          name: 'Tirunelveli Halwa',
          description: 'Famous wheat halwa made with ghee and cashews',
          price: 150,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'ns2',
          name: 'Nellai Sodhi',
          description: 'Traditional coconut curry with vegetables',
          price: 120,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'ns3',
          name: 'Banana Leaf Meals',
          description: 'Traditional meals served on banana leaf',
          price: 200,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '5': [ // Ratna Cafe
    {
      category: 'South Indian Breakfast',
      items: [
        {
          id: 'rc1',
          name: 'Rava Dosa',
          description: 'Crispy semolina crepe served with sambar and chutney',
          price: 110,
          image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'rc2',
          name: 'Set Dosa (3 pcs)',
          description: 'Small thick dosas served with sambar and chutney',
          price: 90,
          image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'rc3',
          name: 'Uttapam',
          description: 'Thick pancake with onions and tomatoes',
          price: 100,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '6': [ // Annapoorna Gowrishankar
    {
      category: 'Traditional Meals',
      items: [
        {
          id: 'ag1',
          name: 'Coimbatore Special Meals',
          description: 'Traditional South Indian meals with variety of curries',
          price: 160,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'ag2',
          name: 'Ghee Roast',
          description: 'Crispy dosa roasted with ghee',
          price: 130,
          image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'ag3',
          name: 'Kongu Nadu Special',
          description: 'Regional specialty with local flavors',
          price: 180,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '7': [ // Hari Bhavaani
    {
      category: 'Multi Cuisine',
      items: [
        {
          id: 'hb1',
          name: 'Paneer Butter Masala',
          description: 'Creamy paneer curry with rich tomato gravy',
          price: 220,
          image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'hb2',
          name: 'Chicken Curry',
          description: 'Traditional chicken curry with spices',
          price: 250,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'hb3',
          name: 'Veg Fried Rice',
          description: 'Aromatic fried rice with mixed vegetables',
          price: 180,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '8': [ // Kongu Mess
    {
      category: 'Kongu Specials',
      items: [
        {
          id: 'km1',
          name: 'Kongu Chicken',
          description: 'Traditional Kongu style chicken curry',
          price: 280,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'km2',
          name: 'Nattu Kozhi Curry',
          description: 'Country chicken curry with traditional spices',
          price: 320,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'km3',
          name: 'Mutton Kuzhambu',
          description: 'Spicy mutton curry Kongu style',
          price: 350,
          image: 'https://images.unsplash.com/photo-1574653853027-5d5c7b9c6b14?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
      ],
    },
  ],
  '10': [ // Meenakshi Bhavan
    {
      category: 'Madurai Delicacies',
      items: [
        {
          id: 'mb1',
          name: 'Jigarthanda',
          description: 'Famous Madurai cold drink with milk and ice cream',
          price: 80,
          image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'mb2',
          name: 'Madurai Parotta',
          description: 'Flaky layered bread with curry',
          price: 120,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'mb3',
          name: 'Kari Dosa',
          description: 'Dosa with spicy mutton curry',
          price: 180,
          image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
      ],
    },
  ],
  '11': [ // Selvam Restaurant
    {
      category: 'Salem Specials',
      items: [
        {
          id: 'sr1',
          name: 'Salem Chicken Biryani',
          description: 'Aromatic biryani with Salem style spices',
          price: 240,
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
        {
          id: 'sr2',
          name: 'Mango Rice',
          description: 'Traditional rice dish with raw mango',
          price: 140,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sr3',
          name: 'Fish Curry',
          description: 'Fresh fish curry with coconut',
          price: 280,
          image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
      ],
    },
  ],
  '12': [ // Vasantha Bhavan
    {
      category: 'Traditional South Indian',
      items: [
        {
          id: 'vb1',
          name: 'Ghee Podi Idli',
          description: 'Idlis with spicy powder and ghee',
          price: 90,
          image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200',
          isVegetarian: true,
          isSpicy: true,
        },
        {
          id: 'vb2',
          name: 'Ven Pongal',
          description: 'Savory rice and lentil dish with pepper',
          price: 110,
          image: 'https://images.unsplash.com/photo-1574653853027-5d5c7b9c6b14?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'vb3',
          name: 'Coconut Rice',
          description: 'Rice mixed with fresh coconut and spices',
          price: 130,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '13': [ // Sangeetha Veg Restaurant
    {
      category: 'Vegetarian Specials',
      items: [
        {
          id: 'sv1',
          name: 'Paneer Tikka',
          description: 'Grilled paneer with spices and herbs',
          price: 200,
          image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sv2',
          name: 'Veg Biryani',
          description: 'Fragrant rice with mixed vegetables',
          price: 180,
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'sv3',
          name: 'Dal Tadka',
          description: 'Yellow lentils tempered with spices',
          price: 120,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '14': [ // Bhimas Paradise
    {
      category: 'Multi Cuisine Delights',
      items: [
        {
          id: 'bp1',
          name: 'Chicken 65',
          description: 'Spicy fried chicken appetizer',
          price: 220,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'bp2',
          name: 'Mushroom Masala',
          description: 'Creamy mushroom curry with spices',
          price: 180,
          image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'bp3',
          name: 'Prawn Curry',
          description: 'Fresh prawns in coconut curry',
          price: 320,
          image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
      ],
    },
  ],
  '16': [ // Punjabi Dhaba
    {
      category: 'North Indian Classics',
      items: [
        {
          id: 'pd1',
          name: 'Butter Chicken',
          description: 'Creamy tomato-based chicken curry',
          price: 280,
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
        {
          id: 'pd2',
          name: 'Dal Makhani',
          description: 'Rich black lentil curry with butter',
          price: 180,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'pd3',
          name: 'Naan',
          description: 'Soft leavened bread baked in tandoor',
          price: 60,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'pd4',
          name: 'Protein Bowl',
          description: 'Healthy bowl with grilled chicken, quinoa, and fresh vegetables',
          price: 320,
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
      ],
    },
  ],
  '17': [ // Amritsar Kulcha Hub
    {
      category: 'Punjabi Specialties',
      items: [
        {
          id: 'ak1',
          name: 'Amritsari Kulcha',
          description: 'Stuffed bread with spiced potatoes',
          price: 120,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'ak2',
          name: 'Chole Bhature',
          description: 'Spicy chickpeas with fried bread',
          price: 150,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: true,
        },
        {
          id: 'ak3',
          name: 'Lassi',
          description: 'Traditional yogurt-based drink',
          price: 80,
          image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
      ],
    },
  ],
  '18': [ // Golden Dragon
    {
      category: 'Chinese Favorites',
      items: [
        {
          id: 'gd1',
          name: 'Chicken Fried Rice',
          description: 'Wok-fried rice with chicken and vegetables',
          price: 200,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
        {
          id: 'gd2',
          name: 'Veg Manchurian',
          description: 'Deep-fried vegetable balls in tangy sauce',
          price: 160,
          image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'gd3',
          name: 'Chicken Chilli',
          description: 'Spicy chicken with bell peppers and onions',
          price: 240,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
      ],
    },
  ],
  '19': [ // Mainland China
    {
      category: 'Authentic Chinese',
      items: [
        {
          id: 'mc1',
          name: 'Hakka Noodles',
          description: 'Stir-fried noodles with vegetables',
          price: 180,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'mc2',
          name: 'Sweet and Sour Pork',
          description: 'Crispy pork in sweet and tangy sauce',
          price: 280,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
        {
          id: 'mc3',
          name: 'Schezwan Fried Rice',
          description: 'Spicy fried rice with Schezwan sauce',
          price: 220,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
          isVegetarian: true,
          isSpicy: true,
        },
      ],
    },
  ],
  '20': [ // Cafe Coffee Day
    {
      category: 'Beverages & Snacks',
      items: [
        {
          id: 'ccd1',
          name: 'Cappuccino',
          description: 'Rich coffee with steamed milk foam',
          price: 120,
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'ccd2',
          name: 'Chocolate Frappe',
          description: 'Iced chocolate drink with whipped cream',
          price: 150,
          image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'ccd3',
          name: 'Chicken Sandwich',
          description: 'Grilled chicken sandwich with vegetables',
          price: 180,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200',
          isVegetarian: false,
          isSpicy: false,
        },
      ],
    },
  ],
  '21': [ // Tea Trails
    {
      category: 'Tea & Light Bites',
      items: [
        {
          id: 'tt1',
          name: 'Masala Chai',
          description: 'Traditional spiced tea with milk',
          price: 40,
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'tt2',
          name: 'Green Tea',
          description: 'Healthy antioxidant-rich green tea',
          price: 60,
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'tt3',
          name: 'Samosa (2 pcs)',
          description: 'Crispy pastry filled with spiced potatoes',
          price: 50,
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200',
          isVegetarian: true,
          isSpicy: true,
        },
      ],
    },
  ],
  // New Perundurai restaurant menus
  '1004': [
    {
      category: 'Chef Specials',
      items: [
        { id: '1004_1', name: "Aadhav's Special Meal", description: 'Homestyle plate with 3 curries, rice and rasam', price: 120, image: '/images/restaurants/1004.svg', isVegetarian: false, isSpicy: false },
        { id: '1004_2', name: "Aadhav's Chicken Thokku", description: 'Rich spicy chicken thokku served with rice', price: 180, image: '/images/restaurants/1004.svg', isVegetarian: false, isSpicy: true },
        { id: '1004_3', name: 'Kaadai Masala (Quail)', description: 'Special kaadai quail masala with traditional spices', price: 320, image: '/images/restaurants/1004.svg', isVegetarian: false, isSpicy: true },
      ]
    },
    {
      category: 'Kothu & Chapati',
      items: [
        { id: '1004_4', name: 'Kothu Chapati', description: 'Chopped chapati tossed with spices and meat/veg', price: 140, image: '/images/restaurants/1004.svg', isVegetarian: false, isSpicy: true },
        { id: '1004_5', name: 'Chapati Mix', description: 'Chapati served with choice of curry', price: 110, image: '/images/restaurants/1004.svg', isVegetarian: true, isSpicy: false },
      ]
    },
    {
      category: 'Chettinad Specials',
      items: [
        { id: '1004_6', name: 'Chettinad Chicken Masala', description: 'Classic Chettinad chicken masala with aromatic spices', price: 200, image: '/images/restaurants/1004.svg', isVegetarian: false, isSpicy: true },
      ]
    }
  ],
  '1005': [
    {
      category: 'Chettinad Specials',
      items: [
        { id: '1005_1', name: 'Chettinad Chicken Masala', description: 'Traditional Chettinad style chicken curry with roasted spices', price: 260, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: true },
        { id: '1005_2', name: "Kaadai Chinthamani / Kaadai Fry", description: 'Signature kaadai-style fried chicken with spices', price: 290, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: true },
        { id: '1005_3', name: "Nattu Kozhi Manjal Vengayam", description: 'Country chicken with turmeric and fried onions', price: 280, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: true },
        { id: '1005_4', name: 'Mushroom Masala', description: 'Creamy mushroom curry (also available as veg option)', price: 160, image: '/images/restaurants/1005.svg', isVegetarian: true, isSpicy: false },
      ]
    },
    {
      category: 'Biryani & Rice',
      items: [
        { id: '1005_5', name: 'Chicken Biryani', description: 'Fragrant biryani with tender chicken pieces', price: 200, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: false },
        { id: '1005_6', name: 'Mutton Biryani', description: 'Slow-cooked mutton biryani with rich masala', price: 320, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: false },
        { id: '1005_7', name: 'Egg Biryani', description: 'Aromatic biryani with boiled eggs', price: 140, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: false },
      ]
    },
    {
      category: 'Parottas & Combos',
      items: [
        { id: '1005_8', name: 'Chicken Parotta', description: 'Flaky parotta served with spicy chicken gravy', price: 150, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: true },
        { id: '1005_9', name: 'Kothu Parotta', description: 'Shredded parotta tossed with meat and spices', price: 160, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: true },
      ]
    },
    {
      category: 'Soups & Starters',
      items: [
        { id: '1005_10', name: 'Chicken Manchow Soup', description: 'Hot and sour chicken soup', price: 90, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: false },
        { id: '1005_11', name: 'Tandoori Chicken (Half)', description: 'Marinated and grilled chicken', price: 240, image: '/images/restaurants/1005.svg', isVegetarian: false, isSpicy: false },
      ]
    }
  ],
  '1006': [
    {
      category: 'Popular Items',
      items: [
        { id: '1006_p1', name: 'Chicken Biryani', description: 'Local favorite biryani', price: 160, image: '/images/restaurants/1006.svg', isVegetarian: false, isSpicy: false },
        { id: '1006_p2', name: 'Egg Parotta', description: 'Flaky parotta with egg', price: 80, image: '/images/restaurants/1006.svg', isVegetarian: false, isSpicy: false },
        { id: '1006_p3', name: 'Chicken 65', description: 'Spicy fried chicken appetizer', price: 140, image: '/images/restaurants/1006.svg', isVegetarian: false, isSpicy: true },
        { id: '1006_p4', name: 'Veg Kurma', description: 'Mixed vegetable kurma', price: 120, image: '/images/restaurants/1006.svg', isVegetarian: true, isSpicy: false },
      ]
    },
    {
      category: 'Biryani',
      items: [
        { id: '1006_1', name: 'Chicken Biryani', description: 'Hyderabadi style', price: 160, image: '/images/restaurants/1006.svg', isVegetarian: false, isSpicy: false },
        { id: '1006_2', name: 'Egg Biryani', description: 'Flavorful egg biryani', price: 120, image: '/images/restaurants/1006.svg', isVegetarian: false, isSpicy: false },
      ]
    }
  ],
  '1007': [
    { category: 'Popular Items', items: [ { id: '1007_p1', name: 'Parotta with Chicken Curry', description: 'Flaky parotta with spicy chicken', price: 150, image: '/images/restaurants/1007.svg', isVegetarian: false, isSpicy: true }, { id: '1007_p2', name: 'Chicken Sukka', description: 'Dry chicken fry', price: 180, image: '/images/restaurants/1007.svg', isVegetarian: false, isSpicy: true } ] },
    { category: 'Dhaba Plates', items: [ { id: '1007_1', name: 'Dhaba Thali', description: 'Hearty thali with 2 curries', price: 110, image: '/images/restaurants/1007.svg', isVegetarian: false, isSpicy: true } ] }
  ],
  '1008': [ { category: 'Popular Items', items: [ { id: '1008_p1', name: 'Chicken Fried Rice', description: 'Wok fried rice with chicken', price: 160, image: '/images/restaurants/1008.svg', isVegetarian: false, isSpicy: false }, { id: '1008_p2', name: 'Veg Manchurian', description: 'Crispy veg balls in sauce', price: 140, image: '/images/restaurants/1008.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Multi Cuisine', items: [ { id: '1008_1', name: 'Veg Combo', description: 'Veg noodles + Manchurian', price: 150, image: '/images/restaurants/1008.svg', isVegetarian: true, isSpicy: false } ] } ],
  '1009': [ { category: 'Popular Items', items: [ { id: '1009_p1', name: 'Mutton Biryani', description: 'Madurai style mutton biryani', price: 320, image: '/images/restaurants/1009.svg', isVegetarian: false, isSpicy: true }, { id: '1009_p2', name: 'Fish Fry', description: 'Crispy fried fish', price: 220, image: '/images/restaurants/1009.svg', isVegetarian: false, isSpicy: true } ] }, { category: 'Madurai Specials', items: [ { id: '1009_1', name: 'Muniyandi Mutton', description: 'Spicy mutton curry', price: 260, image: '/images/restaurants/1009.svg', isVegetarian: false, isSpicy: true } ] } ],
  '1010': [ { category: 'Popular Items', items: [ { id: '1010_p1', name: 'Chicken Parotta', description: 'Flaky parotta with chicken curry', price: 150, image: '/images/restaurants/1010.svg', isVegetarian: false, isSpicy: true }, { id: '1010_p2', name: 'Dosa', description: 'Plain or masala dosa', price: 80, image: '/images/restaurants/1010.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Hotel Specials', items: [ { id: '1010_1', name: 'Hotel Combo Meal', description: 'Rice, sambar, 2 veg curries', price: 130, image: '/images/restaurants/1010.svg', isVegetarian: true, isSpicy: false } ] } ],
  '1011': [ { category: 'Popular Items', items: [ { id: '1011_p1', name: 'Egg Parotta', description: 'Layered parotta with egg', price: 80, image: '/images/restaurants/1011.svg', isVegetarian: false, isSpicy: false }, { id: '1011_p2', name: 'South Indian Thali', description: 'Mini thali with sambar and 2 curries', price: 110, image: '/images/restaurants/1011.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Quick Bites', items: [ { id: '1011_1', name: 'Chicken Roll', description: 'Spicy chicken roll', price: 80, image: '/images/restaurants/1011.svg', isVegetarian: false, isSpicy: true } ] } ],
  '1012': [ { category: 'Popular Items', items: [ { id: '1012_p1', name: 'South Indian Thali', description: 'Traditional thali with rice and curries', price: 150, image: '/images/restaurants/1012.svg', isVegetarian: true, isSpicy: false }, { id: '1012_p2', name: 'Chicken 65', description: 'Fried spicy chicken', price: 140, image: '/images/restaurants/1012.svg', isVegetarian: false, isSpicy: true } ] }, { category: 'Family Platters', items: [ { id: '1012_1', name: 'Family Platter', description: 'Serves 4', price: 450, image: '/images/restaurants/1012.svg', isVegetarian: false, isSpicy: false } ] } ],
  '1013': [ { category: 'Popular Items', items: [ { id: '1013_p1', name: 'Veg Thali', description: 'Seasonal veg with rice', price: 90, image: '/images/restaurants/1013.svg', isVegetarian: true, isSpicy: false }, { id: '1013_p2', name: 'Gobi 65', description: 'Crispy fried cauliflower', price: 120, image: '/images/restaurants/1013.svg', isVegetarian: true, isSpicy: true } ] }, { category: 'Home Style', items: [ { id: '1013_1', name: 'Veg Thali', description: 'Seasonal veg with rice', price: 90, image: '/images/restaurants/1013.svg', isVegetarian: true, isSpicy: false } ] } ],
  '1014': [ { category: 'Popular Items', items: [ { id: '1014_p1', name: 'Budget Thali', description: 'Economical thali', price: 75, image: '/images/restaurants/1014.svg', isVegetarian: true, isSpicy: false }, { id: '1014_p2', name: 'Fish Fry', description: 'Crispy fried fish', price: 200, image: '/images/restaurants/1014.svg', isVegetarian: false, isSpicy: true } ] }, { category: 'Thali Specials', items: [ { id: '1014_1', name: 'Budget Thali', description: 'Economical thali', price: 75, image: '/images/restaurants/1014.svg', isVegetarian: true, isSpicy: false } ] } ],
  '1015': [ { category: 'Popular Items', items: [ { id: '1015_p1', name: 'Kumar Biryani', description: 'Local style biryani', price: 150, image: '/images/restaurants/1015.svg', isVegetarian: false, isSpicy: false }, { id: '1015_p2', name: 'Parotta with Curry', description: 'Parotta served with curry', price: 120, image: '/images/restaurants/1015.svg', isVegetarian: false, isSpicy: true } ] }, { category: 'Biryani & Meals', items: [ { id: '1015_1', name: 'Kumar Biryani', description: 'Local style biryani', price: 150, image: '/images/restaurants/1015.svg', isVegetarian: false, isSpicy: false } ] } ],
  '1016': [ { category: 'Popular Items', items: [ { id: '1016_p1', name: 'Uttapam', description: 'Thick uttapam with chutney', price: 80, image: '/images/restaurants/1016.svg', isVegetarian: true, isSpicy: false }, { id: '1016_p2', name: 'Dosa', description: 'Plain or masala dosa', price: 90, image: '/images/restaurants/1016.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Tiffin', items: [ { id: '1016_1', name: 'Uttapam', description: 'Thick uttapam with chutney', price: 80, image: '/images/restaurants/1016.svg', isVegetarian: true, isSpicy: false } ] } ],
  '1017': [ { category: 'Popular Items', items: [ { id: '1017_p1', name: 'Grilled Fish', description: 'Seasonal grilled fish', price: 280, image: '/images/restaurants/1017.svg', isVegetarian: false, isSpicy: false }, { id: '1017_p2', name: 'Fish Curry', description: 'Coconut-based fish curry', price: 240, image: '/images/restaurants/1017.svg', isVegetarian: false, isSpicy: true } ] }, { category: 'Garden Specials', items: [ { id: '1017_1', name: 'Grilled Fish', description: 'Seasonal grilled fish', price: 280, image: '/images/restaurants/1017.svg', isVegetarian: false, isSpicy: false } ] } ],
  '1018': [ { category: 'Popular Items', items: [ { id: '1018_p1', name: 'Cheese Burger', description: 'Classic burger', price: 120, image: '/images/restaurants/1018.svg', isVegetarian: false, isSpicy: false }, { id: '1018_p2', name: 'Fries', description: 'Crispy french fries', price: 60, image: '/images/restaurants/1018.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Fast Food', items: [ { id: '1018_1', name: 'Cheese Burger', description: 'Classic burger', price: 120, image: '/images/restaurants/1018.svg', isVegetarian: false, isSpicy: false } ] } ],
  '1019': [ { category: 'Popular Items', items: [ { id: '1019_p1', name: 'Chicken Biryani', description: 'Flavorful biryani', price: 150, image: '/images/restaurants/1019.svg', isVegetarian: false, isSpicy: false }, { id: '1019_p2', name: 'Parotta with Curry', description: 'Parotta served with curry', price: 120, image: '/images/restaurants/1019.svg', isVegetarian: false, isSpicy: true } ] }, { category: 'Biryani & Combos', items: [ { id: '1019_1', name: 'Ajmeer Chicken Biryani', description: 'Flavorful biryani', price: 150, image: '/images/restaurants/1019.svg', isVegetarian: false, isSpicy: false } ] } ],
  '1020': [ { category: 'Popular Items', items: [ { id: '1020_p1', name: 'Kothu Parotta', description: 'Chopped parotta with egg/meat', price: 140, image: '/images/restaurants/1020.svg', isVegetarian: false, isSpicy: true }, { id: '1020_p2', name: 'Kongu Panju Parotta', description: 'Soft layered parotta', price: 40, image: '/images/restaurants/1020.svg', isVegetarian: false, isSpicy: false } ] }, { category: 'Parotta Stall', items: [ { id: '1020_1', name: 'Kongu Panju Parotta', description: 'Soft layered parotta', price: 40, image: '/images/restaurants/1020.svg', isVegetarian: false, isSpicy: false } ] } ],
  '1021': [ { category: 'Popular Items', items: [ { id: '1021_p1', name: 'Daily Thali', description: 'Daily thali with 2 curries', price: 85, image: '/images/restaurants/1021.svg', isVegetarian: true, isSpicy: false }, { id: '1021_p2', name: 'Fresh Juice', description: 'Seasonal fresh juice', price: 60, image: '/images/restaurants/1021.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Mess Meals', items: [ { id: '1021_1', name: 'Ganapathy Thali', description: 'Daily thali', price: 85, image: '/images/restaurants/1021.svg', isVegetarian: true, isSpicy: false } ] } ],
  '1022': [ { category: 'Popular Items', items: [ { id: '1022_p1', name: 'Veg Meals', description: 'Mixed veg with rice', price: 80, image: '/images/restaurants/1022.svg', isVegetarian: true, isSpicy: false }, { id: '1022_p2', name: 'Idli Sambhar', description: 'Soft idli with sambar', price: 60, image: '/images/restaurants/1022.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Vegetarian Delights', items: [ { id: '1022_1', name: 'Veg Meals', description: 'Mixed veg with rice', price: 80, image: '/images/restaurants/1022.svg', isVegetarian: true, isSpicy: false } ] } ],
  '1023': [ { category: 'Popular Items', items: [ { id: '1023_p1', name: 'Chicken Curry', description: 'Local curry with rice or parotta', price: 130, image: '/images/restaurants/1023.svg', isVegetarian: false, isSpicy: true }, { id: '1023_p2', name: 'Soft Drink / Lassi', description: 'Beverage options', price: 40, image: '/images/restaurants/1023.svg', isVegetarian: true, isSpicy: false } ] }, { category: 'Local Favorites', items: [ { id: '1023_1', name: 'Shrees Combo', description: 'Mix of local dishes', price: 140, image: '/images/restaurants/1023.svg', isVegetarian: false, isSpicy: false } ] } ],
  // Perundurai menus
  '1001': [
    {
      category: 'Dosas & Breakfast',
      items: [
        {
          id: 'p1001_1',
          name: 'Plain Dosa',
          description: 'Crispy plain dosa served with sambar and chutney',
          price: 60,
          image: 'https://images.unsplash.com/photo-1604908554022-3c9d6b9c2b6a?w=200',
          isVegetarian: true,
          isSpicy: false,
        },
        {
          id: 'p1001_2',
          name: 'Masala Dosa',
          description: 'Dosa stuffed with spiced potato masala',
          price: 90,
          image: 'https://images.unsplash.com/photo-1694159370168-f9d0d1e1a1c4?w=200',
          isVegetarian: true,
          isSpicy: false,
        }
      ]
    },
    {
      category: 'Thali',
      items: [
        {
          id: 'p1001_3',
          name: 'Vegetarian Thali',
          description: 'Assorted vegetables, sambar, rasam, rice and desserts',
          price: 150,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        }
      ]
    }
  ],
  '1002': [
    {
      category: 'Meals & Biryani',
      items: [
        {
          id: 'p1002_1',
          name: 'Chicken Biryani',
          description: 'Fragrant biryani with tender chicken pieces',
          price: 160,
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200',
          isVegetarian: false,
          isSpicy: true,
        },
        {
          id: 'p1002_2',
          name: 'Homely Veg Meal',
          description: 'Rice with vegetable curries and rasam',
          price: 120,
          image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=200',
          isVegetarian: true,
          isSpicy: false,
        }
      ]
    }
  ],
  '1003': [
    {
      category: 'Snacks & Sweets',
      items: [
        {
          id: 'p1003_1',
          name: 'Samosa (2 pcs)',
          description: 'Crispy pastry filled with spiced potato',
          price: 40,
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200',
          isVegetarian: true,
          isSpicy: true,
        },
        {
          id: 'p1003_2',
          name: 'Sweet Box',
          description: 'Assorted Indian sweets',
          price: 80,
          image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200',
          isVegetarian: true,
          isSpicy: false,
        }
      ]
    }
  ],
};

export const mockCuisines = [
  { id: '1', name: 'South Indian', image: '🍛', description: 'Traditional South Indian cuisine' },
  { id: '2', name: 'Chettinad', image: '🌶️', description: 'Spicy Chettinad specialties' },
  { id: '3', name: 'Multi Cuisine', image: '🍽️', description: 'Variety of cuisines' },
  { id: '4', name: 'North Indian', image: '🍛', description: 'Rich North Indian dishes' },
  { id: '5', name: 'Chinese', image: '🥢', description: 'Indo-Chinese favorites' },
  { id: '6', name: 'Italian', image: '🍝', description: 'Italian pasta and pizza' },
  { id: '7', name: 'Thai', image: '🍜', description: 'Authentic Thai cuisine' },
  { id: '8', name: 'Mexican', image: '🌮', description: 'Spicy Mexican food' },
];

export const mockOrders = [
  {
    id: 'order1',
    restaurant: {
      id: '1',
      name: 'Pizza Palace',
      image: '/api/placeholder/60/60',
    },
    items: [
      {
        id: 'pizza1',
        name: 'Margherita Pizza',
        price: 16.99,
        quantity: 1,
        totalPrice: 16.99,
      },
      {
        id: 'app1',
        name: 'Garlic Bread',
        price: 6.99,
        quantity: 2,
        totalPrice: 13.98,
      },
    ],
    status: 'delivered',
    total: 33.96,
    createdAt: '2024-01-15T18:30:00Z',
    deliveryAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    estimatedDeliveryTime: '30-40 min',
  },
  {
    id: 'order2',
    restaurant: {
      id: '2',
      name: 'Burger Barn',
      image: '/api/placeholder/60/60',
    },
    items: [
      {
        id: 'burger1',
        name: 'Classic Cheeseburger',
        price: 12.99,
        quantity: 2,
        totalPrice: 25.98,
      },
      {
        id: 'side1',
        name: 'French Fries',
        price: 4.99,
        quantity: 2,
        totalPrice: 9.98,
      },
    ],
    status: 'on_the_way',
    total: 38.95,
    createdAt: '2024-01-16T19:15:00Z',
    deliveryAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    estimatedDeliveryTime: '15-25 min',
  },
  {
    id: 'order3',
    restaurant: {
      id: '3',
      name: 'Sushi Zen',
      image: '/api/placeholder/60/60',
    },
    items: [
      {
        id: 'sushi1',
        name: 'California Roll',
        price: 8.99,
        quantity: 3,
        totalPrice: 26.97,
      },
    ],
    status: 'preparing',
    total: 29.96,
    createdAt: '2024-01-16T20:00:00Z',
    deliveryAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    estimatedDeliveryTime: '35-45 min',
  },
];

// No default user - require proper authentication
export const mockUser = null;

// Mock API responses for development
export const mockApiResponses = {
  '/api/restaurants': {
    restaurants: mockRestaurants,
    total: mockRestaurants.length,
  },
  '/api/cuisines': {
    cuisines: mockCuisines,
  },
  '/api/orders': {
    orders: mockOrders,
  },
  '/api/auth/me': {
    user: null, // No default user
  },
};

// Ensure every Perundurai restaurant has at least 10 menu items in mockMenus
(() => {
  const perunduraiRestaurants = mockRestaurants.filter(r => (r.city || '').toLowerCase() === 'perundurai');
  perunduraiRestaurants.forEach((r) => {
    const id = r.id;
    mockMenus[id] = mockMenus[id] || [];

    // Count current items
    let existingCount = 0;
    mockMenus[id].forEach(cat => { existingCount += (cat.items || []).length; });

    // If fewer than 10, add placeholder items across categories
    const toAdd = Math.max(0, 10 - existingCount);
    if (toAdd > 0) {
      const category = mockMenus[id].length > 0 ? mockMenus[id][0].category : 'Chef Specials';
      if (mockMenus[id].length === 0) mockMenus[id].push({ category, items: [] });

      for (let i = 0; i < toAdd; i++) {
        const itemId = `${id}_gen_${Date.now().toString().slice(-5)}_${i}`;
        mockMenus[id][0].items.push({
          id: itemId,
          name: `${r.name.split(' ')[0]} Special ${i + 1}`,
          description: `Delicious ${r.cuisine} dish prepared fresh by ${r.name}.`,
          price: Math.round(50 + Math.random() * 200),
          image: r.image || '/images/placeholder-food.jpg',
          isVegetarian: Math.random() > 0.5,
          isSpicy: Math.random() > 0.5,
        });
      }
    }
  });
})();

// Helper function to simulate API delay
export const simulateApiDelay = (ms = 100) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock API service for development
export const mockApiService = {
  get: async (url, params = {}) => {
    console.log('Mock API GET request:', { url, params });
    await simulateApiDelay(100);
    
    // Handle restaurant filtering
    if (url === '/api/restaurants') {
      console.log('Fetching restaurants with params:', params);
      let filteredRestaurants = [...mockRestaurants];
      
      // Search by name, cuisine, or tags
      if (params.search) {
        const searchTerm = params.search.toLowerCase();
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(searchTerm) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm) ||
          restaurant.description.toLowerCase().includes(searchTerm) ||
          restaurant.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          restaurant.city.toLowerCase().includes(searchTerm) ||
          restaurant.area.toLowerCase().includes(searchTerm)
        );
      }
      
      // Filter by cuisine
      if (params.cuisine) {
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant.cuisine.toLowerCase() === params.cuisine.toLowerCase()
        );
      }
      
      // Default city to Perundurai when not provided (lock the mock API to the locality)
      const effectiveCity = params.city || 'Perundurai';
      if (effectiveCity) {
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant.city.toLowerCase() === effectiveCity.toLowerCase()
        );
      }
      
      // Filter by vegetarian/non-vegetarian
      if (params.dietary) {
        if (params.dietary === 'vegetarian') {
          filteredRestaurants = filteredRestaurants.filter(restaurant =>
            restaurant.tags.some(tag => tag.toLowerCase().includes('vegetarian'))
          );
        } else if (params.dietary === 'non-vegetarian') {
          filteredRestaurants = filteredRestaurants.filter(restaurant =>
            restaurant.tags.some(tag => tag.toLowerCase().includes('non-vegetarian'))
          );
        }
      }
      
      // Filter by price range
      if (params.priceRange) {
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant.priceRange === parseInt(params.priceRange)
        );
      }
      
      // Filter by rating
      if (params.minRating) {
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant.rating >= parseFloat(params.minRating)
        );
      }
      
      // Sort restaurants
      if (params.sortBy) {
        switch (params.sortBy) {
          case 'rating':
            filteredRestaurants.sort((a, b) => b.rating - a.rating);
            break;
          case 'deliveryTime':
            filteredRestaurants.sort((a, b) => {
              const aTime = parseInt(a.deliveryTime.split('-')[0]);
              const bTime = parseInt(b.deliveryTime.split('-')[0]);
              return aTime - bTime;
            });
            break;
          case 'deliveryFee':
            filteredRestaurants.sort((a, b) => a.deliveryFee - b.deliveryFee);
            break;
          case 'name':
            filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
            break;
          default:
            // Default sort by featured first, then rating
            filteredRestaurants.sort((a, b) => {
              if (a.featured && !b.featured) return -1;
              if (!a.featured && b.featured) return 1;
              return b.rating - a.rating;
            });
        }
      }
      
      console.log('Returning restaurants:', filteredRestaurants.length);
      return {
        data: {
          restaurants: filteredRestaurants,
          total: filteredRestaurants.length,
        }
      };
    }
    
    // Handle dish search across all menus
    if (url === '/api/dishes/search') {
      let allDishes = [];
      
      // Collect all dishes from all restaurants
      Object.keys(mockMenus).forEach(restaurantId => {
        const restaurant = mockRestaurants.find(r => r.id === restaurantId);
        if (restaurant) {
          mockMenus[restaurantId].forEach(category => {
            category.items.forEach(dish => {
              allDishes.push({
                ...dish,
                restaurantId: restaurant.id,
                restaurantName: restaurant.name,
                restaurantImage: restaurant.image,
                restaurantRating: restaurant.rating,
                deliveryTime: restaurant.deliveryTime,
                deliveryFee: restaurant.deliveryFee,
                category: category.category
              });
            });
          });
        }
      });
      
      // Filter dishes
      let filteredDishes = allDishes;
      
      if (params.search) {
        const searchTerm = params.search.toLowerCase();
        filteredDishes = filteredDishes.filter(dish =>
          dish.name.toLowerCase().includes(searchTerm) ||
          dish.description.toLowerCase().includes(searchTerm) ||
          dish.category.toLowerCase().includes(searchTerm)
        );
      }
      
      if (params.dietary) {
        if (params.dietary === 'vegetarian') {
          filteredDishes = filteredDishes.filter(dish => dish.isVegetarian);
        } else if (params.dietary === 'non-vegetarian') {
          filteredDishes = filteredDishes.filter(dish => !dish.isVegetarian);
        }
      }
      
      if (params.spicy !== undefined) {
        filteredDishes = filteredDishes.filter(dish => 
          dish.isSpicy === (params.spicy === 'true')
        );
      }
      
      if (params.maxPrice) {
        filteredDishes = filteredDishes.filter(dish => 
          dish.price <= parseFloat(params.maxPrice)
        );
      }
      
      // Sort dishes
      if (params.sortBy) {
        switch (params.sortBy) {
          case 'price_asc':
            filteredDishes.sort((a, b) => a.price - b.price);
            break;
          case 'price_desc':
            filteredDishes.sort((a, b) => b.price - a.price);
            break;
          case 'name':
            filteredDishes.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'restaurant':
            filteredDishes.sort((a, b) => a.restaurantName.localeCompare(b.restaurantName));
            break;
          default:
            filteredDishes.sort((a, b) => a.name.localeCompare(b.name));
        }
      }
      
      return {
        data: {
          dishes: filteredDishes,
          total: filteredDishes.length,
        }
      };
    }
    
    // Handle restaurant by ID
    if (url.startsWith('/api/restaurants/')) {
      const id = url.split('/')[3];
      const restaurant = mockRestaurants.find(r => r.id === id);
      return { data: { restaurant } };
    }
    
    // Handle menu by restaurant ID
    if (url.includes('/menu')) {
      const id = url.split('/')[3];
      const menu = mockMenus[id] || [];
      
      // Apply dietary filters to menu items if specified
      let filteredMenu = menu;
      if (params.dietary) {
        filteredMenu = menu.map(category => ({
          ...category,
          items: category.items.filter(item => {
            if (params.dietary === 'vegetarian') return item.isVegetarian;
            if (params.dietary === 'non-vegetarian') return !item.isVegetarian;
            return true;
          })
        })).filter(category => category.items.length > 0);
      }
      
      return { data: { menu: filteredMenu } };
    }
    
    // Default responses
    const response = mockApiResponses[url];
    if (response) {
      return { data: response };
    }
    
    throw new Error(`Mock API: No response defined for ${url}`);
  },
  
  post: async (url, data) => {
    console.log('Mock API POST request:', { url, data });
    await simulateApiDelay(100);
    
    if (url === '/api/auth/login' || url === '/auth/login') {
      // Simulate login validation
      if (data.email && data.password) {
        // Create user from login data
        const user = {
          id: 'user_' + Date.now(),
          name: data.email.split('@')[0], // Use email prefix as name
          email: data.email,
          phone: '+91 98765 43210', // Default phone
          addresses: [],
          preferences: {
            cuisine: [],
            dietary: 'any',
            spiceLevel: 'medium'
          }
        };
        
        return {
          data: {
            user: user,
            token: 'mock-jwt-token-' + Date.now(),
            message: 'Login successful'
          }
        };
      } else {
        throw new Error('Invalid credentials');
      }
    }
    
    if (url === '/api/auth/register' || url === '/auth/register') {
      // Simulate registration - create new user from provided data
      const newUser = {
        id: 'user_' + Date.now(),
        name: data.name || 'New User',
        email: data.email,
        phone: data.phone || '+91 98765 43210',
        addresses: [],
        preferences: {
          cuisine: [],
          dietary: 'any',
          spiceLevel: 'medium'
        }
      };
      
      return {
        data: {
          user: newUser,
          token: 'mock-jwt-token-' + Date.now(),
          message: 'Registration successful'
        }
      };
    }
    
    if (url === '/api/orders') {
      const newOrder = {
        id: 'order' + Date.now(),
        ...data,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };
      return { data: { order: newOrder } };
    }
    
    throw new Error(`Mock API: No POST handler defined for ${url}`);
  },
  
  put: async (url, data) => {
    await simulateApiDelay(600);
    return { data: { success: true } };
  },
  
  patch: async (url, data) => {
    await simulateApiDelay(600);
    
    if (url.includes('/cancel')) {
      const orderId = url.split('/')[3];
      const order = mockOrders.find(o => o.id === orderId);
      if (order) {
        return {
          data: {
            order: { ...order, status: 'cancelled' }
          }
        };
      }
    }
    
    return { data: { success: true } };
  },
  
  delete: async (url) => {
    await simulateApiDelay(400);
    return { data: { success: true } };
  },
};

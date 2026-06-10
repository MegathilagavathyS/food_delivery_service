const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const MenuItem = require('./models/MenuItem');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/foodie-express';

const restaurants = [
  {
    name: 'Cedar & Saffron',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    cuisine: 'Mediterranean',
    rating: 4.8,
    reviewCount: 1820,
    deliveryTime: '25-35 min',
    deliveryFee: 35,
    minOrder: 250,
    isOpen: true,
    discount: 10,
    description: 'A cozy Mediterranean kitchen serving fresh grilled plates, flatbreads, and bright salads with aromatic spices.',
    phone: '+1 555 0134 987',
    address: '230 Harbor Avenue, Seaside City',
    city: 'Seaside City',
    area: 'Harbor District',
    coordinates: {
      type: 'Point',
      coordinates: [-122.4194, 37.7749]
    },
    tags: ['Mediterranean', 'Healthy', 'Grill', 'Salads'],
    priceRange: 3,
    featured: true,
    operatingHours: {
      monday: { open: '11:00', close: '22:00' },
      tuesday: { open: '11:00', close: '22:00' },
      wednesday: { open: '11:00', close: '22:00' },
      thursday: { open: '11:00', close: '22:00' },
      friday: { open: '11:00', close: '23:00' },
      saturday: { open: '11:00', close: '23:00' },
      sunday: { open: '11:00', close: '21:00' }
    }
  },
  {
    name: 'Red Lantern Kitchen',
    image: 'https://images.unsplash.com/photo-1604908177522-3ddc2cb10d09?w=800',
    cuisine: 'Asian Fusion',
    rating: 4.6,
    reviewCount: 1325,
    deliveryTime: '20-30 min',
    deliveryFee: 30,
    minOrder: 200,
    isOpen: true,
    discount: 5,
    description: 'Fast, flavorful Asian fusion favorites with wok-fired noodles, bao buns, and crispy szechuan-style bites.',
    phone: '+1 555 0176 442',
    address: '101 Eastwood Plaza, Central Square',
    city: 'Seaside City',
    area: 'Central Square',
    coordinates: {
      type: 'Point',
      coordinates: [-122.4231, 37.7765]
    },
    tags: ['Asian', 'Fusion', 'Noodles', 'Bao'],
    priceRange: 2,
    featured: false,
    operatingHours: {
      monday: { open: '10:30', close: '21:30' },
      tuesday: { open: '10:30', close: '21:30' },
      wednesday: { open: '10:30', close: '21:30' },
      thursday: { open: '10:30', close: '21:30' },
      friday: { open: '10:30', close: '22:30' },
      saturday: { open: '10:30', close: '22:30' },
      sunday: { open: '11:00', close: '21:00' }
    }
  },
  {
    name: 'The Rustic Spoon',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800',
    cuisine: 'Comfort',
    rating: 4.7,
    reviewCount: 1589,
    deliveryTime: '30-40 min',
    deliveryFee: 28,
    minOrder: 180,
    isOpen: true,
    discount: 15,
    description: 'Homestyle comfort food with rich burgers, creamy pastas, and hearty brunch plates made for sharing.',
    phone: '+1 555 0199 781',
    address: '78 Willow Lane, South Market',
    city: 'Seaside City',
    area: 'South Market',
    coordinates: {
      type: 'Point',
      coordinates: [-122.4175, 37.7709]
    },
    tags: ['Comfort', 'Burgers', 'Pasta', 'Brunch'],
    priceRange: 2,
    featured: true,
    operatingHours: {
      monday: { open: '09:00', close: '21:00' },
      tuesday: { open: '09:00', close: '21:00' },
      wednesday: { open: '09:00', close: '21:00' },
      thursday: { open: '09:00', close: '21:00' },
      friday: { open: '09:00', close: '22:00' },
      saturday: { open: '09:00', close: '22:00' },
      sunday: { open: '10:00', close: '20:00' }
    }
  }
];

const menuItemsByRestaurant = {
  'Cedar & Saffron': [
    {
      name: 'Grilled Lamb Shawarma Bowl',
      description: 'Marinated lamb with quinoa, roasted vegetables, tahini drizzle, and pickled onion.',
      price: 420,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
      category: 'Bowls',
      isVegetarian: false,
      isSpicy: false,
      spiceLevel: 'mild',
      calories: 680,
      preparationTime: 18,
      tags: ['Protein', 'Signature']
    },
    {
      name: 'Falafel Wrap',
      description: 'Crispy falafel with hummus, tabbouleh, pickled veggies, and garlic sauce.',
      price: 280,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600',
      category: 'Wraps',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'mild',
      calories: 520,
      preparationTime: 12,
      tags: ['Vegetarian', 'Quick']
    },
    {
      name: 'Zaatar Flatbread',
      description: 'Warm flatbread brushed with olive oil, zaatar, and sesame seeds.',
      price: 180,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
      category: 'Sides',
      isVegetarian: true,
      isSpicy: false,
      calories: 360,
      preparationTime: 10,
      tags: ['Shareable', 'Classic']
    },
    {
      name: 'Greek Salad',
      description: 'Crisp greens with feta, olives, cucumber, tomatoes, and lemon-oregano dressing.',
      price: 240,
      image: 'https://images.unsplash.com/photo-1565895405131-2db4a297523b?w=600',
      category: 'Salads',
      isVegetarian: true,
      isSpicy: false,
      calories: 320,
      preparationTime: 10,
      tags: ['Fresh', 'Healthy']
    },
    {
      name: 'Spiced Chicken Kebab',
      description: 'Tender chicken with aromatic herbs, served with grilled vegetables and rice pilaf.',
      price: 360,
      image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600',
      category: 'Entrées',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'medium',
      calories: 720,
      preparationTime: 20,
      tags: ['Popular', 'Hearty']
    },
    {
      name: 'Baklava Dessert',
      description: 'Layered pastry with honey and pistachios, a sweet finish to any meal.',
      price: 160,
      image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f2f1?w=600',
      category: 'Desserts',
      isVegetarian: true,
      isSpicy: false,
      calories: 430,
      preparationTime: 8,
      tags: ['Dessert', 'Sweet']
    }
  ],
  'Red Lantern Kitchen': [
    {
      name: 'Soy-Garlic Chicken Ramen',
      description: 'Rich broth with noodles, soft egg, charred chicken, and scallions.',
      price: 320,
      image: 'https://images.unsplash.com/photo-1512058564366-c9e9d31d1fd4?w=600',
      category: 'Noodles',
      isVegetarian: false,
      isSpicy: false,
      spiceLevel: 'mild',
      calories: 640,
      preparationTime: 22,
      tags: ['Comfort', 'Signature']
    },
    {
      name: 'Kimchi Fried Rice',
      description: 'Fried rice with kimchi, vegetables, and a sunny-side-up egg.',
      price: 260,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
      category: 'Rice',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'medium',
      calories: 580,
      preparationTime: 15,
      tags: ['Spicy', 'Popular']
    },
    {
      name: 'Vegetable Bao Trio',
      description: 'Steamed buns filled with shiitake, bok choy, and sweet chili tofu.',
      price: 220,
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600',
      category: 'Small Plates',
      isVegetarian: true,
      isSpicy: false,
      calories: 420,
      preparationTime: 14,
      tags: ['Shareable', 'Light']
    },
    {
      name: 'Teriyaki Salmon Bowl',
      description: 'Glazed salmon atop sushi rice with avocado, cucumber, and sesame seeds.',
      price: 390,
      image: 'https://images.unsplash.com/photo-1542366590-0d58da13ed0b?w=600',
      category: 'Bowls',
      isVegetarian: false,
      isSpicy: false,
      calories: 700,
      preparationTime: 18,
      tags: ['Fresh', 'Healthy']
    },
    {
      name: 'Szechuan Eggplant',
      description: 'Stir-fried eggplant with garlic, chili, and crunchy peanuts.',
      price: 260,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600',
      category: 'Vegetables',
      isVegetarian: true,
      isSpicy: true,
      spiceLevel: 'spicy',
      calories: 430,
      preparationTime: 16,
      tags: ['Spicy', 'Vegan Friendly']
    },
    {
      name: 'Mango Sticky Rice',
      description: 'Sweet coconut rice served with fresh mango and sesame seeds.',
      price: 180,
      image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600',
      category: 'Desserts',
      isVegetarian: true,
      isSpicy: false,
      calories: 410,
      preparationTime: 10,
      tags: ['Dessert', 'Sweet']
    }
  ],
  'The Rustic Spoon': [
    {
      name: 'BBQ Bacon Cheeseburger',
      description: 'Beef patty with smoked bacon, cheddar, caramelized onions, and house BBQ sauce.',
      price: 340,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600',
      category: 'Burgers',
      isVegetarian: false,
      isSpicy: false,
      calories: 820,
      preparationTime: 17,
      tags: ['Popular', 'Hearty']
    },
    {
      name: 'Truffle Mac & Cheese',
      description: 'Creamy macaroni baked with three cheeses and a touch of truffle oil.',
      price: 280,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
      category: 'Pastas',
      isVegetarian: true,
      isSpicy: false,
      calories: 760,
      preparationTime: 20,
      tags: ['Comfort', 'Rich']
    },
    {
      name: 'Avocado Toast',
      description: 'Sourdough toast with smashed avocado, chili flakes, and lemon zest.',
      price: 220,
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600',
      category: 'Brunch',
      isVegetarian: true,
      isSpicy: false,
      calories: 400,
      preparationTime: 12,
      tags: ['Brunch', 'Fresh']
    },
    {
      name: 'Crispy Chicken & Waffles',
      description: 'Buttermilk fried chicken atop waffles, drizzled with maple butter.',
      price: 320,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
      category: 'Brunch',
      isVegetarian: false,
      isSpicy: false,
      calories: 900,
      preparationTime: 22,
      tags: ['Sweet', 'Savory']
    },
    {
      name: 'Garden Harvest Salad',
      description: 'Seasonal greens, roasted squash, toasted seeds, and citrus vinaigrette.',
      price: 250,
      image: 'https://images.unsplash.com/photo-1524182576065-4b447ddce6e7?w=600',
      category: 'Salads',
      isVegetarian: true,
      isSpicy: false,
      calories: 310,
      preparationTime: 10,
      tags: ['Healthy', 'Light']
    },
    {
      name: 'Buffalo Chicken Sandwich',
      description: 'Spicy chicken, creamy slaw, and blue cheese on toasted brioche.',
      price: 300,
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600',
      category: 'Sandwiches',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'medium',
      calories: 750,
      preparationTime: 16,
      tags: ['Spicy', 'Classic']
    }
  ]
};

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB. Clearing existing data...');
    await mongoose.connection.dropDatabase();

    const createdRestaurants = await Restaurant.insertMany(restaurants);

    const menuItems = createdRestaurants.flatMap((restaurant) => {
      const items = menuItemsByRestaurant[restaurant.name] || [];
      return items.map((item) => ({
        ...item,
        restaurantId: restaurant._id
      }));
    });

    if (menuItems.length > 0) {
      await MenuItem.insertMany(menuItems);
    }

    console.log(`✅ Database seeding complete. Inserted ${createdRestaurants.length} restaurants and ${menuItems.length} menu items.`);
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB connection closed.');
  }
}

seedDatabase();

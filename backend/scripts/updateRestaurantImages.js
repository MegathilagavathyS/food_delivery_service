const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');
require('dotenv').config();

// Mapping of restaurant names -> new image paths (relative to public/)
const mapping = [
  { name: 'Perundurai Spice Corner', image: '/images/restaurants/2001.jpg' },
  { name: 'Perundurai Mess', image: '/images/restaurants/1002.jpg' },
  { name: 'Perundurai Sweets & Snacks', image: '/images/restaurants/1003.jpg' },
  { name: "Hotel Aadhav's", image: '/images/restaurants/1004.jpg' },
  { name: 'Royal Chettinad Restaurant', image: '/images/restaurants/1005.jpg' },
  { name: 'New Star Biryani', image: '/images/restaurants/1006.jpeg' },
  { name: 'Dhaba Hut', image: '/images/restaurants/1007.jpeg' },
  { name: 'Taste Me Multi-Cuisine Restaurant', image: '/images/restaurants/1008.jpg' },
  { name: 'Madurai Best Muniyandi Vilas', image: '/images/restaurants/1009.jpeg' },
  { name: 'Lakshmi Vilas Hotel', image: '/images/restaurants/1010.jpg' },
  { name: 'Jagdamba Hotel', image: '/images/restaurants/1011.jpg' },
  { name: 'Paradise Family Restaurant', image: '/images/restaurants/1012.jpeg' },
  { name: 'Family Time', image: '/images/restaurants/1013.jpg' },
  { name: 'Sri Annam Mess', image: '/images/restaurants/1014.jpg' },
  { name: 'Kumar Mess', image: '/images/restaurants/1015.jpg' },
  { name: 'Jothi Bhavan', image: '/images/restaurants/1016.jpg' },
  { name: 'Hotel Sri Annalakshmi Garden Restaurant', image: '/images/restaurants/1017.jpg' },
  { name: 'Meant And Eat', image: '/images/restaurants/1018.jpg' },
  { name: 'Ajmeer Biryani & Fast Food', image: '/images/restaurants/1019.jpg' },
  { name: 'Kongu Panju Parotta Stall', image: '/images/restaurants/1020.jpg' },
  { name: 'Sri Ganapathy Mess', image: '/images/restaurants/1021.jpg' },
  { name: 'Rukmani Ammal Vegetarian Restaurant', image: '/images/restaurants/1022.jpg' },
  { name: 'Shrees Restaurant', image: '/images/restaurants/1023.jpg' }
];

async function run() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error('MONGODB_URI is not set in environment. Please set it in .env before running this script.');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    for (const m of mapping) {
      // Try exact name match first
      const res = await Restaurant.updateOne({ name: m.name }, { $set: { image: m.image } });
      if (res.matchedCount === 0) {
        // If no exact match, try case-insensitive regex
        const res2 = await Restaurant.updateOne({ name: { $regex: `^${escapeRegExp(m.name)}$`, $options: 'i' } }, { $set: { image: m.image } });
        console.log(`Tried regex update for '${m.name}': matched ${res2.matchedCount}, modified ${res2.modifiedCount}`);
      } else {
        console.log(`Updated '${m.name}': matched ${res.matchedCount}, modified ${res.modifiedCount}`);
      }
    }

    console.log('Image update script finished');
    process.exit(0);
  } catch (err) {
    console.error('Error updating restaurant images:', err);
    process.exit(1);
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

if (require.main === module) {
  run();
}

module.exports = run;

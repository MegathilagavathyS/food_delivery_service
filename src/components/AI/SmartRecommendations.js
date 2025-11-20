import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import aiMealRecommendationService from '../../services/aiMealRecommendationService';

const SmartRecommendations = ({ className = '', maxRecommendations = 8 }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [context, setContext] = useState(null);
  const [explanations, setExplanations] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPreferences, setShowPreferences] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    loadRecommendations();
  }, []);

  const loadRecommendations = async () => {
    setLoading(true);
    try {
      const result = await aiMealRecommendationService.getSmartRecommendations({
        limit: maxRecommendations,
        includeWeather: true,
        includeTime: true,
        includeHealth: true,
        includeHistory: true
      });
      
      setRecommendations(result.recommendations);
      setContext(result.context);
      setExplanations(result.explanations);
    } catch (error) {
      console.error('Error loading recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    // Ensure all required properties exist with fallbacks
    const cartItem = {
      id: item.id || `ai_${Date.now()}`,
      name: item.name || 'AI Recommended Dish',
      price: item.price || 150, // Default price if not provided
      image: item.image || 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200',
      quantity: 1,
      restaurant: {
        id: item.restaurantId || 'ai_rec',
        name: item.restaurantName || 'AI Recommended'
      }
    };

    dispatch(addToCart({
      item: cartItem,
      restaurant: cartItem.restaurant
    }));

    // Learn from user action
    aiMealRecommendationService.updatePreferencesFromAction('order', item);
    
    // Show success message
    alert(`${cartItem.name} added to cart!`);
  };

  const handleLike = (item) => {
    aiMealRecommendationService.updatePreferencesFromAction('like', item);
    alert(`Thanks for the feedback! We'll recommend more dishes like ${item.name}`);
  };

  const handleDislike = (item) => {
    aiMealRecommendationService.updatePreferencesFromAction('dislike', item);
    // Remove from current recommendations
    setRecommendations(prev => prev.filter(rec => rec.id !== item.id));
    alert(`Got it! We'll avoid recommending ${item.name} in the future`);
  };

  const getRecommendationsByCategory = () => {
    if (selectedCategory === 'all') return recommendations;
    return recommendations.filter(rec => rec.type === selectedCategory);
  };

  const getTypeIcon = (type) => {
    const icons = {
      'collaborative': '👥',
      'content-based': '🎯',
      'time-based': '🕐',
      'weather-based': '🌤️',
      'health-based': '💪',
      'trending': '🔥',
      'seasonal': '🍂',
      'fallback': '⭐'
    };
    return icons[type] || '🍽️';
  };

  const getTypeLabel = (type) => {
    const labels = {
      'collaborative': 'Based on Similar Users',
      'content-based': 'Based on Your Preferences',
      'time-based': 'Perfect Timing',
      'weather-based': 'Weather Perfect',
      'health-based': 'Health Focused',
      'trending': 'Trending Now',
      'seasonal': 'Seasonal Special',
      'fallback': 'Popular Choice'
    };
    return labels[type] || 'Recommended';
  };

  const categories = [
    { key: 'all', label: 'All Recommendations', icon: '🤖' },
    { key: 'time-based', label: 'Perfect Timing', icon: '🕐' },
    { key: 'weather-based', label: 'Weather Match', icon: '🌤️' },
    { key: 'health-based', label: 'Health Goals', icon: '💪' },
    { key: 'trending', label: 'Trending', icon: '🔥' },
    { key: 'collaborative', label: 'Similar Users', icon: '👥' }
  ];

  if (loading) {
    return (
      <div className={`bg-white rounded-lg border p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="space-y-3">
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg border ${className}`}>
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🤖</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Smart Recommendations</h2>
              <p className="text-sm text-gray-600">
                Personalized suggestions based on your preferences, time, and weather
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
            >
              ⚙️ Preferences
            </button>
            <button
              onClick={loadRecommendations}
              className="px-3 py-2 text-sm bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200"
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        {/* Context Information */}
        {context && (
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <span>🕐</span>
                <span>{context.mealType} time</span>
              </div>
              {context.weather && (
                <div className="flex items-center space-x-1">
                  <span>🌤️</span>
                  <span>{Math.round(context.weather.temperature)}°C, {context.weather.condition}</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <span>🎯</span>
                <span>Personalized for you</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Filters */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.key
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {getRecommendationsByCategory().map((item, index) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 left-2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-pulse">
                    {getTypeIcon(item.type)} {getTypeLabel(item.type)}
                  </span>
                </div>
                {item.score && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-bounce">
                      {Math.round(item.score * 100)}% match
                    </span>
                  </div>
                )}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs text-gray-800 font-medium truncate">
                      🔥 AI Recommended
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleLike(item)}
                      className="text-gray-400 hover:text-green-500 text-sm"
                      title="Like this recommendation"
                    >
                      👍
                    </button>
                    <button
                      onClick={() => handleDislike(item)}
                      className="text-gray-400 hover:text-red-500 text-sm"
                      title="Don't show similar recommendations"
                    >
                      👎
                    </button>
                  </div>
                </div>

                <div className="text-xs text-gray-600 mb-2">
                  {item.cuisine} • {item.calories && `${item.calories} cal`}
                  {item.isVegetarian && <span className="ml-2 text-green-600">🌱 Veg</span>}
                </div>

                <div className="text-xs text-blue-600 mb-3 line-clamp-2">
                  {item.reason}
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-bold text-gray-900">₹{item.price}</div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getRecommendationsByCategory().length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No recommendations in this category
            </h3>
            <p className="text-gray-600">Try selecting a different category or refresh recommendations.</p>
          </div>
        )}
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">AI Preferences</h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Restrictions
                  </label>
                  <div className="space-y-2">
                    {['vegetarian', 'vegan', 'gluten-free', 'dairy-free'].map(restriction => (
                      <label key={restriction} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {restriction.replace('-', ' ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Health Goals
                  </label>
                  <div className="space-y-2">
                    {['low-calorie', 'high-protein', 'low-carb', 'balanced'].map(goal => (
                      <label key={goal} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {goal.replace('-', ' ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Spice Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="mild">Mild</option>
                    <option value="medium">Medium</option>
                    <option value="spicy">Spicy</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    setShowPreferences(false);
                    loadRecommendations();
                  }}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Save & Update Recommendations
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Learning Notice */}
      <div className="p-4 border-t bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20 animate-pulse"></div>
        <div className="relative text-center">
          <div className="text-sm font-medium text-purple-900 mb-1 animate-pulse">
            🧠 AI Learning Active
          </div>
          <div className="text-xs text-purple-700">
            Our AI learns from your orders, likes, and preferences to provide better recommendations over time
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default SmartRecommendations;

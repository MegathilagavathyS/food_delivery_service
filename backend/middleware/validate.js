const { z } = require('zod');

const validateSchema = (schema, location = 'body') => (req, res, next) => {
  try {
    const parsed = schema.parse(req[location]);
    req[location] = parsed;
    return next();
  } catch (error) {
    const formattedErrors = error.errors.map((err) => ({
      path: err.path.join('.') || location,
      message: err.message
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: formattedErrors
    });
  }
};

const registerSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(50, 'Name must be under 50 characters'),
  email: z.string().trim().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z.string().trim().optional()
});

const loginSchema = z.object({
  email: z.string().trim().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  remember: z.boolean().optional()
});

const orderItemSchema = z.object({
  menuItemId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid menu item ID'),
  quantity: z.number().int().positive('Quantity must be greater than zero'),
  name: z.string().trim().max(200).optional(),
  customizations: z.array(z.object({
    name: z.string().trim().min(1).max(100),
    selectedOptions: z.array(z.string().trim().min(1).max(100)).optional(),
    additionalPrice: z.number().min(0).optional()
  })).optional(),
  specialInstructions: z.string().trim().max(200).optional()
});

const deliveryAddressSchema = z.object({
  address: z.string().trim().min(1, 'Address is required').max(500),
  city: z.string().trim().min(1, 'City is required').max(100),
  area: z.string().trim().min(1, 'Area is required').max(100),
  coordinates: z.object({
    lat: z.number().finite(),
    lng: z.number().finite()
  }).optional(),
  contactName: z.string().trim().max(100).optional(),
  contactPhone: z.string().trim().max(20).optional()
});

const createOrderSchema = z.object({
  restaurantId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid restaurant ID'),
  items: z.array(orderItemSchema).min(1, 'At least one order item is required'),
  deliveryAddress: deliveryAddressSchema,
  paymentMethod: z.enum(['stripe', 'razorpay', 'cash', 'wallet', 'pending']),
  paymentId: z.string().trim().optional(),
  couponCode: z.string().trim().max(50).optional()
});

module.exports = {
  validateSchema,
  registerSchema,
  loginSchema,
  createOrderSchema
};

/* eslint-disable no-undef */
import apiService from './api';

class RazorpayService {
  constructor() {
    this.keyId = process.env.REACT_APP_RAZORPAY_KEY_ID || '';
    this.scriptLoaded = false;
    this.mockMode = process.env.REACT_APP_USE_MOCK_API === 'true';
  }

  loadRazorpayScript() {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        return reject(new Error('Window is not available'));
      }

      if (window.Razorpay) {
        this.scriptLoaded = true;
        return resolve(true);
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        this.scriptLoaded = true;
        resolve(true);
      };
      script.onerror = () => reject(new Error('Failed to load Razorpay checkout script'));
      document.body.appendChild(script);
    });
  }

  async createRazorpayOrder({ amount, currency = 'INR', receipt }) {
    if (this.mockMode) {
      return {
        id: `mock_order_${Date.now()}`,
        currency,
        amount: Math.round(amount * 100),
        receipt: receipt || `mock_receipt_${Date.now()}`,
        status: 'created'
      };
    }

    const response = await apiService.post('/api/payments/create-razorpay-order', {
      amount,
      currency,
      receipt
    });

    return response.data;
  }

  async initiatePayment({
    razorpayOrder,
    amount,
    currency = 'INR',
    customerDetails = {},
    orderId,
    onSuccess,
    onFailure
  }) {
    try {
      if (this.mockMode) {
        const mockResponse = {
          razorpay_payment_id: `mock_payment_${Date.now()}`,
          razorpay_order_id: razorpayOrder.id,
          razorpay_signature: 'mock_signature'
        };
        if (onSuccess) onSuccess(mockResponse);
        return;
      }

      if (!this.scriptLoaded) {
        await this.loadRazorpayScript();
      }

      if (!razorpayOrder || !razorpayOrder.id) {
        throw new Error('A valid Razorpay order object is required');
      }

      const options = {
        key: this.keyId,
        amount: Math.round(amount * 100),
        currency,
        name: 'FoodieExpress',
        description: `Payment for order ${orderId || razorpayOrder.receipt}`,
        image: '/logo192.png',
        order_id: razorpayOrder.id,
        prefill: {
          name: customerDetails.name || '',
          email: customerDetails.email || '',
          contact: customerDetails.phone || ''
        },
        notes: {
          order_id: orderId || razorpayOrder.receipt || '',
          customer_id: customerDetails.id || ''
        },
        theme: {
          color: '#f97316'
        },
        modal: {
          ondismiss: () => {
            if (onFailure) {
              onFailure({
                error: {
                  code: 'PAYMENT_CANCELLED',
                  description: 'Payment was cancelled by the user'
                }
              });
            }
          }
        },
        handler: async (response) => {
          try {
            const verificationResponse = await this.verifyPayment({
              orderId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            if (verificationResponse.success) {
              if (onSuccess) {
                onSuccess(verificationResponse.data);
              }
            } else {
              if (onFailure) {
                onFailure({
                  error: {
                    code: 'VERIFICATION_FAILED',
                    description: verificationResponse.message || 'Payment verification failed'
                  }
                });
              }
            }
          } catch (error) {
            console.error('Error verifying Razorpay payment:', error);
            if (onFailure) {
              onFailure({
                error: {
                  code: 'VERIFICATION_ERROR',
                  description: error.message || 'Payment verification failed'
                }
              });
            }
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('[RazorpayService] initiatePayment error:', error);
      if (onFailure) {
        onFailure({
          error: {
            code: 'PAYMENT_INIT_FAILED',
            description: error.message || 'Failed to initialize payment'
          }
        });
      }
    }
  }

  async verifyPayment({ orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature }) {
    if (this.mockMode) {
      return {
        success: true,
        message: 'Mock verification successful',
        data: {
          orderId,
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature
        }
      };
    }

    const response = await apiService.post('/api/payments/razorpay/verify', {
      orderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    });

    return response;
  }

  async verifyOtp({ otp, paymentId, tokenId, contact }) {
    const payload = { otp };
    if (paymentId) payload.payment_id = paymentId;
    if (tokenId) payload.token_id = tokenId;
    if (contact) payload.contact = contact;

    return apiService.post('/api/payments/verify-otp', payload);
  }

  isRazorpayAvailable() {
    return typeof window !== 'undefined' && !!window.Razorpay;
  }
}

const razorpayService = new RazorpayService();

export default razorpayService;

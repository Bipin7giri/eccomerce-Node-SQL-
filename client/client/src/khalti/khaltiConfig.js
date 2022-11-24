/** @format */

import KhaltiCheckout from 'khalti-checkout-web';
import apiClient from '../api/index';
let config = {
  // replace this key with yours
  publicKey: '',
  productIdentity: '1234567',
  productName: 'Multishop',
  productUrl: 'http://127.0.0.1:3000',
  eventHandler: {
    async onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      const res = await apiClient.post('/payment', payload);
      if (res) {
        console.log(res.data);
      }
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log('widget is closing');
    },
  },
  paymentPreference: [
    'KHALTI',
    'EBANKING',
    'MOBILE_BANKING',
    'CONNECT_IPS',
    'SCT',
  ],
};
export default config;

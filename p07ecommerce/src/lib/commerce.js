import Commerce from '@chec/commerce.js';

//create public key from commercejs.com
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY,true);
// import AES from 'crypto-js/aes';
// import CryptoJS from 'crypto-js/core';

import CryptoJS from 'crypto-js';
const phrase = 'TRACK_MAN';

const encryption = {
  encrypt(phraseToEncrypt: string) {
    return CryptoJS.AES.encrypt(phraseToEncrypt, phrase).toString();
  },
  decrypt(ciphertext: string) {
    return CryptoJS.AES.decrypt(ciphertext, phrase).toString(CryptoJS.enc.Utf8);
  },
};

export default encryption;

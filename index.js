const { encryptText, decryptText } = require('./FunctionCipher');

const SALT = '!@#$%^&*()';

(async () => {
  const encrypted = await encryptText('C0d3r!', '1234', SALT);
  console.log(encrypted);

  const decrypted = await decryptText(encrypted.encrypted, '1234', SALT, encrypted.iv);
  console.log(decrypted);
})();

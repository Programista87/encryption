const { pbkdf2 } = require('crypto');

const userPassword = process.argv[2];
const SALT = '@$#@ EV%$#%VERYBNT*^R%&%#$$^!#@$XVCNBUP_)(?_+_}{P?|:';
const GOOD_PASSWORD = '4a8dfcd7da0ef4359b5ccf16abb1f743c942fb237f0edaa4f0ed706c03c4f87742f35fe9a97c1eee02591d005f8b06c0daec5b70657691a5f826ec866a95450a';

pbkdf2(userPassword, SALT, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) {
    console.log('ERROR', err);
  } else if (derivedKey.toString('hex') === GOOD_PASSWORD) {
    console.log('Logged In');
  } else {
    console.log('Nope!');
  }
});

const { pbkdf2 } = require('crypto');

pbkdf2('Test hashowania 2 sposobem ','@$#@ EV%$#%VERYBNT*^R%&%#$$^!#@$XVCNBUP_)(?_+_}{P?|:', 100000,64,'sha512',(err,derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex'));
});
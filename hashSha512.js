const { createHmac } = require('crypto');

const salt = 'ASEfrkaeo90rie wvmdsm 94r943r043i8tW$%W$#VFB WRYT$%';
const hash = createHmac('sha512', salt)
  .update('Tekst do zahashowania')
  .digest('hex');
console.log(hash);

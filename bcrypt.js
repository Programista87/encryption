const { hash, compare } = require('bcrypt');
hash('Hash finalny 2022',10, (err,hash) => {
    if (err) {
        console.error(err);
    } else {
        console.log(hash);

        compare('Hash finalny 2022', hash, (err, res) => {
            if(res) {
                console.log('Logged in!');
            } else {
                console.log('Nope!');
            }
        });
    }
});
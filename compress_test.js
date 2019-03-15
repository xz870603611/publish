var images = require('images');
images('./image/test.jpg').size(400)
    .save('./image/output.jpg', {
        quality : 50
    });
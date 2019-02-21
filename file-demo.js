const fs = require('fs');

// async file read
// __dirname => current dir
// __filename => current file

fs.readFile(__dirname + '/README.md', 'utf-8', function (err,content) {
    if(err){
        console.log(err);
    }else{
        console.log(content);
    }
});
console.log('file read end...........'); // close first.

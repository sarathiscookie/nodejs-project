const { readFile, writeFile } = require('fs')
console.log('start');
readFile('uploads/test_one.txt', 'utf8', (err, data_one) => {
    if(err) throw err;
    readFile('uploads/test_two.txt', 'utf8', (err, data_two) => {
        if(err) throw err;
        writeFile('uploads/result_async.txt', `Message is: ${data_one} ${data_two}!!`, 'utf8', (err) => {
            if(err) throw err;
            console.log('This file has been saved!');
            console.log('done with the task');
        })
    });
});
console.log('starting the next one');

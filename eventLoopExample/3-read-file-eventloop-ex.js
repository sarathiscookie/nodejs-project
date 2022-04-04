const { readFile, writeFile } = require('fs')

console.log('Start first task!');

readFile('uploads/test_one.txt', 'utf8', (err, data_one) => {
    if(err) throw err;

    console.log('Reading first file...');

    readFile('uploads/test_two.txt', 'utf8', (err, data_two) => {
        if(err) throw err;

        console.log('Reading second file...')

        writeFile('uploads/result_async.txt', `Message is: ${data_one} ${data_two}!!`, 'utf8', (err) => {
            if(err) throw err;

            console.log('This file has been saved!');
            console.log('Done with the first task');

        })
    });

});
console.log('Starting the next task!');

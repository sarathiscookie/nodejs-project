const file_system = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        file_system.readFile(path, 'utf8', (err, data) => {
    
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
            
        })
    })
}

getText('uploads/test_one.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))



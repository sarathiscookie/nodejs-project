const path = require('path')

const file_path = path.join('/uploads/', 'test.txt')
console.log(file_path) /* uploads/test.txt */

const base_path = path.basename(file_path)
console.log(base_path) /* test.txt */

const dirname = path.dirname(file_path)
console.log(dirname) /* /uploads */
const file_system = require('fs')
console.log('start');
const read_first_file = file_system.readFileSync('uploads/test_one.txt', 'utf8')

const read_second_file = file_system.readFileSync('uploads/test_two.txt', 'utf8')

console.log(read_first_file) /* Hello */

console.log(read_second_file) /* World */

file_system.writeFileSync('uploads/result_sync.txt', `Here is the result: ${read_first_file} ${read_second_file}!!`)

/*file_system.writeFileSync('uploads/merge.txt', `Here is the result: ${read_first_file} ${read_second_file}!!`, {flag: 'a'}) // It will append the data.*/

const read_merged_file = file_system.readFileSync('uploads/result_sync.txt', 'utf8')

console.log(read_merged_file) /* Hello World!! */
console.log('done with the task');
console.log('starting the next one');
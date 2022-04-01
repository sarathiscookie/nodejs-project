/* Example 1 */
const amount = 12

if (amount < 10) {
    console.log('small number')
} else {
    console.log('Large number')
}

console.log('This is my first app')

/* Example 2 */
const user_one = 'Peter'
const user_two = 'Jane'

const user_func = (name) => {
    console.log(`Hello there ${name}`)
}

user_func(user_one)
user_func(user_two)
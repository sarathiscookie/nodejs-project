require('./5-module-export-calculated-val') /* Sum of number: 6 */
const person_names = require('./3-module-export-person-names');
const person_fun = require('./4-module-export-person-func');
first_person = person_fun(person_names.person_one) /* Welcome Declan */
second_person = person_fun(person_names.person_two) /* Welcome Maria */
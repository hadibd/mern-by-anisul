/* import all from a module */
const s1 = require('./student');
console.log(s1.getAge());
console.log(s1.gpa);

/* indivisual import */
// const {getAge, gpa} = require('./student');
// console.log(getAge());
// console.log(gpa);
//zadanie1

const fitstWord = 'Hello';
const secondWord = 'World!';

console.log(`${fitstWord} ${secondWord}`);

//zadanie2
const x = prompt('podaj pierwszą liczbę');
const y = prompt('podaj drugą liczbę');
let multiple = (x, y = 1) => x * y;

console.log(`${multiple(x,y)}`);
console.log(`${multiple(12,4)}`);
console.log(`${multiple(4)}`);

//zadanie3
let sum = 0;
let length = 0;
const average = (...args) => {args.forEach(arg => sum = sum + arg); return sum = sum / args.length};

average(13,9,5,47,6,5);
console.log(`${sum}`);

//zadanie4
//grades.reduce( jakie parametry)

sum = 0;
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [a,b,c,d,e,f,g,h,i] = grades;
console.log(average(...grades));

//zadanie5
const structure = [1, 4, 'Tamara', false, 'Piotrowska'];
const [number1, number2, firstName, married, lastName] = structure;
console.log(firstName);
console.log(lastName);
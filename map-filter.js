const numbers = [3, 5, 3, 6, 7];


// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

//**

// function square(element){
//     return element * element;
// }

// const result = numbers.map(square)
//     console.log(result);


// const result = numbers.map(function (element){
//     return element * element;
// })
// console.log(result);

const bigger = numbers.filter( x => x > 5);
console.log(bigger);




let number = 1;

while (number <= 100){
    if (number % 5 === 0 && number % 3 ===0){
        console.log('FizzBuzz');
    }else if (number % 5 === 0){
        console.log('Buzz');
    }else if (number % 3 === 0){
        console.log('fizz');
    }else{
        console.log(number);
    }
    number ++;
}
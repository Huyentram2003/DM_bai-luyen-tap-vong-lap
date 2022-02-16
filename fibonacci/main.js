const number = parseInt(prompt('nhập 1 số tự nhiên: '));

let a = 0, b = 1, index = a + b ;

console.log('Fibonacci Series:');

for (let i = 0; i <= number; i++) {
    a = b;
    b = index;
    index = a + b;
    document.write(' ' , a);
}
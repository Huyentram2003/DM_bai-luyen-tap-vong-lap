const number = +prompt("nhập vào 1 số nguyên :");
let  a = 0 , b ;

while ( number != 0 ) {
    b = number % 10 ;
    a = a * 10 + b ;
    number /= 10 ;
    document.write ("sô đảo ngược là : " , a)
}

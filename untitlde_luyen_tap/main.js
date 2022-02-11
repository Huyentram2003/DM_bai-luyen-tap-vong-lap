//sử dụng vòng lặp while.
let num = prompt("Enter a number: ") , 
    total = 0 ;

while ( num != -1 ) {
    num = prompt('nhập số tự nhiên :') ;
    alert(num) ;
    total += num ;
}
document.getElementById("demo").innerHTML = text;



//sử dụng vòng lặp do - while .
let value = null ;

do {
    value = prompt('nhập vào số từ 1 -> 10');
}while (value < 1 || value >10 );
alert('số bạn vừa nhập là ' + value);
document.getElementById("demo").innerHTML = text;



//sử dụng vòng lặp for.
//bai_1
let i , text = "" ; 

    for (i =i ; i < 5 ; i++) {
    Text += 'the number is' + i + '<br>' ;
}
document.getElementById("demo").innerHTML = text;
//bai_2
let num = prompt("Enter your number: ") ,
    total = 0 , i = 1;

    for (; i <= num; i +=1) {
        alert(total);
    }


//sử dụng vòng lặp lồng nhau.
let sout, i, j;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
i = j = 1;
while (i <= 10) {
    sout = sout + "<tr>";
    while (j <= 10) {
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write(sout);


//vừng ơi mở ra.
let PASSWORD = "Vung oi mo ra" , 
    input ;
    do {
        input = prompt("Nhap cau than chu");
    } while (input !== PASSWORD);
    alert("Mo cua thanh cong!");
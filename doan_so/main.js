count = 3 
function doanSo() {
    document.getElementById("s1").innerHTML = " Đoán Tiếp" ;
    let num = document.getElementById("s4").value ;
    let random = Math.floor(Math.random()*10+1) ;
    document.getElementById("s2").innerHTML = "so chúng thưởng là :" + random ;

    if (num == random && count >= 0) {
        alert("Đoán Đúng") ;
    } else {
        count-- ;
    }
    document.getElementById("s2").innerHTML = " Số LƯợt CHơi Còn Lại là :" + count ;
    if (count <= 0) {
        document.getElementById("s2").innerHTML = "Bạn Đã Hết Lượt chơi " ;
        document.getElementById("s1").innerHTML = "Chươi Lại" ;
        document.getElementById("s4").value = " " ;
        count = 3 ;
    }
}
function sum() {
    let a = parseInt(document.getElementById('s1').value);
    let b = parseInt(document.getElementById('s2').value);
    let sum = 0;

    if (a > b) {
        alert('Số không hợp lệ')
    } else {
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
        document.getElementById('s3').innerHTML = `Tổng các số trong khoảng từ ${a} tới ${b} là ${sum}`
    }
}
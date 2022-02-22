document.getElementById('s2').onclick = function displayPrime() {

    let numbers = +document.getElementById('s1').value;
    let count = 0;
    let display = `${numbers} số nguyên tố đầu tiên là `;


    for (let N = 2; count < numbers; N++) {
        console.log('N ===', N);
        let checkPrime = true;

        for (let i = 2; i < N; i++) {
            console.log('i ===', i);
            if (N % i === 0) {
                checkPrime = false;
                break;
            }
        }

        if (checkPrime === true) {
            count++;
            console.log('count ===', count);
            display += `${N}, `;
            console.log('display ===', display);
        }
    }
    document.getElementById('s3').innerText = display;
}
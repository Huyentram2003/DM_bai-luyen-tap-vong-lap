let i, j;

for (i = 0; i < 5; i++) {
    //console.log('i ===', i);
    document.write('<br>');
    for (j = 0; j <= i; j++) {
        //console.log('j ===', j);
        document.write('*');
    }
}

document.write('<br>');

for (i = 4; i >= 0; i--) {
    //console.log('i ===', i);
    document.write('<br>');
    for (j = 0; j <= i; j++) {
        //console.log('j ===', j);
        document.write('*');
    }
}


for (i = 0; i <= 5; i++) {
    //console.log('i ===', i);
    document.write('<br>');
    for (j = 0; j < 5 - i; j++) {
        //console.log('j ===', j);
        document.write('&nbsp&nbsp');
    }
    for (k = 5 - i; k < 5; k++) {
        //console.log('k ===', k);
        document.write('*');
    }
}

document.write('<br>');

for (i = 5; i > 0; i--) {
    console.log('i ===', i);
    document.write('<br>');
    for (j = 0; j < 5 - i; j++) {
        console.log('j ===', j);
        document.write('&nbsp&nbsp');
    }
    for (k = 5 - i; k < 5; k++) {
        console.log('k ===', k);
        document.write('*');
    }
}
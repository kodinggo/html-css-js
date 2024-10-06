// For Loop
for (i = 1; i <= 10; i++) {
    console.log(`hello ${i}`);
}

// i = 1; <---- nilai awal
// i <= 10; <--- kondisi kapan looping dijalankan, dalam kasus ini berarti jika "i" lebih kecil atau sama dg 10
// i++ <--- ditambah 1

for (x = 10; x >= 1; x--) {
    console.log(`hi ${x}`);
}

// x = 10; <---- nilai awal
// x >= 1; <--- kondisi kapan looping dijalankan, dalam kasus ini berarti jika "x" lebih besar atau sama dg 1
// x-- <--- dikurang 1

// While Loop
var j = 1;
while (j <= 100) {
    console.log(`coba while ${j}`);
    j+=10;
}

// Do While Loop
var z = 100;
do {
    console.log(`coba do while ${z}`);
    z-=10;
} while(z >= 0);
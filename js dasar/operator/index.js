// Operator Aritmatika
var num1 = 10;
var num2 = 20;

var result = num1 + num2; // 30

console.log(`${num1} + ${num2} = ${result}`);

// NOTE:
// simbol "+" jika digunakan untuk angka maka akan menjumlahkan
// jika digunakan untuk teks maka akan digabungkan
console.log(1+1); // 2
console.log("1"+"1"); // 11

console.log(10/2); // 5

console.log(10%5); // 0
console.log(11%5); // 1

// Operator Perbandingan
if (1 < 2) {
    console.log("yes");
}
if (200 <= 200) {
    console.log("ok");
}
if (1 == "1") { // equal
    console.log("betul");
}
if (1 === "1") { // equal but not identik
    console.log("identik");
} else {
    console.log("tidak identik");
}

// Operator Logika
var usia = 17;

if (usia >= 11 && usia <= 20) { // range angka 11-20
    console.log("anda sudah remaja");
} else {
    console.log("anda belum cukup umur");
}

if (usia >= 11 || usia >= 20) { // range angka 11-20
    console.log("anda sudah remaja");
} else {
    console.log("anda belum cukup umur");
}

var n = 12;
if (!n) { // apakah n == 0
    console.log("n is zero");
} else {
    console.log("n is not zero");
}

var s = "test";
if (!s) { // apakah s itu kosong
    console.log("s is empty");
    console.log("s is empty");
    console.log("s is empty");
} else {
    console.log("s is not empty");
}

if (!s) 
    console.log("s is empty");
else 
    console.log("s is not empty");

/*
var usia = 5;
0-5 tahun, maka cetak "balita"
6-10 tahun, maka cetak "anak-anak"
11-17 tahun, maka cetak "remaja"
18 tahun ke atas, maka cetak "dewasa"
*/
var usia = 30;
if (usia >= 0 && usia <= 5) {
    console.log("balita");
} else if (usia >= 6 && usia <= 10) {
    console.log("anak-anak");
} else if (usia >= 11 && usia <= 17) {
    console.log("remaja");
} else if (usia >= 18) {
    console.log("dewasa");
}
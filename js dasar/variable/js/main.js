// Variable
var nama = "Jasmine";
var umur = 15;

console.log(nama);
console.log(umur);

/*
penulisan variable

1. alphabet
2. number (bukan leading number)
3. underscore
*/

// Kondisi
var food = "ayam bakar";

// apakah food sama dg sate
if (food == "ayam bakar") {
    console.log("Saya mau makan "+food);
} else {
    console.log("Tidak jadi makan");
}

/*
1. "=" digunakan untuk menunjukan sebuah variabel
memiliki nilai X
2. "==" digunakan untuk membandingkan 2 buah data
*/

var hari = "Rabu";

if (hari == "Senin") { // kondisi pertama

    console.log("Matematika");

} else if (hari == "Selasa") { // kondisi kedua

    console.log("B. Inggris");

} else if (hari == "Rabu") { // kondisi ketiga

    console.log("Fisika");

} else {

    console.log("Libuur");

}

/*
Buat kondisi
> Jika 1 tampilkan "Januari"
> Jika 2 tampilkan "Februari"
> Jika 3 tampilkan "Maret"
> Jika 12 tampilkan "Desember"
> Jika bukan 1-12 tampilkan "Tidak valid"
*/

var bulan = 13;

if (bulan == 1) {
    console.log("Januari");
} else if (bulan == 2) {
    console.log("Februari");
} else if (bulan == 3) {
    console.log("Maret");
} else if (bulan == 4) {
    console.log("April");
} else if (bulan == 5) {
    console.log("Mei");
} else if (bulan == 6) {
    console.log("Juni");
} else if (bulan == 7) {
    console.log("Juli");
} else if (bulan == 8) {
    console.log("Agustus");
} else if (bulan == 9) {
    console.log("September");
} else if (bulan == 10) {
    console.log("Oktober");
} else if (bulan == 11) {
    console.log("November");
} else if (bulan == 12) {
    console.log("Desember");
} else {
    console.log("Tidak valid");
}
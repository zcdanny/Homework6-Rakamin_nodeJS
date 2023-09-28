// soal1.js

const { Persegi, PersegiPanjang } = require('./index');

const sisiPersegi = 5;
const persegi = new Persegi(sisiPersegi);
console.log(`Luas Persegi: ${persegi.hitungLuas()}`);
console.log(`Keliling Persegi: ${persegi.hitungKeliling()}`);

const panjang = 6;
const lebar = 4;
const persegiPanjang = new PersegiPanjang(panjang, lebar);
console.log(`Luas Persegi Panjang: ${persegiPanjang.hitungLuas()}`);
console.log(`Keliling Persegi Panjang: ${persegiPanjang.hitungKeliling()}`);

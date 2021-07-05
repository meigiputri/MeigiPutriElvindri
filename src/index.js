//console.log("HELLO WORLD");
const readline = require ('readline-sync');
console.info ('Program Penjumlahan Angka');
const number1 = readline.question ('Masukkan angka pertama:');
const number2 = readline.question('Masukkan angka kedua :');

function add(a,b) {
	return a + b;
}

const hasil = add (parseInt (number1), parseInt (number2));
console.log (hasil);

function min (a,b) {
	return a - b;
}
const hasilkurang = min (parseInt (number1), parseInt (number2));
console.log (hasilkurang);

function perkalian (a,b) {
	return a * b;
}

const hasilkali = perkalian (parseInt (number1), parseInt (number2));
console.log (hasilkali);

function pembagian (a,b) {
	return a / b;
}

const hasilbagi = pembagian (parseInt (number1), parseInt (number2));
console.log (hasilbagi);
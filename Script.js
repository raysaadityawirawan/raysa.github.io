//    let operator = prompt("pilih simbol yang akan digunakan (+,-,*,/)")
//    let num1 = parseFloat(prompt("angka1"))
//    let num2 = parseFloat(prompt("angka2"))

//    if(operator === "+" ){
//        document.write(`Hasil: ${num1 + num2}`)
//     }else if (operator === "-"){
//        document.write(`Hasil: ${num1 - num2}`) }else if (operator ==="*"){
//        document.write(`Hasil: ${num1 * num2}`)
//    }else if (operator === "/"){
//        document.write(`Hasil: ${num1 / num2}`)
//    }

//   let nilaisederhana = prompt("Masukkan Nilai")
//   let grade = "";
// l
//   if(nilaisederhana >= 96-99){
//       grade = "A";
//   }else if(nilaisederhana >= 90-95){
//       grade = "B";
//   }else if(nilaisederhana >= 86-90){
//       grade = "C";
//   }else if(nilaisederhana >= 81-85){
//       grade = "D";
//   }else if(nilaisederhana >= 76-80){
//       grade = "E";
//   }else if(nilaisederhana >= 66-75){
//       grade = "F";
//   }else if(nilaisederhana >= 0-65){
//       grade = "F-";
//   }

//   document.write(`<h1>Nilai anda : ${nilaisederhana} dan grade anda : ${grade}</h1>`);


// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(angka);
// const hasilfilter = angka.filter ((items) => {return items % 2 === 0;});

// console.log(hasilfilter)
// Method Filter berfungsi untuk menyaring data
;

// Method includes berfungsi untuk cek data array

//  let makanan =["nasi goreng", "mie goreng", "nasi padang", "sate"];

//  let adasate = makanan.includes("mie goreng");
//  console.log(adasate);  //maka jawaban yang keluar adalah true


// method sort berfungsi untuk mengurutkan data dalam array

// let alfabet =["a", "b", "c", "d", "e", "f"];
// console.log(alfabet.sort());


// pembulatan menggunakan method javascrip
// 1. math.round = mengembalikan nilai dari pembulatan bilangan terdekat
// contoh:
// let a = 5.2;
// let b = 5.6;
// let c = 5.5;

// caranya => bulatan = math.round(a);
// console.log(bulatkan)

// // ketika bilangan itu positif maka,bulatkan ke atas namun,saat bilangan negatif maka bulatkan ke bawah
// 2. math.cell = mengembalikan nilai dari pembulatan ke bawah
// let bawah = math.cell(a);
// console.log(baw



var angka;
var kesempatan;
var tebakan;

angka=Math.random();
tebakan=prompt("Masukkan tebakan anda dari angka 1-10 (kesempatan = 3 kali");

if(angka>=0,1 && angka <0 .25="" angka="" else="" if="">=0,25 && angka <0 .5="" angka="" else="" if="">=0,5 && angka <0 .75="" angka="4;" else="" for="" kesempatan="3;kesempatan">=1;kesempatan--)
{
    if(angka==tebakan)
    {
        document.getElementById('notice').innerHTML="Selamat Anda Berhasil";
        break;
    }
    else
    {
        tebakan=prompt("Maaf tebakan anda salah, sisa kesempatan = "+kesempatan)
    }
}
if(kesempatan==0)
{
    document.getElementById('notice').innerHTML="Game Over";
}
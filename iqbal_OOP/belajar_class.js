// class siswapplg {

//     constructor(nama, kelas) {
//         this.namasiswa = nama;
//         this.kelassiswa = kelas;
//     }

//     perkenalan() {
//         console.log(`Nama :${this.namasiswa}`);
//         console.log(`kelas :${this.kelassiswa}`);

//     }

//     seragam() {
//         console.log("Seragam saya berwarna ");
//     }
// }

// const siswa1 = new siswapplg("Kenzie titut Simonjutak", "XI RPL 1");
// siswa1.perkenalan();
// siswa1.seragam();

class Produk {
    constructor(nama, harga, jumlah) {
        this.namaproduk = nama;
        this.hargaproduk = harga;
        this.jumlahproduk = jumlah;
    }

    tampilkaninfo() {
        console.log(`Nama Produk : ${this.namaproduk}`);
        console.log(`Harga Produk : ${this.hargaproduk}`);
        console.log(`Jumlah Produk : ${this.jumlahproduk}`);
    }

    hitungdiskon(persen) {
        return this.hargaproduk-(this.hargaproduk * persen/100);
    }
}

const produk1 = new Produk("Buku", 50000, 10);
console.log(`Harga setelah diskon : ${produk1.hitungdiskon(10)}`);
produk1.tampilkaninfo();

console.log("=====================================");

const keyboard = new Produk("keyboard RGB", 1600000, 1);
console.log(`Harga setelah diskon : ${keyboard.hitungdiskon(10)}`);
keyboard.tampilkaninfo();
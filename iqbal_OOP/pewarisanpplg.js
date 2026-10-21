//buat class parent
class PPLG {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;

    }


perkenalan() {
    console.log("Halo, nama saya dari 11 pplg, nama saya " + this.nama + " dan umur saya " + this.umur)
    console.log("umur saya tahun ini  " + this.umur)
}

}

//buat class child

class Siswa extends PPLG {
    constructor(nama, umur, kelas) {
        super(nama, umur);
        this.kelas = kelas;
    }

    berjalan() {
        console.log(`${this.nama} sedang berjalan`);
    }
}

const siswa1 = new Siswa("Iqbal", 17, "XII RPL 1");
siswa1.perkenalan();
siswa1.berjalan();
console.log(`Kelas saya adalah ${siswa1.kelas}`);
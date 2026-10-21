class Siswa {

    constructor(nama, umur, kelas, nilai1, nilai2) {
        this.nama = nama;
        this.umur = umur;
        this.kelas = kelas;
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
    }

    tampilkanData() {
        console.log("=== Data Siswa ===");
        console.log("Nama: " + this.nama);
        console.log("Kelas: " + this.kelas);
    }

    hitungRataRata() {
        return (this.nilai1 + this.nilai2) / 2;
    }

    cekKelulusan() {
        if (this.hitungRataRata() >= 75) {
            return "Lulus";
        } else {
            return "Tidak Lulus";
        }
    }
}

const siswa1 = new Siswa("Iqbal", 16, "XI PPLG", 80, 90);
const siswa2 = new Siswa("Kenzie", 16, "XI PPLG", 85, 80);

siswa1.tampilkanData();
console.log("Rata-rata Nilai: " + siswa1.hitungRataRata());
console.log("Status Kelulusan: " + siswa1.cekKelulusan());

siswa2.tampilkanData();
console.log("Rata-rata Nilai: " + siswa2.hitungRataRata());
console.log("Status Kelulusan: " + siswa2.cekKeluluan());
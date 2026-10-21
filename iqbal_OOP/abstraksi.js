class Mobil {
    constructor(merek) {
        this.merek = merek;
    }

    nyalakan() {
        console.log("nyalakan mebil");
        this.#prosesMesin();
        console.log("mobil menyala");
    }

    #prosesMesin() {
        console.log("proses mesin");
    }
}

const mobil = new Mobil("Toyota");
mobil.nyalakan();
const mobilsport = new Mobil("Ferrari");
mobilsport.nyalakan();

class iqbal {
    skill() {
        console.log("skill iqbal banyak");
    }

    level() {
        console.log("level iqbal banyak");
    }
}

class kenzie {
    skill() {
        console.log("skill kenzie banyak");
    }

    level() {
        console.log("level kenzie banyak");
    }
}

class fadli {
    skill() {
        console.log("skill fadli banyak");
    }

    level() {
        console.log("level fadli banyak");
    }
}

const siswa = [new iqbal(), new kenzie()];
siswa.forEach(siswa => siswa.skill());
siswa.forEach(siswa => siswa.level());



const siswa2 = new fadli();
siswa2.skill();
siswa2.level();
class kucing {
    bersuara () {
        console.log("meoing");
    }
}

class anjing{
    bersuara () {
        console.log("guk guk");
    }
}

class hamster{
    bersuara () {
        console.log("kuch kuch");
    }
}

const kucing1 = [new kucing(), new anjing()];
hewan.forEach(hewan => hewan.bersuara());

const hewan2 = new hamster();
hewan.bersuara();



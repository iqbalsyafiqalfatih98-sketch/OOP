class Animal {
    bersuara() {
        console.log("Hewan bersuara");
    }
}

class Dog extends Animal {
    menggonggong() {
        console.log("Anjing menggonggong");
    }
}

const anjing1 = new Dog();
anjing.bersuara();
anj
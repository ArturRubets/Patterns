class Audi {
    clone() {
        return new Audi();
    }
}
class Benz {
    clone() {
        return new Benz();
    }
}
class BMW {
    clone() {
        return new BMW();
    }
}
class CarFactory {
}
class ChineseCarFactory extends CarFactory {
    constructor() {
        super();
        this.brands = {};
        this.brands['Audi'] = new Audi();
        this.brands['Benz'] = new Benz();
        this.brands['BMW'] = new BMW();
    }
    createCar(brand) {
        return this.brands[brand].clone();
    }
}
(function main() {
    const factory = new ChineseCarFactory();
    const prototypes = ['Audi', 'Benz', 'BMW'].map((brand) => {
        return factory.createCar(brand);
    });
    console.log(prototypes);
})();
//# sourceMappingURL=prototype-cars.js.map
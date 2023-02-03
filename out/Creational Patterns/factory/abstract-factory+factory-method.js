// Поєднання абстрактної фабрики та фабричного методу.
class Clothing {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class OrtodoxClothing extends Clothing {
    constructor() {
        super('Мантія');
    }
}
class CatholicClothing extends Clothing {
    constructor() {
        super('Ряса с капюшоном');
    }
}
class AnglicanClothing extends Clothing {
    constructor() {
        super('Ряса');
    }
}
class BuddhistClothing extends Clothing {
    constructor() {
        super('Кашая');
    }
}
class HinduClothing extends Clothing {
    constructor() {
        super('Hindu');
    }
}
class OrthodoxMonkFactory {
    createMonk(type) {
        return new OrthodoxMonk(type);
    }
    createClothing() {
        return new OrtodoxClothing();
    }
}
class CatholicMonkFactory {
    createMonk(type) {
        return new CatholicMonk(type);
    }
    createClothing() {
        return new CatholicClothing();
    }
}
class AnglicanMonkFactory {
    createMonk(type) {
        return new AnglicanMonk(type);
    }
    createClothing() {
        return new AnglicanClothing();
    }
}
class BuddhistMonkFactory {
    createMonk(type) {
        return new BuddhistMonk(type);
    }
    createClothing() {
        return new BuddhistClothing();
    }
}
class HinduMonkFactory {
    createMonk(type) {
        return new HinduMonk(type);
    }
    createClothing() {
        return new HinduClothing();
    }
}
class Application {
    create(monkFactory, type) {
        const monk = monkFactory.createMonk(type);
        monk.prepare(monkFactory);
        return monk;
    }
}
class Monk {
    constructor(kind) {
        this.kind = kind;
    }
    setClothing(clothing) {
        this.clothing = clothing;
    }
}
class OrthodoxMonk extends Monk {
    constructor(kind) {
        super(kind);
    }
    description() {
        console.log('Я православный монах - ' + this.kind);
        console.log('Моя одежда - ' + this.clothing.getName());
    }
    prepare(monkFactory) {
        this.setClothing(monkFactory.createClothing());
    }
}
class CatholicMonk extends Monk {
    constructor(kind) {
        super(kind);
    }
    description() {
        console.log('Я католический монах - ' + this.kind);
        console.log('Моя одежда - ' + this.clothing.getName());
    }
    prepare(monkFactory) {
        this.setClothing(monkFactory.createClothing());
    }
}
class AnglicanMonk extends Monk {
    constructor(kind) {
        super(kind);
    }
    description() {
        console.log('Я англиканский монах - ' + this.kind);
        console.log('Моя одежда - ' + this.clothing.getName());
    }
    prepare(monkFactory) {
        this.setClothing(monkFactory.createClothing());
    }
}
class BuddhistMonk extends Monk {
    constructor(kind) {
        super(kind);
    }
    description() {
        console.log('Я буддийский монах - ' + this.kind);
        console.log('Моя одежда - ' + this.clothing.getName());
    }
    prepare(monkFactory) {
        this.setClothing(monkFactory.createClothing());
    }
}
class HinduMonk extends Monk {
    constructor(kind) {
        super(kind);
    }
    description() {
        console.log('Я индуистский монах - ' + this.kind);
        console.log('Моя одежда - ' + this.clothing.getName());
    }
    prepare(monkFactory) {
        this.setClothing(monkFactory.createClothing());
    }
}
const application = new Application();
application.create(new OrthodoxMonkFactory(), 'Мантийный монах').description();
application.create(new CatholicMonkFactory(), 'Иезуит').description();
application.create(new AnglicanMonkFactory(), 'Бенедиктинец').description();
application.create(new BuddhistMonkFactory(), 'Монах').description();
application.create(new HinduMonkFactory(), 'Саньяси').description();
//# sourceMappingURL=abstract-factory+factory-method.js.map
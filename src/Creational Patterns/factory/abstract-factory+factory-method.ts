// Поєднання абстрактної фабрики та фабричного методу.

interface MonkFactory {
  createMonk(type: string): Monk;
  createClothing(): Clothing;
}

abstract class Clothing {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class OrtodoxClothing extends Clothing {
  public constructor() {
    super('Мантія');
  }
}

class CatholicClothing extends Clothing {
  public constructor() {
    super('Ряса с капюшоном');
  }
}

class AnglicanClothing extends Clothing {
  public constructor() {
    super('Ряса');
  }
}

class BuddhistClothing extends Clothing {
  public constructor() {
    super('Кашая');
  }
}

class HinduClothing extends Clothing {
  public constructor() {
    super('Hindu');
  }
}

class OrthodoxMonkFactory implements MonkFactory {
  public createMonk(type: string): Monk {
    return new OrthodoxMonk(type);
  }

  public createClothing(): Clothing {
    return new OrtodoxClothing();
  }
}

class CatholicMonkFactory implements MonkFactory {
  public createMonk(type: string): Monk {
    return new CatholicMonk(type);
  }

  public createClothing(): Clothing {
    return new CatholicClothing();
  }
}

class AnglicanMonkFactory implements MonkFactory {
  public createMonk(type: string): Monk {
    return new AnglicanMonk(type);
  }

  public createClothing(): Clothing {
    return new AnglicanClothing();
  }
}

class BuddhistMonkFactory implements MonkFactory {
  public createMonk(type: string): Monk {
    return new BuddhistMonk(type);
  }

  public createClothing(): Clothing {
    return new BuddhistClothing();
  }
}

class HinduMonkFactory implements MonkFactory {
  public createMonk(type: string): Monk {
    return new HinduMonk(type);
  }

  public createClothing(): Clothing {
    return new HinduClothing();
  }
}

abstract class Monk {
  kind: string;
  clothing: Clothing;

  public constructor(kind: string) {
    this.kind = kind;
  }

  public setClothing(clothing: Clothing) {
    this.clothing = clothing;
  }

  public abstract description();

  public abstract prepare(monkFactory: MonkFactory);
}

class OrthodoxMonk extends Monk {
  public constructor(kind: string) {
    super(kind);
  }

  public description() {
    console.log('Я православный монах - ' + this.kind);
    console.log('Моя одежда - ' + this.clothing.getName());
  }

  public prepare(monkFactory: MonkFactory) {
    this.setClothing(monkFactory.createClothing());
  }
}

class CatholicMonk extends Monk {
  public constructor(kind: string) {
    super(kind);
  }

  public description() {
    console.log('Я католический монах - ' + this.kind);
    console.log('Моя одежда - ' + this.clothing.getName());
  }

  public prepare(monkFactory: MonkFactory) {
    this.setClothing(monkFactory.createClothing());
  }
}

class AnglicanMonk extends Monk {
  public constructor(kind: string) {
    super(kind);
  }

  public description() {
    console.log('Я англиканский монах - ' + this.kind);
    console.log('Моя одежда - ' + this.clothing.getName());
  }

  public prepare(monkFactory: MonkFactory) {
    this.setClothing(monkFactory.createClothing());
  }
}

class BuddhistMonk extends Monk {
  public constructor(kind: string) {
    super(kind);
  }

  public description() {
    console.log('Я буддийский монах - ' + this.kind);
    console.log('Моя одежда - ' + this.clothing.getName());
  }

  public prepare(monkFactory: MonkFactory) {
    this.setClothing(monkFactory.createClothing());
  }
}

class HinduMonk extends Monk {
  public constructor(kind: string) {
    super(kind);
  }

  public description() {
    console.log('Я индуистский монах - ' + this.kind);
    console.log('Моя одежда - ' + this.clothing.getName());
  }

  public prepare(monkFactory: MonkFactory) {
    this.setClothing(monkFactory.createClothing());
  }
}

class Application {
  public create(monkFactory: MonkFactory, type: string): Monk {
    const monk: Monk = monkFactory.createMonk(type);
    monk.prepare(monkFactory);
    return monk;
  }
}
 
const application: Application = new Application();

application.create(new OrthodoxMonkFactory(), 'Мантийный монах').description();
application.create(new CatholicMonkFactory(), 'Иезуит').description();
application.create(new AnglicanMonkFactory(), 'Бенедиктинец').description();
application.create(new BuddhistMonkFactory(), 'Монах').description();
application.create(new HinduMonkFactory(), 'Саньяси').description();

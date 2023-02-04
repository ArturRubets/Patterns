export {};

// Загальний інтерфейс компонентів.
interface Graphic {
  move(x, y);
  draw();
}

// Простий компонент.
class Dot implements Graphic {
  x: number;
  y: number;

  constructor(x, y) {}

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  draw() {
    // Намалювати крапку у координатах X, Y.
  }
}

// Компоненти можуть розширювати інші компоненти.
class Circle extends Dot {
  radius: number;

  constructor(x, y, radius) {
    super(x, y);
  }

  draw() {
    // Намалювати коло в координатах X, Y з радіусом R.
  }
}

// Контейнер містить операції додавання/видалення дочірніх
// компонентів. Усі стандартні операції інтерфейсу компонентів
// він делегує кожному з дочірніх компонентів.
class CompoundGraphic implements Graphic {
  children: [Graphic];

  add(child: Graphic) {
    // Додати компонент до списка дочірніх.
  }

  remove(child: Graphic) {
    // Прибрати компонент зі списку дочірніх.
  }

  move(x, y) {
    for (const child of this.children) {
      child.move(x, y);
    }
  }

  draw() {
    // 1. Для кожного дочірнього компонента:
    //     - Відобразити компонент.
    //     - Визначити координати максимальної межі.
    // 2. Намалювати пунктирну межу навколо всієї області.
  }
}

// Програма працює одноманітно, як з одиничними компонентами,
// так і з цілими групами компонентів.
class ImageEditor {
  all: CompoundGraphic;

  load() {
    this.all = new CompoundGraphic();
    this.all.add(new Dot(1, 2));
    this.all.add(new Circle(5, 3, 10));
    // ...
  }

  // Групування обраних компонентів в один складний компонент.
  groupSelected(components: [Graphic]) {
    const group = new CompoundGraphic();
    for (const component of components) {
      group.add(component);
      this.all.remove(component);
    }
    this.all.add(group);
    // Усі компоненти будуть промальованими.
    this.all.draw();
  }
}

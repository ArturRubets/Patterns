// Простий компонент.
class Dot {
    constructor(x, y) { }
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
class CompoundGraphic {
    add(child) {
        // Додати компонент до списка дочірніх.
    }
    remove(child) {
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
    load() {
        this.all = new CompoundGraphic();
        this.all.add(new Dot(1, 2));
        this.all.add(new Circle(5, 3, 10));
        // ...
    }
    // Групування обраних компонентів в один складний компонент.
    groupSelected(components) {
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
export {};
//# sourceMappingURL=composite-graphic.js.map
class WindowsButton {
    render() {
        // Відобразити кнопку в стилі Windows.
        console.log('WindowsButton render');
    }
    onClick(f) {
        // Навісити на кнопку обробник подій Windows.
        console.log('WindowsButton onClick');
    }
}
class HTMLButton {
    render() {
        // Повернути HTML-код кнопки.
        console.log('HTMLButton render');
    }
    onClick(f) {
        // Навісити на кнопку обробник події браузера.
        console.log('HTMLButton onClick');
    }
}
// Базовий клас фабрики. Зауважте, що "фабрика" — це всього лише
// додаткова роль для цього класу. Скоріше за все, він вже має
// якусь бізнес-логіку, яка потребує створення продуктів.
class Dialog {
    closeDialog() { }
    render() {
        // Щоб використати фабричний метод, ви маєте
        // пересвідчитися, що ця бізнес-логіка не залежить від
        // конкретних класів продуктів. Button — це загальний
        // інтерфейс кнопок, тому все гаразд.
        const okButton = this.createButton();
        okButton.onClick(this.closeDialog);
        okButton.render();
    }
}
// Конкретні фабрики перевизначають фабричний метод і повертають
// з нього власні продукти.
class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}
class WebDialog extends Dialog {
    createButton() {
        return new HTMLButton();
    }
}
class Application {
    // Програма створює певну фабрику в залежності від
    // конфігурації або оточення.
    initialize() {
        const config = readApplicationConfigFile();
        if (config === 'Windows') {
            this.dialog = new WindowsDialog();
        }
        else if (config === 'Web') {
            this.dialog = new WebDialog();
        }
        else {
            throw new Error('Error! Unknown operating system.');
        }
    }
    main() {
        this.initialize();
        this.dialog.render();
    }
}
function readApplicationConfigFile() {
    return 'Windows';
}
new Application().main();
export {};
//# sourceMappingURL=dialog.js.map
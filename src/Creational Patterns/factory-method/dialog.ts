export {};

// Патерн Фабричний метод має сенс лише тоді, коли в програмі є
// ієрархія класів продуктів.

interface Button {
  render();
  onClick(f: () => any);
}

class WindowsButton implements Button {
  render() {
    // Відобразити кнопку в стилі Windows.
    console.log('WindowsButton render');
  }
  onClick(f: () => any) {
    // Навісити на кнопку обробник подій Windows.
    console.log('WindowsButton onClick');
  }
}

class HTMLButton implements Button {
  render() {
    // Повернути HTML-код кнопки.
    console.log('HTMLButton render');
  }
  onClick(f: () => any) {
    // Навісити на кнопку обробник події браузера.
    console.log('HTMLButton onClick');
  }
}

// Базовий клас фабрики. Зауважте, що "фабрика" — це всього лише
// додаткова роль для цього класу. Скоріше за все, він вже має
// якусь бізнес-логіку, яка потребує створення продуктів.
abstract class Dialog {
  closeDialog() {}

  render() {
    // Щоб використати фабричний метод, ви маєте
    // пересвідчитися, що ця бізнес-логіка не залежить від
    // конкретних класів продуктів. Button — це загальний
    // інтерфейс кнопок, тому все гаразд.
    const okButton = this.createButton();
    okButton.onClick(this.closeDialog);
    okButton.render();
  }

  // Ми виносимо весь код створення продуктів до особливого
  // методу, який називають "фабричним".
  abstract createButton(): Button;
}

// Конкретні фабрики перевизначають фабричний метод і повертають
// з нього власні продукти.
class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}

class Application {
  dialog: Dialog;

  // Програма створює певну фабрику в залежності від
  // конфігурації або оточення.
  initialize(): void {
    const config = readApplicationConfigFile();

    if (config === 'Windows') {
      this.dialog = new WindowsDialog();
    } else if (config === 'Web') {
      this.dialog = new WebDialog();
    } else {
      throw new Error('Error! Unknown operating system.');
    }
  }

  main() {
    this.initialize();
    this.dialog.render();
  }
}

function readApplicationConfigFile(): string {
  return 'Windows';
}

new Application().main();

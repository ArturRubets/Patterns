class Data {
}
// Один з конкретних компонентів реалізує базову
// функціональність.
class FileDataSource {
    constructor(filename) { }
    writeData(data) {
        // Записати дані до файлу.
    }
    readData() {
        // Прочитати дані з файлу.
        return;
    }
}
// Базовий клас усіх декораторів містить код обгортування.
class DataSourceDecorator {
    constructor(source) {
        this.wrappee = source;
    }
    writeData(Data) {
        this.wrappee.writeData(Data);
    }
    readData() {
        return this.wrappee.readData();
    }
}
// Конкретні декоратори додають щось своє до базової поведінки
// обгорнутого компонента.
class EncryptionDecorator extends DataSourceDecorator {
    writeData(Data) {
        // 1. Зашифрувати подані дані.
        // 2. Передати зашифровані дані до методу writeData
        // обгорнутого об'єкта (wrappee).
    }
    readData() {
        // 1. Отримати дані з методу readData обгорнутого
        // об'єкта (wrappee).
        // 2. Розшифрувати їх, якщо вони зашифровані.
        // 3. Повернути результат.
        return this.readData();
    }
}
// Декорувати можна не тільки базові компоненти, але й вже
// обгорнуті об'єкти.
class CompressionDecorator extends DataSourceDecorator {
    writeData(Data) {
        // 1. Запакувати подані дані.
        // 2. Передати запаковані дані до методу writeData
        // обгорнутого об'єкта (wrappee).
    }
    readData() {
        // 1. Отримати дані з методу readData обгорнутого
        // об'єкта (wrappee).
        // 2. Розпакувати їх, якщо вони запаковані.
        // 3. Повернути результат.
        return this.readData();
    }
}
// Варіант 1. Простий приклад збирання та використання
// декораторів.
class Application {
    dumbUsageExample() {
        let source = new FileDataSource('somefile.dat');
        let salaryRecords = '...';
        source.writeData(salaryRecords);
        // До файлу було занесено чисті дані.
        source = new CompressionDecorator(source);
        source.writeData(salaryRecords);
        // До файлу було занесено стислі дані.
        source = new EncryptionDecorator(source);
        // Зараз у source знаходиться зв'язка з трьох об'єктів:
        // Encryption > Compression > FileDataSource
        source.writeData(salaryRecords);
        // До файлу було занесено стислі та зашифровані дані.
    }
}
// Варіант 2. Клієнтський код, який використовує зовнішнє
// джерело даних. Клас SalaryManager нічого не знає про те, як
// саме буде зчитано та записано дані. Він отримує вже готове
// джерело даних.
class SalaryManager {
    constructor(source) { }
    load() {
        return this.source.readData();
    }
    save() {
        const salaryRecords = '...';
        this.source.writeData(salaryRecords);
        // ...Інші корисні методи...
    }
}
// Програма може різним шляхом збирати об'єкти, які декоруються
// залежно від умов використання.
class ApplicationConfigurator {
    configurationExample() {
        let source = new FileDataSource('salary.dat');
        const enabledEncryption = true;
        const enabledCompression = true;
        if (enabledEncryption) {
            source = new EncryptionDecorator(source);
        }
        if (enabledCompression) {
            source = new CompressionDecorator(source);
        }
        const logger = new SalaryManager(source);
        const salary = logger.load();
        // ...
    }
}
export {};
//# sourceMappingURL=encription-data.js.map
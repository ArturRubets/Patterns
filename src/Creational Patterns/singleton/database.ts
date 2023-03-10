export {};

// Клас одинака визначає статичний метод `getInstance`, котрий
// дозволяє клієнтам повторно використовувати одне і теж
// підключення до бази даних по всій програмі.
class Database {
  // Поле для зберігання об'єкта-одинака має бути оголошено
  // статичним.
  private static instance: Database;

  // Конструктор одинака завжди повинен залишатися приватним,
  // аби клієнти не могли самостійно створювати екземпляри
  // цього класу через оператор `new`.
  private constructor() {
    // Тут може жити код ініціалізації підключення до
    // сервера баз даних.
    // ...
  }

  // Головний статичний метод одинака служить альтернативою
  // конструктору і є точкою доступу до екземпляра цього
  // класу.
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  // І, нарешті, будь-який клас одинака повинен мати якусь
  // корисну функціональність, яку клієнти будуть запускати
  // через отриманий об'єкт одинака.
  public query(sql: string) {
    // Усі запити до бази даних проходитимуть через цей
    // метод. Тому є сенс помістити сюди якусь логіку
    // кешування.
    // ...
    console.log(sql);
  }
}

function clientCode() {
  const foo = Database.getInstance();
  foo.query('SELECT ...');

  // Змінна "bar" містить той самий об'єкт, що і змінна "foo".
  const bar = Database.getInstance();
  bar.query('SELECT ...');
}

clientCode();

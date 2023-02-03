// Створюючий метод.
class NumberClass {
  private value: number;

  public constructor(value: number) {
    this.value = value;
  }

  // Простий метод-обгортка над викликом конструктора продукта.
  public next(): NumberClass {
    return new NumberClass(this.value + 1);
  }
}

// Статичний фабричний метод.
class User {
  private id: string;
  private name: string;
  private email: string;
  private phone: string;

  private constructor(id: string, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  // Постає як альтернативний конструктор.
  public static load(id: string): User {
    // Завантаження користувача з бази даних.
    //  list($id, $name, $email, $phone) = DB::load_data('users', 'id', 'name', 'email', 'phone');
    const [name, email, phone] = ['', '', ''];
    return new User(id, name, email, phone);
  }
}

// Патерн Проста фабрика.
class UserFactory {
  public static create(type): string {
    switch (type) {
      case 'user':
        return 'new User()';
      case 'customer':
        return 'new Customer()';
      case 'admin':
        return 'new Admin()';
      default:
        throw new Error('Wrong user type passed.');
    }
  }
}

// Патерн Фабричний метод. Це структура класів, за якої підкласи можуть перевизначити тип продукта, що створюється в суперкласі.
/*
abstract class Department {
    public abstract  createEmployee(id);

    public fire(id) {
        employee = this.createEmployee(id);
        employee.paySalary();
        employee.dismiss();
    }
}

class ITDepartment extends Department {
    public createEmployee(id) {
        return new Programmer(id);
    }
}

class AccountingDepartment extends Department {
    public createEmployee(id) {
        return new Accountant(id);
    }
}
*/

// Патерн Абстрактна фабрика. Це структура класів, яка полегшує створення сімейств продуктів.

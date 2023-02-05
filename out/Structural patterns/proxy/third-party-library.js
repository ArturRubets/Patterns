// Конкретна реалізація сервісу. Методи цього класу запитують у
// YouTube різну інформацію. Швидкість запиту залежить не лише
// від якості інтернет-каналу користувача, але й від стану
// самого YouTube. Тому, чим більше буде викликів до сервісу,
// тим менш відзивною стане програма.
class ThirdPartyYouTubeClass {
    listVideos() {
        // Отримати список відеороликів за допомогою API
        // YouTube
    }
    getVideoInfo(id) {
        // Отримати детальну інформацію про якийсь відеоролик.
    }
    downloadVideo(id) {
        // Завантажити відео з YouTube.
    }
}
// З іншого боку, можна кешувати запити до YouTube і не
// повторювати їх деякий час, доки кеш не застаріє. Але внести
// цей код безпосередньо в сервісний клас неможливо, бо він
// знаходиться у сторонній бібліотеці. Тому ми помістимо логіку
// кешування в окремий клас-обгортку. Він буде делегувати запити
// сервісному об'єкту, тільки якщо потрібно безпосередньо
// відіслати запит.
class CachedYouTubeClass {
    constructor(service) {
        this.service = service;
    }
    listVideos() {
        if (this.listCache === null || this.needReset) {
            this.listCache = this.service.listVideos();
        }
        return this.listCache;
    }
    getVideoInfo(id) {
        throw new Error('Method not implemented.');
    }
    downloadVideo(id) {
        throw new Error('Method not implemented.');
    }
}
class Animal {
}
class Cat extends Animal {
}
class MainCoon extends Cat {
}
const myAnimals = [new MainCoon()];
const myCats = myAnimals;
export {};
//# sourceMappingURL=third-party-library.js.map
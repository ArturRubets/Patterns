export {};

// Інтерфейс віддаленого сервісу.
interface ThirdPartyYouTubeLib {
  listVideos();
  getVideoInfo(id);
  downloadVideo(id);
}

// Конкретна реалізація сервісу. Методи цього класу запитують у
// YouTube різну інформацію. Швидкість запиту залежить не лише
// від якості інтернет-каналу користувача, але й від стану
// самого YouTube. Тому, чим більше буде викликів до сервісу,
// тим менш відзивною стане програма.
class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
  listVideos() {
    // Отримати список відеороликів за допомогою API
    // YouTube
  }

  getVideoInfo(id: any) {
    // Отримати детальну інформацію про якийсь відеоролик.
  }

  downloadVideo(id: any) {
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
class CachedYouTubeClass implements ThirdPartyYouTubeLib {
  private service: ThirdPartyYouTubeLib;
  private listCache;
  private videoCache;
  needReset;

  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service;
  }

  listVideos() {
    if (this.listCache === null || this.needReset) {
      this.listCache = this.service.listVideos();
    }
    return this.listCache;
  }

  getVideoInfo(id: any) {
    if (this.videoCache == null || this.needReset) {
      this.videoCache = this.service.getVideoInfo(id);
    }
    return this.videoCache;
  }

  downloadVideo(id: any) {
    if (!this.downloadExists(id) || this.needReset) {
      this.service.downloadVideo(id);
    }
  }

  downloadExists(id) {
    return true;
  }
}

// Клас GUI, який використовує сервісний об'єкт. Замість
// реального сервісу, ми підсунемо йому об'єкт-замісник. Клієнт
// нічого не помітить, так як замісник має той самий інтерфейс,
// що й сервіс.
class YouTubeManager {
  protected service: ThirdPartyYouTubeLib;

  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service;
  }

  renderVideoPage(id) {
    const info = this.service.getVideoInfo(id);
    // Відобразити сторінку відеоролика.
  }

  renderListPanel() {
    const list = this.service.listVideos();
    // Відобразити список превью відеороликів.
  }

  reactOnUserInput() {
    this.renderVideoPage(1);
    this.renderListPanel();
  }
}

// Конфігураційна частина програми створює та передає клієнтам
// об'єкт замісника.
class Application {
  init() {
    const youTubeService = new ThirdPartyYouTubeClass();
    const youTubeProxy = new CachedYouTubeClass(youTubeService);
    const manager = new YouTubeManager(youTubeProxy);
    manager.reactOnUserInput();
  }
}

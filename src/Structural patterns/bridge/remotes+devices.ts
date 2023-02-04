export {};

// Клас пультів має посилання на пристрій, яким керує. Методи
// цього класу делегують роботу методам пов'язаного пристрою.
class Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }
  
  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

// Ви можете розширювати клас пультів, не чіпаючи код пристроїв.
class AdvancedRemote extends Remote {
  mute() {
    this.device.setVolume(0);
  }
}

// Всі пристрої мають спільний інтерфейс, тому з ними може
// працювати будь-який пульт.
interface Device {
  isEnabled();
  enable();
  disable();
  getVolume();
  setVolume(percent);
  getChannel();
  setChannel(channel);
}

// Разом з цим, кожен пристрій має особливу реалізацію.
class Tv implements Device {
  isEnabled() {
    throw new Error('Method not implemented.');
  }
  enable() {
    throw new Error('Method not implemented.');
  }
  disable() {
    throw new Error('Method not implemented.');
  }
  getVolume() {
    throw new Error('Method not implemented.');
  }
  setVolume(percent: any) {
    throw new Error('Method not implemented.');
  }
  getChannel() {
    throw new Error('Method not implemented.');
  }
  setChannel(channel: any) {
    throw new Error('Method not implemented.');
  }
}

class Radio implements Device {
  isEnabled() {
    throw new Error('Method not implemented.');
  }
  enable() {
    throw new Error('Method not implemented.');
  }
  disable() {
    throw new Error('Method not implemented.');
  }
  getVolume() {
    throw new Error('Method not implemented.');
  }
  setVolume(percent: any) {
    throw new Error('Method not implemented.');
  }
  getChannel() {
    throw new Error('Method not implemented.');
  }
  setChannel(channel: any) {
    throw new Error('Method not implemented.');
  }
}

// Десь у клієнтському програмному коді.
const tv = new Tv();
let remote = new Remote(tv);
remote.togglePower();

const radio = new Radio();
remote = new AdvancedRemote(radio);

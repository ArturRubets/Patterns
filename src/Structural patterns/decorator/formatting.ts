export {};

interface IText {
  getText(): string;
}

class TextContainer implements IText {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }
}

class Formatting implements IText {
  protected textContainer: IText;

  constructor(text: IText) {
    this.textContainer = text;
  }

  getText(): string {
    return this.textContainer.getText();
  }
}

class BoldFormatting extends Formatting {
  getText(): string {
    return `<p style='text-weight: bold; '>${super.getText()}</p>'`;
  }
}

class CursiveFormatting extends Formatting {
  getText(): string {
    return `<p style='text-weight: cursive;'>${super.getText()}</p>`;
  }
}

function clientCode(text: IText) {
  console.log(text.getText());
}

let textContainer = new TextContainer('Simple text');

let formatting = new Formatting(textContainer);

formatting = new BoldFormatting(formatting);

formatting = new CursiveFormatting(formatting);

clientCode(formatting);

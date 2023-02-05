class TextContainer {
    constructor(text) {
        this.text = text;
    }
    getText() {
        return this.text;
    }
}
class Formatting {
    constructor(text) {
        this.textContainer = text;
    }
    getText() {
        return this.textContainer.getText();
    }
}
class BoldFormatting extends Formatting {
    getText() {
        return `<p style='text-weight: bold; '>${super.getText()}</p>'`;
    }
}
class CursiveFormatting extends Formatting {
    getText() {
        return `<p style='text-weight: cursive;'>${super.getText()}</p>`;
    }
}
function clientCode(text) {
    console.log(text.getText());
}
let textContainer = new TextContainer('Simple text');
let formatting = new Formatting(textContainer);
formatting = new BoldFormatting(formatting);
formatting = new CursiveFormatting(formatting);
clientCode(formatting);
export {};
//# sourceMappingURL=formatting.js.map
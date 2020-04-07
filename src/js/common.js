import * as renderer from './renderer';
import * as keyboard from './keyboard';

const language = {
  arrlanguage: ['en', 'ru'],
  currentLangIndex: 0,
  keyMap: {
    ru: {
      Backquote: ['ё', 'Ё'],
      Digit1: ['1', '!'],
      Digit2: ['2', '"'],
      Digit3: ['3', '№'],
      Digit4: ['4', ';'],
      Digit5: ['5', '%'],
      Digit6: ['6', ':'],
      Digit7: ['7', '?'],
      Digit8: ['8', '*'],
      Digit9: ['9', '('],
      Digit0: ['0', ')'],
      Minus: ['-', '_'],
      Equal: ['=', '+'],
      Backspace: ['Backspace'],
      Tab: ['Tab ⇒'],
      KeyQ: ['й', 'Й'],
      KeyW: ['ц', 'Ц'],
      KeyE: ['у', 'У'],
      KeyR: ['к', 'К'],
      KeyT: ['е', 'Е'],
      KeyY: ['н', 'Н'],
      KeyU: ['г', 'Г'],
      KeyI: ['ш', 'Ш'],
      KeyO: ['щ', 'Щ'],
      KeyP: ['з', 'З'],
      BracketLeft: ['х', 'Х'],
      BracketRight: ['ъ', 'Ъ'],
      Backslash: ['\\', '|'],
      CapsLock: ['Caps Lock'],
      KeyA: ['ф', 'Ф'],
      KeyS: ['ы', 'Ы'],
      KeyD: ['в', 'В'],
      KeyF: ['а', 'А'],
      KeyG: ['п', 'П'],
      KeyH: ['р', 'Р'],
      KeyJ: ['о', 'О'],
      KeyK: ['л', 'Л'],
      KeyL: ['д', 'Д'],
      Semicolon: ['ж', 'Ж'],
      Quote: ['э', 'Э'],
      Enter: ['Enter ↵'],
      ShiftLeft: ['Shift'],
      KeyZ: ['я', 'Я'],
      KeyX: ['ч', 'Ч'],
      KeyC: ['с', 'С'],
      KeyV: ['м', 'М'],
      KeyB: ['и', 'И'],
      KeyN: ['т', 'Т'],
      KeyM: ['ь', 'Ь'],
      Comma: ['б', 'Б'],
      Period: ['ю', 'Ю'],
      Slash: ['.', ','],
      ArrowUp: ['▲'],
      ShiftRight: ['Shift'],
      ControlLeft: ['Ctrl'],
      MetaLeft: ['Win'],
      AltLeft: ['Alt'],
      Space: [' '],
      AltRight: ['Alt'],
      ControlRight: ['Ctrl'],
      ArrowLeft: ['◄'],
      ArrowDown: ['▼'],
      ArrowRight: ['►'],
    },
    en: {
      Backquote: ['`', '~'],
      Digit1: ['1', '!'],
      Digit2: ['2', '@'],
      Digit3: ['3', '#'],
      Digit4: ['4', '$'],
      Digit5: ['5', '%'],
      Digit6: ['6', '^'],
      Digit7: ['7', '&'],
      Digit8: ['8', '*'],
      Digit9: ['9', '('],
      Digit0: ['0', ')'],
      Minus: ['-', '_'],
      Equal: ['=', '+'],
      Backspace: ['Backspace'],
      Tab: ['Tab ⇒'],
      KeyQ: ['q', 'Q'],
      KeyW: ['w', 'W'],
      KeyE: ['e', 'E'],
      KeyR: ['r', 'R'],
      KeyT: ['t', 'T'],
      KeyY: ['y', 'Y'],
      KeyU: ['u', 'U'],
      KeyI: ['i', 'I'],
      KeyO: ['o', 'O'],
      KeyP: ['p', 'P'],
      BracketLeft: ['[', '{'],
      BracketRight: [']', '}'],
      Backslash: ['\\', '|'],
      CapsLock: ['Caps Lock'],
      KeyA: ['a', 'A'],
      KeyS: ['s', 'S'],
      KeyD: ['d', 'D'],
      KeyF: ['f', 'F'],
      KeyG: ['g', 'G'],
      KeyH: ['h', 'H'],
      KeyJ: ['j', 'J'],
      KeyK: ['k', 'K'],
      KeyL: ['l', 'L'],
      Semicolon: [';', ':'],
      Quote: ['\'', '"'],
      Enter: ['Enter ↵'],
      ShiftLeft: ['Shift'],
      KeyZ: ['z', 'Z'],
      KeyX: ['x', 'X'],
      KeyC: ['c', 'C'],
      KeyV: ['v', 'V'],
      KeyB: ['b', 'B'],
      KeyN: ['n', 'N'],
      KeyM: ['m', 'M'],
      Comma: [',', '<'],
      Period: ['.', '>'],
      Slash: ['/', '?'],
      ArrowUp: ['▲'],
      ShiftRight: ['Shift'],
      ControlLeft: ['Ctrl'],
      MetaLeft: ['Win'],
      AltLeft: ['Alt'],
      Space: [' '],
      AltRight: ['Alt'],
      ControlRight: ['Ctrl'],
      ArrowLeft: ['◄'],
      ArrowDown: ['▼'],
      ArrowRight: ['►'],
    },
  },

  swithLangKey() {
    this.currentLangIndex = (this.currentLangIndex + 1) % this.arrlanguage.length;
    this.setLang();
    const keyBoardContainer = document.querySelector('.kboard_container');
    renderer.renderMainLayout.call(language, keyBoardContainer);
  },

  setLang() {
    window.localStorage.setItem('language', this.currentLangIndex);
  },

  getLang() {
    const langIndex = window.localStorage.getItem('language');
    return (langIndex || 0);
  },
};

const body = document.querySelector('body');
body.id = 'body';
window.addEventListener('load', renderer.renderMainLayout.call(language, body));
const key = document.querySelectorAll('.key');
window.addEventListener('keydown', keyboard.handleKeyDown.bind(language));
window.addEventListener('keyup', keyboard.handleKeyUp);
key.forEach((el) => {
  el.addEventListener('mousedown', keyboard.mouseDownHandler);
  el.addEventListener('mouseup', keyboard.mouseUpHandler);
  el.addEventListener('mouseleave', keyboard.mouseUpHandler);
});

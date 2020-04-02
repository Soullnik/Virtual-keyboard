const Keyboard = {
  elements: {
    wrapper: null,
    main: null,
    keysContainer: null,
    textArea: null,
    keys: [],
  },

  eventHeandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    this.elements.wrapper = document.createElement('wrapper');
    this.elements.textArea = document.createElement('textarea');
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.wrapper.classList.add('wrapper');
    this.elements.textArea.classList.add('textarea');
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard--keys');
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.prepend(this.elements.wrapper);
    this.elements.wrapper.appendChild(this.elements.textArea);
    this.elements.wrapper.appendChild(this.elements.main);
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspase',
      'Tab',
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      '[',
      ']',
      '\\',
      'DEL',
      'Caps Lock',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      ';',
      '`',
      'ENTER',
      'Shift',
      '\\',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      ',',
      '.',
      '/',
      '↑',
      'Shift_right',
      'Ctrl',
      'Win',
      'Alt',
      'space',
      'Alt',
      'Ctrl',
      '←',
      '↓',
      '→',
    ];

    const createIconHTML = (iconName) => {
      return `<i class='material-icons'>${iconName}</i>`;
    };

    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspase', 'DEL', 'ENTER', 'Shift_right'].indexOf(key) !== -1;

      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard--key');

      switch (key) {
        case 'Backspase': {
          keyElement.classList.add('keyboard--key-wide');
          keyElement.innerHTML = createIconHTML('backspase');

          keyElement.addEventListener('click', () => {
            // eslint-disable-next-line max-len
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this.triggerEvent('oninput');
          });
          break;
        }
        case 'Caps Lock': {
          keyElement.classList.add('keyboard--key-wide', 'keyboard--key-activatable');
          keyElement.innerHTML = createIconHTML('capslock');

          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle('keyboard--key-active', this.properties.capsLock);
          });
          break;
        }
        case 'ENTER': {
          keyElement.classList.add('keyboard--key-wide');
          keyElement.innerHTML = createIconHTML('ENTER');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });
          break;
        }
        case 'space': {
          keyElement.classList.add('keyboard--key--extra-wide');
          keyElement.innerHTML = createIconHTML('space');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });
          break;
        }
        default: {
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            // eslint-disable-next-line max-len
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase()
              : key.toLowerCase();
            this.triggerEvent('oninput');
          });
          break;
        }
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  triggerEvent() {},

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
  },
};

window.addEventListener('load', () => {
  Keyboard.init();
});

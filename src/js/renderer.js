const createKey = (code, value, classList) => {
  const key = 'key'
  let keyElem = '';
  if (code.indexOf('Key') !== -1) {
    keyElem = `<div id='${code}' class='key key_symbol'>
    <span id='primary' class='primary_value'>${value[0]}</span>
    <span id='secondary' class='secondary_value value_hide'>${(value[1]) ? value[1] : value[0]}</span>
    </div>`;
  } else if (Object.keys(classList).indexOf(code) !== -1) {
    keyElem = `<div id='${code}' class='${key} ${classList[code]}' >
    <span id='primary' class='primary_value'>${value[0]}</span>
    <span id='secondary' class='secondary_value value_hide'>${(value[1]) ? value[1] : value[0]}</span>
    </div>`;
  } else {
      keyElem = `<div id='${code}' class=${key}>
      <span id='primary' class='primary_value'>${value[0]}</span>
      <span id='secondary' class='secondary_value value_hide'>${(value[1]) ? value[1] : value[0]}</span>
    </div>`;
  }

  return keyElem;
};

function renderKeyLayout() {
  const classList = {
    Backspace: 'keyboard-key--backspace', 
    Enter: 'keyboard-key--enter',
    ShiftLeft: 'keyboard-key--shiftleft',
    Tab: 'keyboard-key--tab',
    Backslash: 'keyboard-key--backslash',
    CapsLock: 'keyboard-key--capslock',
    Space: 'keyboard-key--space',
    ControlLeft: 'keyboard-key--ctrlleft',
  };
  const index = this.getLang();
  const lang = this.arrlanguage[index];
  const keys = Object.entries(this.keyMap[lang]).map((el) => {
    const [key, value] = el;
    const keyElem = createKey(key, value, classList);
    return keyElem;
  });

  return keys.join('');
}

function renderMainLayout(container) {
  switch (container.id) {
    case 'body':
      container.insertAdjacentHTML('afterbegin', `
        <div id='main_container' class='wrapper'>
          <textarea id="text_area" class='text_area'></textarea>
          <div id="kboard_container" class='kboard_container'>
            ${renderKeyLayout.call(this)}
          </div>
          <div class='language_info'><p>To change language press Shift + Ctrl</p></div>
        </div>`);
      break;
    case 'kboard_container':
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.insertAdjacentHTML('afterbegin',
        `${renderKeyLayout.call(this)}`);
      break;
    default:
      break;
  }
}

export {
  renderMainLayout,
  renderKeyLayout,
};

const createKey = (code, value, insertLineBreak) => {
  let keyElem = '';
  if (code.indexOf('Key') !== -1) {
    keyElem = `<div id='${code}' class='key key_symbol'>
    <span id='primary' class='primary_value'>${value[0]}</span>
    <span id='secondary' class='secondary_value value_hide'>${(value[1]) ? value[1] : value[0]}</span>
  </div>`;
  } else {
    keyElem = `<div id='${code}' class='key'>
    <span id='primary' class='primary_value'>${value[0]}</span>
    <span id='secondary' class='secondary_value value_hide'>${(value[1]) ? value[1] : value[0]}</span>
  </div>`;
  }

  return keyElem;
};

function renderKeyLayout(keyMap, language, currentLangIndex) {
  const insertLineBreak = ['Backspace', 'Enter', 'Delete', 'ShiftRight'];
  const lang = language[currentLangIndex];
  const keys = Object.entries(keyMap[lang]).map((el) => {
    const [key, value] = el;
    const keyElem = createKey(key, value, insertLineBreak);
    return keyElem;
  });

  return keys.join('');
}

function renderMainLayout(container) {
  console.log(container.id === 'body');
  switch (container.id) {
    case 'body' :
      container.insertAdjacentHTML("afterbegin", `
        <div id='main_container' class='wrapper'>
        <textarea id="text_area" class='text_area'></textarea>
        <div id="kboard_container" class='kboard_container'>
          ${renderKeyLayout(this.keyMap, this.language, this.currentLangIndex)}
        </div>
        </div>` 
      );
      break;
    case 'kboard_container':
      container.innerHTML = '';
      container.insertAdjacentHTML("afterbegin", 
      `${renderKeyLayout(this.keyMap, this.language, this.currentLangIndex)}` 
      );
    break;
  }
}

export {
  renderMainLayout,
  renderKeyLayout,
}
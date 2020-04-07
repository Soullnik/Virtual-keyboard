let keyDown = new Set(); 
let capsLockEnabled = false;

function caretSymbolAdding(textArea, char) {
  textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, 'end');
  textArea.focus();
}

function caretSymbolRemove(textArea, char, translation) {
  if (textArea.selectionStart === textArea.selectionEnd) {
    const start = Math.min(textArea.selectionStart, Math.max(0, textArea.selectionStart + translation));
    const end = Math.max(textArea.selectionEnd, textArea.selectionStart + translation);
    textArea.setRangeText(char, start, end, 'end');
  } else {
    textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, "end");
  }
  textArea.focus();
}

function renderChar(event, keyElement) {
    const textArea = document.querySelector('#text_area');
    const spanEnabled = [...keyElement.querySelectorAll('span')]
      .filter((span) => !span.classList.contains('value_hide'));
    let char = spanEnabled[0].textContent;
  keyDown.add(event.key);
  switch (true) {
    case (keyDown.has('Shift') && keyDown.has('Control')):
      this.swithLangKey();
      break;
    case (keyDown.has('CapsLock')):
      if (!capsLockEnabled) {
        keyElement.classList.add('key_down');
      }
      document.querySelectorAll('.key_symbol > span').forEach((el) => {
        if (el.classList.contains('value_hide')) {
          el.classList.remove('value_hide')
        } else {
          el.classList.add('value_hide')  
        }
      })
    break;
    case (keyDown.has('Shift') && keyDown.size < 2):
      keyElement.classList.add('key_down');
      document.querySelectorAll('span').forEach((el) => {
        if (el.classList.contains('value_hide')) {
          el.classList.remove('value_hide')
        } else {
          el.classList.add('value_hide')  
        }
      })
    break;
    case (keyDown.has('Tab')):
      char = '\t';
      caretSymbolAdding(textArea, char);
    break;
    case (keyDown.has('Backspace')):
      char = '';
      const translation = -1;
      caretSymbolRemove(textArea, char, translation);
    break;
    case (keyDown.has('Enter')):
      char = '\n';
      caretSymbolAdding(textArea, char);
    break;
    default:
      keyElement.classList.add('key_down');
      caretSymbolAdding(textArea, char);
      break;
  }
}

function handleKeyUp(event) {
  event.preventDefault();
  const keyElement = document.querySelector(`#${event.code}`);
  if (keyElement) {
    switch (true) {
      case (keyElement.id === 'CapsLock'):
        if (!capsLockEnabled) {
            keyDown.delete(event.key);
            capsLockEnabled = true;
          } else {
            keyElement.classList.remove('key_down');
            keyDown.delete(event.key);
            capsLockEnabled = false;
          }
        break;
      case (keyElement.id === 'ShiftLeft' || keyElement.id === 'ShiftRight'):
        document.querySelectorAll('span').forEach((el) => {
          keyElement.classList.remove('key_down');
          if (el.classList.contains('value_hide')) {
            el.classList.remove('value_hide')
          } else {
            el.classList.add('value_hide')  
          }
          keyDown.delete(event.key);
        })
      break;

      default:
        keyDown.delete(event.key);
        keyElement.classList.remove('key_down');
      break;
    }
  }
}

function handleKeyDown(event) {
  event.preventDefault();
  const keyElement = document.querySelector(`#${event.code}`);
  if (!keyElement) return false;
  renderChar.call(this, event, keyElement);  
}

function mouseDownHandler(event) {
  console.log(event)
  const keyElement = event.toElement;
  if(event.target.classList.contains('key')) {
    event.target.classList.add('key_down');
    renderChar(event, keyElement);
  }
}

function mouseUpHandler(event) {
  event.target.classList.remove('key_down');
}

export {
  mouseDownHandler,
  mouseUpHandler,
  handleKeyDown,
  handleKeyUp,
}
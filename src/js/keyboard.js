let keyDown = new Set(); 
let capsLockEnabled = false;

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
    case (keyDown.has('Shift')):
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
      caretChage(textArea, char);
    break;
    case (keyDown.has('Backspace')):
      console.log(textArea.textContent.value)
      textArea.textContent = textArea.value.slice(0, -1);
      textArea.focus();
    break;
    case (keyDown.has('Enter')):
      char = '\n';
      caretChage(textArea, char);
    break;
    default:
      keyElement.classList.add('key_down');
      caretChage(textArea, char);
      break;
  }
}

const caretChage = (textArea, char) => {
  if (textArea.selectionStart === textArea.selectionEnd);
  textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, "end");
  textArea.focus();
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
      // case (keyElement.id === 'ShiftLeft' && keyElement.id === 'Control'):
      //     keyDown.delete(event.key);
      // break;
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
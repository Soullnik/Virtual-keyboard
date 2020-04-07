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

const display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}

// Keyboard support:
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (
    (key >= '0' && key <= '9') ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/' ||
    key === '.'
  ) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    let current = display.innerText;
    if (current.length > 1) {
      display.innerText = current.slice(0, -1);
    } else {
      display.innerText = '0';
    }
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

const currentDisplayField = document.querySelector('.current-display')
const previousDisplayField = document.querySelector('.previous-display')
const currentDisplayText = currentDisplayField.innerText;
const previousDisplayText = previousDisplayField.innerText;
const buttonsContainer = document.querySelector('.buttons-container')


// previousDisplayField.innerText = previousDisplayText
// currentDisplayField.innerText = currentDisplayText

// get the number buttons
const numberButtons = document.querySelectorAll('number')
// numberButtons.forEach((number) => {
//   number.addEventListener('click',)
// })

buttonsContainer.addEventListener('click', (e) => {
  //numbers
  if (e.target.classList.contains('number')) {
    if (currentDisplayField.innerText.length < 8)
      currentDisplayField.innerText += e.target.innerText
  }
  if (e.target.classList.contains('decimal')) {
    if (!currentDisplayField.innerText.includes('.'))
      currentDisplayField.innerText += e.target.innerText
  }

  // operands
  if (e.target.classList.contains('operator')) {
    const operator = e.target.innerText
    switch (operator) {
      case '+':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = ""

        }
        break;
      case '-':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = ""
        }
        break;
      case 'x':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = ""
        }
        break;
      case '÷':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = ""
        }
        break;
      case '=':
        if (currentDisplayField.innerText !== '') {
          if (previousDisplayField.innerText.includes('+')) {
            const currentNumber = Number(currentDisplayField.innerText)
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0])
            currentDisplayField.innerText = currentNumber + previousNumber
            previousDisplayField.innerText = ''
          }
          if (previousDisplayField.innerText.includes('-')) {
            const currentNumber = Number(currentDisplayField.innerText)
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0])
            currentDisplayField.innerText = previousNumber - currentNumber
            previousDisplayField.innerText = ''
          }
          if (previousDisplayField.innerText.includes('÷')) {
            const currentNumber = Number(currentDisplayField.innerText)
            // console.log(currentNumber);
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0])
            console.log(previousNumber);
            currentDisplayField.innerText = previousNumber / currentNumber
            previousDisplayField.innerText = ''
          }
          if (previousDisplayField.innerText.includes('x')) {
            const currentNumber = Number(currentDisplayField.innerText)
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0])
            currentDisplayField.innerText = previousNumber * currentNumber
            previousDisplayField.innerText = ''
          }
        }
        break;

      default:
        break;
    }
  }
  // functions
  if (e.target.classList.contains('function')) {
    const func = e.target.innerText
    switch (func) {
      case 'AC':
        //!dont use here innerText or textContent
        currentDisplayField.innerText = ""
        previousDisplayField.innerText = ""
        break;
      case '±':
        if (!currentDisplayField.innerText.includes('-')) {
          currentDisplayField.prepend('-')
        }
        break;
      case '%':
        // if (currentDisplayField.innerText !== '') {
        //   currentDisplayField.innerText = Number(currentDisplayField.innerText) / 100;
        // }
        currentDisplayField.innerText = currentDisplayField.innerText.substring(0, currentDisplayField.innerText.length - 1)
      default:
        break;
    }
  }

})
function Calculator() {
  this.display = document.querySelector('.display');

  this.init = () => {
    this.listener();
    this.keyEnter();
  };

  this.keyEnter = () => {
    this.display.addEventListener('keyup', (event) => {
      if (event.keyCode !== 13) return;
      else this.calculate();
    });
  };

  this.listener = () => {
    document.addEventListener('click', (event) => {
      const element = event.target;

      if (element.classList.contains('btn-num')) {
        this.addToDisplay(element);
      }

      if (element.classList.contains('btn-clear')) {
        this.clearDisplay();
      }

      if (element.classList.contains('btn-del')) {
        this.deleteOne();
      }

      if (element.classList.contains('btn-eq')) {
        this.calculate();
      }
    });
  };

  this.addToDisplay = (element) => {
    this.display.value += element.innerText;
    this.display.focus();
  };
  this.clearDisplay = () => (this.display.value = '');
  this.deleteOne = () => (this.display.value = this.display.value.slice(0, -1));
  this.calculate = () => {
    try {
      const calc = eval(this.display.value);
      if (!calc) return alert('Conta inválida!');
      this.display.value = calc;
    } catch (error) {
      return alert('Conta inválida!');
    }
  };
}

const calculator = new Calculator();
calculator.init();

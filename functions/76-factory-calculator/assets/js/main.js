function createCalculator() {
  return {
    display: document.querySelector('.display'),
    clear: document.querySelector('.btn-clear'),

    init() {
      this.eventListener();
      this.enterKey();
    },
    eventListener() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.toDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if (el.classList.contains('btn-eq')) {
          console.log('aqui');
          this.calculate();
        }
      });
    },
    toDisplay(value) {
      this.display.value += value;
    },
    clearDisplay() {
      this.display.value = '';
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    calculate() {
      let calc = this.display.value;

      try {
        calc = eval(calc);
        if (!calc) {
          return alert('Conta inválida');
        }
        this.display.value = String(calc);
      } catch (error) {
        return alert('Conta inválida');
      }
    },
    enterKey() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.calculate();
        }
      });
    },
  };
}

const calculator = createCalculator();
calculator.init();

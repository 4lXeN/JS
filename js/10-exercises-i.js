let calculation = localStorage.getItem('calculation') || '';
    function calculate() {
      document.querySelector('.result').innerHTML = calculation;

    } document.querySelector('.result').innerHTML = calculation;


    function updateCalculation(value) {
      calculation += value;
      console.log(calculation);
      localStorage.setItem('calculation', calculation);
      calculate()
    }

    // Optional: you can also create a function in order
    // to reuse this code.
    function saveCalculation() {
      localStorage.setItem('calculation', calculation);
    }
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.classList.add('calculator-btn');
    });

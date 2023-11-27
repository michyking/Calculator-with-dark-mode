// TO TOGGLE THE THEME STATE

const toggleCheckboxState = () => {
  const checkbox = document.getElementById("mode");

  if (checkbox.classList.contains("unchecked")) {
    checkbox.classList.remove("unchecked");
    checkbox.classList.add("checked");
    document.body.classList.add("theme2");
  } else if (checkbox.classList.contains("checked")) {
    checkbox.classList.remove("checked");
    checkbox.classList.add("indeterminate");
    document.body.classList.remove("theme2");
    document.body.classList.add("theme3");
  } else {
    checkbox.classList.remove("indeterminate");
    checkbox.classList.add("unchecked");
    document.body.classList.remove("theme3");
  }
};

// FOR THE DISPLAY

let displayValue = '';

// const updateDisplay =() =>{
//   document.getElementById('display').textContent = displayValue;
// }

const updateDisplay = () => {
    const displayElement = document.getElementById('display');
    const formattedValue = formatNumberWithCommas(displayValue);
    displayElement.textContent = formattedValue;
  };
  
  // Helper function to format a number with commas
  const formatNumberWithCommas = (number) => {
    const parts = number.toString().split('.');
    // Format the integer part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Join the integer and decimal parts with a dot
    return parts.join('.');
  };

// for the numbers

const showNumber = (number) => {
  if (displayValue === " " || displayValue === "ERROR") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
};

// for the operators 

const showOperator = (operator) =>{
    if (!['+', '-', '*', '/'].includes(displayValue.slice(-1))) {
      displayValue += operator;
      updateDisplay();
    }
  }

//    for the decimal

const showDecimal =() =>{
    if (!displayValue.includes('.')) {
      displayValue += '.';
      updateDisplay();
    }
  }

//   for the del button 

const deleteLast = () =>{
    if (displayValue.length > 1) {
      displayValue = displayValue.slice(0, -1);
    } else {
      displayValue = '';
    }
    updateDisplay();
  }

//   for the reset

const resetCalculator = () =>{
    displayValue = '';
    updateDisplay();
  }

//   the evaluation

// const calculateResult=() =>{
//     try {
//       displayValue = eval(displayValue).toString();
//       updateDisplay();
//     } catch (error) {
//       displayValue = 'ERROR';
//       updateDisplay();
//     }
//   }

const calculateResult = () => {
    try {
      const result = new Function('return ' + displayValue)();
      displayValue = result.toString();
      updateDisplay();
    } catch (error) {
      displayValue = 'ERROR';
      updateDisplay();
    }
  };
  

const inputData = document.querySelector('input');

inputData.addEventListener('input', () => {
    inputData.value = inputData.value.replace(/[^0-9+\-*/.]/, '');
  });
function ac(e){
    inputData.value = '';
}
function remove(){
  inputData.value = inputData.value.slice(0,-1);
}

function btnData(value){
    inputData.value += value;
  }
  function symbolData(value) {
    const lastChar = inputData.value.slice(-1);
  
    // Prevents multiple symbols in a row (e.g., "++" or "--")
    if (!['+', '-', '*', '/'].includes(lastChar)) {
      inputData.value += value;
    }
  }
  function calculate() {
    try {
      // Evaluate the expression safely
      inputData.value = eval(inputData.value);
    } catch (error) {
      inputData.value = 'Error';
    }
  }
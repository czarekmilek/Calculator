const input_element =               document.querySelector('.input');
const output_operation_element =    document.querySelector('.operation .value');
const output_result_element =       document.querySelector('.result .value');

//Variables
const OPERATORS = ["+", "-", "*", "/"];
const POWER     = "POWER(", 
      FACTORIAL = "FACTORIAL";
let data = {
    operation: [],
    formula:   []
} 

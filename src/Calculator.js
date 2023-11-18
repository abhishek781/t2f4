// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  // Step 3: Set up state
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  // Step 4: Create input change handlers
  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  // Step 5: Create validation function
  const validateInput = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setError('Both fields are required');
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setError('Please enter valid numbers');
      return false;
    }
    setError('');
    return true;
  };

  // Step 6: Create arithmetic operation functions
  const handleAddition = () => {
    if (validateInput()) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Result: ${sum}`);
    }
  };

  const handleSubtraction = () => {
    if (validateInput()) {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(`Result: ${difference}`);
    }
  };

  const handleMultiplication = () => {
    if (validateInput()) {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(`Result: ${product}`);
    }
  };

  const handleDivision = () => {
    if (validateInput()) {
      if (parseFloat(num2) === 0) {
        setError('Division by zero is not allowed');
      } else {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(`Result: ${quotient}`);
      }
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" placeholder="Enter number 1" value={num1} onChange={handleNum1Change} />
      <input type="text" placeholder="Enter number 2" value={num2} onChange={handleNum2Change} />
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && <div style={{ color: 'green' }}>{result}</div>}
    </div>
  );
};

export default Calculator;

import React, { useState } from 'react';

function Page() {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [sum, setSum] = useState('');
  const [average, setAverage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  }

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  }

  const handleInput3Change = (event) => {
    setInput3Value(event.target.value);
  }

  const calculateSum = () => {
    const num1 = parseFloat(input1Value);
    const num2 = parseFloat(input2Value);
    const num3 = parseFloat(input3Value);
    const sum = num1 + num2 + num3;
    setSum(sum);
  }

  const calculateAverage = () => {
    const num1 = parseFloat(input1Value);
    const num2 = parseFloat(input2Value);
    const num3 = parseFloat(input3Value);
    const average = (num1 + num2 + num3) / 3;
    setAverage(average);
  }

  const getOutput = () => {
    const message = average > 50 ? 'Average is greater than 50' : 'Average is not greater than 50';
    setOutputMessage(message);
  }

  return (
    <div>
      <h1>maha dhanush</h1>
      <div>
        <label>Enter mark 1:</label>
        <input type="text" placeholder='' value={input1Value} onChange={handleInput1Change} />
        <br />
        <br />

        <label>Enter mark 2:</label>
        <input type="text" placeholder='' value={input2Value} onChange={handleInput2Change} />
        <br />
        <br />

        <label>Enter mark 3:</label>
        <input type="text" placeholder='' value={input3Value} onChange={handleInput3Change} />
        <br />
        <br />

        <input type="text" placeholder='Sum of marks' value={sum} />
        <button onClick={calculateSum}>Calculate Sum</button>
        <br />
        <br />

        <input type="text" placeholder='Average of marks' value={average} />
        <button onClick={calculateAverage}>Calculate Average</button>
        <br />
        <br />

        <button onClick={getOutput}>Get Output</button>
        <br />
        <br />

        <input type="text" placeholder='Output Message' value={outputMessage} />
      </div>
    </div>
  )
}

export default Page;

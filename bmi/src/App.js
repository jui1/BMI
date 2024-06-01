import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('You have a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className='container'>
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight (lbs)</label>
          <input
            type='number'
            placeholder='Enter weight'
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Height (inches)</label>
          <input
            type='number'
            placeholder='Enter height'
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload}>Reload</button>
        </div>
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;

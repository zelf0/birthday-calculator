import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import { useState } from 'react'

function App() {

  const [ages, setAges] = useState({
    days: 0,
    months: 0,
    weeks: 0,
    minutes: 0,
    hours: 0
  })

  const calculateAges = (value) => {
    console.log(value);
    const birthday = new Date(value);
    const today = new Date();
    const days = (today - birthday) / (1000 * 60 * 60 * 24);
    const weeks = days / 7;
    const months = days / 30.3;
    const hours = days * 24;
    const minutes = hours * 60;

    setAges({days: days, months: months, weeks: weeks, minutes: minutes, hours: hours});
    calculateNext();

  }
  const calculateNext = () => {
      // ages.days
  }


  return (
    <div className="App">
      <Input calculateAges = {calculateAges}/>
      <Display ages = {ages}/>
    </div>
  );
}

export default App;

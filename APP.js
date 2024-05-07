import React, { useState } from 'react';

function LeapYearChecker() {
  const [year, setYear] = useState('');
  const [isLeapYear, setIsLeapYear] = useState(false);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const checkLeapYear = () => {
    const inputYear = parseInt(year);
    if (isNaN(inputYear)) {
      setIsLeapYear(false);
      return;
    }

    if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
      setIsLeapYear(true);
    } else {
      setIsLeapYear(false);
    }
  };

  return (
    <div>
      <h2>Leap Year Checker</h2>
      <input
        type="text"
        placeholder="Enter a year"
        value={year}
        onChange={handleYearChange}
      />
      <button onClick={checkLeapYear}>Check</button>
      {isLeapYear ? (
        <p>{year} is a leap year.</p>
      ) : (
        <p>{year} is not a leap year.</p>
      )}
    </div>
  );
}

export default LeapYearChecker;
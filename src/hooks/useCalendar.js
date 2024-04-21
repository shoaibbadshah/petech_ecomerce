import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCalendar = (initialYear, initialMonth) => {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const navigate = useNavigate();

  const goToPreviousMonth = () => {
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = month === 1 ? year - 1 : year;
    setYear(newYear);
    setMonth(newMonth);
    updateUrl(newYear, newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = month === 12 ? year + 1 : year;
    setYear(newYear);
    setMonth(newMonth);
    updateUrl(newYear, newMonth);
  };

  const updateUrl = (newYear, newMonth) => {
    navigate(`/${newYear}/${newMonth}`);
  };

  return {
    year,
    month,
    goToPreviousMonth,
    goToNextMonth,
    updateUrl,
  };
};

export default useCalendar;

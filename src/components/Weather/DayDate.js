import React from 'react';

const DayDate = (props) => {
  const dayindex = props.datum.getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return <div>{days[dayindex]}</div>;
};

export default DayDate;

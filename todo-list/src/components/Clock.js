import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setDate(new Date());
  });

  return (
    <h2>It is {date.toLocaleTimeString()}</h2>
  );
};

export default Clock;
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval( ()=> tick(), 1000);
    return ()=>clearInterval(timerID);
  });

  function tick(){
    setDate(new Date());
  }

  return (
    <div>
    <br></br>
    <h2 id="clock">It is {date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
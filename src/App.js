import React, { useState, useEffect, useRef } from "react";
import { fromEvent, interval } from "rxjs";

const App = () => {
  const [text, setText] = useState("FizzBuzz");
  const countClickRef = useRef(0);

  useEffect(() => {
    fromEvent(document, "click").subscribe(() => (countClickRef.current += 1));
    startTimer();
  }, []);

  const startTimer = () => {
    const source = interval(1000);
    const subscribe = source.subscribe(() => {
      let result;
      const nbOfClick = countClickRef.current;
      if (nbOfClick % 5 === 0 && nbOfClick % 3 === 0) {
        result = "FizzBuzz";
      } else if (nbOfClick % 3 === 0) {
        result = "Fizz";
      } else if (nbOfClick % 5 === 0) {
        result = "Buzz";
      } else {
        result = nbOfClick;
      }
      setText(result);
    });
  };

  return (
    <div>
      <p className="text">Total click: {text}</p>
    </div>
  );
};

export default App;

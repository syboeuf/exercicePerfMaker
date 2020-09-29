import React, { useState, useEffect, useRef } from "react";
import { fromEvent, interval } from "rxjs";

const App = () => {
  const [text, setText] = useState("FizzBuzz");
  const clickRef = useRef(0);

  useEffect(() => {
    fromEvent(document, "click").subscribe(() => (clickRef.current += 1));
    startTimer();
  }, []);

  const startTimer = () => {
    const source = interval(1000);
    const subscribe = source.subscribe(() => {
      let para;
      const click = clickRef.current;
      if (click % 5 === 0 && click % 3 === 0) {
        console.log("FizzBuzz");
        para = "FizzBuzz";
      } else if (click % 3 === 0) {
        console.log("Fizz");
        para = "Fizz";
      } else if (click % 5 === 0) {
        console.log("Buzz");
        para = "Buzz";
      } else {
        console.log(click);
        para = click;
      }
      setText(para);
    });
  };

  return (
    <div>
      <p className="text">Total click: {text}</p>
    </div>
  );
};

export default App;

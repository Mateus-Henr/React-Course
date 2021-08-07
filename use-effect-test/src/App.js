import { useState, useEffect } from "react";

function App(props) {
  let myTimer;

  const [timerIsActive, setTimerIsActive] = useState(false);

  const { timerDuration } = props; // using destructuring to pull out specific props values

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);

  return <>{myTimer}</>;
}

export default App;

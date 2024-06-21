import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimeExpired] = useState(false);
  const [timerisRunning, setTimeIsRunning] = useState(false);
  const timer = useRef();
  const dialog = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
    setTimeIsRunning(true);
    dialog.current.showModal();
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal result="lost" targetTime={targetTime} ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>
        <p>{timerExpired ? "You Lost" : ""}</p>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerisRunning ? handleStop : handleStart}>
            {timerisRunning ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerisRunning ? "active" : undefined}>
          {timerisRunning ? "Time is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}

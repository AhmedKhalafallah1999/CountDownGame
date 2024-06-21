import { forwardRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return createPortal(
    <dialog className="result-modal" ref={ref}>
      <h2>you {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>you stop the timer with X seconds left.</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;

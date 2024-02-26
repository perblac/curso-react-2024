import { useState } from "react";

const useCounter = (initialValue = 10) => {
  const [myCount, setMyCount] = useState(initialValue);

  const incCount = (step = 1) => {
    setMyCount((prev) => prev + step);
  };

  const decCount = (step = 1) => {
    setMyCount((prev) => prev - step);
  };

  const reset = () => {
    setMyCount(initialValue);
  };

  return {
    myCount,
    incCount,
    decCount,
    reset,
  };
};

export default useCounter;

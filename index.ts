import { useState, useRef } from "react";

const useDirection = (totalPages: number) => {
  const [now, setNow] = useState<number>(1);
  const ref = useRef<number>(1);

  const goBack = () => {
    ref.current -= 1;
    if (ref.current < 1) {
      ref.current = 1;
      return;
    } else {
      setNow(ref.current);
    }
  };

  const goForward = () => {
    ref.current += 1;
    if (ref.current > totalPages) {
      ref.current = totalPages;
      return;
    } else {
      setNow(ref.current);
    }
  };

  return [now, goBack, goForward] as const;
};

export default useDirection;

import { useEffect, useState } from "react";

function useWidth(ScreenSize) {
  const [onSmall, setOnSmall] = useState(false);



  useEffect(() => {
    const checkScreenSize = () => {
      setOnSmall(window.innerWidth < ScreenSize);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [ScreenSize]);

  return onSmall 
}

export default useWidth; 

import React, { useEffect, useState } from "react";
import useWidth from "../CustomHooks/useWidth";
function TestComponent() {
  const Size = useWidth(768);
  const [count, setCount] = useState(0);
  const [dateGetter, setDateGetter] = useState(new Date());
  const [text, setText] = useState("");

  const Ranges = () => {
    setCount((Time) => Time + 1);
  };
  const tick = () => {
    setDateGetter(new Date());
  };
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("Rendering?....");
  }, [count]);
  useEffect(() => {
    setInterval(tick, 1000);
  }, []);

  return (
    <>
      <div className={Size ? "small" : "big"}>
        <p> TEST SHOULD APPEAR HERE.....</p>
        <div>Click Counter : {count}</div>
        <button onClick={Ranges}>Click </button>
        <div>
          YOUR TEXT :
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>Current time: {dateGetter.toLocaleString()}</div>
      </div>
    </>
  );
}

export default TestComponent;

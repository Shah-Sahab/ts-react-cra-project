import { FC } from "react";
import { useEffect, useState } from "react";
import MySvg from "./assets/hollowed-boxes.svg";

const App: FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newScale = window.innerWidth / 1000;
      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Hello, React 18!</h1>
      <img src={MySvg} alt="My SVG" style={{ transform: `scale(${scale})` }} />
    </div>
  );
};

export default App;

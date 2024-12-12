import { FC } from "react";
import { useEffect, useState } from "react";
import MySvg from "./assets/hollowed-boxes.svg";
import "./App.css";

const App: FC = () => {
  const [scale, setScale] = useState(1);
  // const [prevSize, setPrevSize] = useState(1);
  // const imgRef = React.createRef<HTMLImageElement>();

  useEffect(() => {
    const handleResize = () => {
      const newScale = window.innerWidth / 1000;
      setScale(newScale);
    };
    // const handleResize = () => {
    //   const newSize = window.innerWidth / 1000;
    //   if (newSize !== prevSize) {
    //     setPrevSize(newSize);
    //     imgRef.current && imgRef.current.style.setProperty("--scale", newSize.toString());
    //   }
    // };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello, React 18!</h1>
      <img src={MySvg} alt="My SVG" style={{ transform: `scale(${scale})` }} />
    </div>
  );
};

export default App;

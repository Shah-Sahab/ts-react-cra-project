import { useState, useEffect } from "react";
import styled from "styled-components";

// Styled-component with dynamic background size
const Background = styled.div<{ scale: number }>`
  width: 100%;
  height: 100vh;
  background-image: url("https://via.placeholder.com/1920x1080");
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => props.scale}%;
  transition: background-size 0.3s ease-in-out; // Smooth scaling
`;

const StyleScalingComponent = () => {
  const [scale, setScale] = useState(100); // Initial scale value (in %)

  useEffect(() => {
    const handleResize = () => {
      // Example logic: scale based on window width
      const newScale = Math.min(
        100,
        Math.max(50, (window.innerWidth / 1920) * 100)
      );
      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial scale on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Background scale={scale} />;
};

export default StyleScalingComponent;

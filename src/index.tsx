import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import { ImageResize } from "./image-resize/ImageResize";
import StyleScalingComponent from "./styled-background-image/StyleScalingComponent";

// Render your React component instead
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <App />
      <ImageResize />
      <StyleScalingComponent />
    </>
  </StrictMode>
);

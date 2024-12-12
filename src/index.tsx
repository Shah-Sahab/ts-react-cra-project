import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import './index.css';
import App from './App';

// Render your React component instead
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

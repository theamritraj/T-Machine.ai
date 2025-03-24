import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider"; // ✅ Ensure Correct Import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider> {/* ✅ Wrap with Provider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

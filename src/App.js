import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("ADANIENT.BSE");

  // Wrapping the coponents inside Context Providers, Context providers are the global 
  // stores defined using the React's Context API. Any other library like Redux has not 
  // been used as there is neither a big amount of data that needs to be provided across
  // the app nor multiple components
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

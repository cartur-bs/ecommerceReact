import "./App.css";

import { counterContextProvider } from "./contexts/counterContext";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <counterContextProvider>
          <Header />
          <Home />
        </counterContextProvider>
    </div>
  );
}

export default App;

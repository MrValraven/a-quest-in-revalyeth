import { useEffect } from "react";
import "./app.scss";
import { useLocation } from "react-router-dom";
import DeityCard from "./components/DeityCard/DeityCard";
import gods from "./static/gods";

function App() {
  let location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <div className="app">
      {gods.map((god) => (
        <DeityCard
          key={god.id}
          godImage={god.image}
          symbol={god.symbol}
          name={god.details.name}
          title={god.details.title}
          alignment={god.details.alignment}
        />
      ))}
    </div>
  );
}

export default App;

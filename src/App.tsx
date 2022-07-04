import React from "react";
import Card, { CardVariant } from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        onClick={() => console.log("click")}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Кнопка</button>
        <div>safas</div>
      </Card>
    </div>
  );
};

export default App;

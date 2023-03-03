import { useState } from "react";
import Banner from "./components/banner/banner";
import Form from "./components/form/form";
import TextSpot from "./components/textSpot/textSpot";

function App() {
  const [card, setCard] = useState([]);

  return (
    <div classNAme="App">
      <Banner />
      <Form newCard={setCard} />
    </div>
  );
}

export default App;

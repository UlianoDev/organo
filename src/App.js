import { useState } from "react";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Team from "./components/teamSection/teamSection";
import TextSpot from "./components/textSpot/textSpot";

function App() {
  const options = [
    {
      name: "Normal",
      primaryColor: "#57C278'",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Agua",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Fogo",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Planta",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Inseto",
      primaryColor: "#D86EBF",
      secondaryColor: "FAE5F5",
    },
    {
      name: "Toxico",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
    {
      name: "Eletrico",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
  ];

  const [cards, setcards] = useState([]);

  const whenAdd = (newcards) => {
    setcards([...cards, newcards]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        itens={options.map((parameter) => parameter.name)}
        newCard={(newcards) => whenAdd(newcards)}
      />
      {options.map((parameter) => (
        <Team
          key={parameter.name}
          title={parameter.name}
          pokemon={cards.filter(
            (parameter2) => parameter2.types === parameter.name
          )}
          primaryColor={parameter.primaryColor}
          secondaryColor={parameter.secondaryColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

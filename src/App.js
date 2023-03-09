import { useState } from "react";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Team from "./components/teamSection/teamSection";
import TextSpot from "./components/textSpot/textSpot";

function App() {
  const options = [
    {
      nome: "Normal",
      primaryColor: "#57C278'",
      secondaryColor: "#D9F7E9",
    },
    {
      nome: "Agua",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      nome: "Fogo",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      nome: "Planta",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      nome: "Inseto",
      primaryColor: "#D86EBF",
      secondaryColor: "FAE5F5",
    },
    {
      nome: "Toxico",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      nome: "Eletrico",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [cards, setcards] = useState([]);

  const whenAdd = (newcards) => {
    setcards([...cards, newcards]);
    console.log(cards);
  };

  return (
    <div classNAme="App">
      <Banner />
      <Form
        itens={options.map((parameter) => parameter.nome)}
        newCard={(newcards) => whenAdd(newcards)}
      />
      {options.map((parameter) => (
        <Team
          key={parameter.nome}
          title={parameter.nome}
          pokemon={cards.filter(
            (parameter2) => parameter2.time === parameter.nome
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

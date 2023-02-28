
import Banner from './components/banner/banner';
import TextSpot from './components/textSpot/textSpot';

function App() {
  return (
    
<div classNAme="App">
  <Banner/>
  <TextSpot label="Nome" placeholder="Digite seu nome"/>
  <TextSpot label="Cargo" placeholder="Digite seu cargo"/>
  <TextSpot label="Imagem" placeholder="Digite o endereço da imagem"/>
  <TextSpot label="Time" placeholder=""/>

</div>
  );
}

export default App;

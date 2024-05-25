import "./App.css";
import Container from "./components/Container/Container";
import CharactersList from "./components/List/CharactersList";
import SearchArea from "./components/Search/SearchArea";
import getChracters from "./connection/Stream";

function App() {
  let deneme = false;
  deneme ? getChracters("ric") : console.log("boş");

  return (
    <div className="App">
      <div className="App-header">
        <Container>
          <SearchArea/>
          <CharactersList/>
        </Container>
      </div>
    </div>
  );
}

export default App;

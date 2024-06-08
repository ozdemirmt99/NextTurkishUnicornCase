import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import CharactersList from "./components/List/CharactersList";
import SearchArea from "./components/Search/SearchArea";
import { getChracters } from "./connection/Stream";

function App() {
  const [checkedCharacters, setCheckedCharacters] = useState([]);
  const [allData, setAllData] = useState([]);

  /**
   * Fethinc Characters on API.
   */
  useEffect(() => {
    const fetching = async () => {
      let all = await getChracters("ric");

      setAllData(all);
    };

    fetching();
  }, []);

  /**
   * Uptading selected characters.
   * @param {*} allCharacters 
   */
  const controlSelectedCharacters = (allCharacters) => {
    let checkedCharacters = allCharacters.filter((e) => e.isChecked);
    setCheckedCharacters(checkedCharacters);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Rick And Morty</h1>
        <Container>
          <SearchArea />
          <CharactersList
            allCharacter={allData}
            controlSelectedCharacters={controlSelectedCharacters}
          />
        </Container>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import CharactersList from "./components/List/CharactersList";
import SearchArea from "./components/Search/SearchArea";
import { getChracters } from "./connection/Stream";

function App() {
  const [checkedCharacters, setCheckedCharacters] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  /**
   * Fethinc Characters on API.
   */
  useEffect(() => {
    const fetching = async () => {
      let all = await getChracters(searchInput);
      console.log("fetching")
      if(all)
        setAllData(all);
    };

    fetching();
  }, [searchInput]);

  /**
   * Uptading selected characters.
   * @param {*} allCharacters
   */
  const controlSelectedCharacters = (allCharacters) => {
    let checkedCharacters = allCharacters.filter((e) => e.isChecked);
    setCheckedCharacters(checkedCharacters);
  };

  const addOrRemoveCharacter = (character) => {
    let copyCheckedCharacters = [...checkedCharacters];

    if(copyCheckedCharacters.includes(character)){
      copyCheckedCharacters.pop(character)
      setCheckedCharacters(copyCheckedCharacters)

      return;
    }
    
    copyCheckedCharacters.push(character);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Rick And Morty</h1>
        <Container>
          <SearchArea
            checkedCharacters={checkedCharacters}
            searchInput={searchInput}
            searchInputOnchange={setSearchInput}
            options={allData}
          />
          <CharactersList
            addOrRemoveCharacter={addOrRemoveCharacter}
            allCharacter={allData}
            controlSelectedCharacters={controlSelectedCharacters}
            searchInput={searchInput}
          />
        </Container>
      </div>
    </div>
  );
}

export default App;

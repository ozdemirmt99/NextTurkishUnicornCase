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
      console.log("fetching");
      if (all) setAllData(all);
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

    if (copyCheckedCharacters.includes(character)) {
      copyCheckedCharacters.pop(character);
      setCheckedCharacters(copyCheckedCharacters);

      return;
    }

    copyCheckedCharacters.push(character);
  };

  const removeCheckOnAllData = (checkList) => {
    debugger;
    let tempAllData = [...allData];
    tempAllData.forEach((t, i) => {
      let temp = checkList.filter((e) => e.value === t.id);
      if (temp.length>0) {
        tempAllData[i].isChecked = true;
      } else {
        tempAllData[i].isChecked = false;
      }
    });

    // checkList.forEach((e) => {
    //   tempAllData.forEach((t, index) => {
    //     debugger;
    //     if (t.id === e.value) {
    //       tempAllData[index].isChecked = true;
    //     } else {
    //       tempAllData[index].isChecked = false;
    //     }
    //   });
    // });
    setAllData(tempAllData);
  };

  const RemoveCharacterOnChecked = (characters) => {
    let newCheckedCharacters = [];

    characters.forEach((e) => {
      checkedCharacters.forEach((c) => {
        if (c.id === e.value) {
          newCheckedCharacters.push(c);
        }
      });
    });

    setCheckedCharacters(newCheckedCharacters);
    removeCheckOnAllData(characters);
  };

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
            RemoveCharacterOnChecked={RemoveCharacterOnChecked}
          />
          <CharactersList
            checkedCharacters={checkedCharacters}
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

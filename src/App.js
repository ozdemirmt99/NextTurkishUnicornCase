import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import CharactersList from "./components/List/CharactersList";
import SearchArea from "./components/Search/SearchArea";
import { getChracters } from "./connection/Stream";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect( () => {
    const fetching= async()=>{
      let all = await getChracters("ric");
    setAllData(all);
    }
    fetching()
  }, []);
  //  let all = getChracters("ric")
  //  console.log(all);
  return (
    <div className="App">
      <div className="App-header">
        <Container>
          <SearchArea />
          <CharactersList allChrachters={allData}/>
        </Container>
      </div>
    </div>
  );
}

export default App;

import axios from "axios";

const URL_BASE = "https://rickandmortyapi.com/api";
const URL_CHARACTERS = URL_BASE + "/character/?name=";

export const getChracters = async (searchName) => {
  if (searchName !== "" && searchName !== null) {
    let queryString = URL_CHARACTERS + searchName;
    let allData = await subQuery(queryString);

    console.log(allData);
    return allData;
  }
};

const subQuery = async (url) => {
  let res = await axios.get(url);
  let data = res.data.results;
  let next = res.data.info.next;

  if (next) {
    let recursive = await subQuery(next);
    
    data.push(...recursive);
    return data;
  }

  return data ;
};
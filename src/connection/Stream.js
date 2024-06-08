import axios from "axios";

const URL_BASE = "https://rickandmortyapi.com/api";
const URL_CHARACTERS = URL_BASE + "/character/?name=";
const URL_CHARACTERS_DEFAULT= URL_BASE + "/character/";

export const getChracters = async (searchName) => {
  if (searchName !== "" && searchName !== null) {
    let queryString = URL_CHARACTERS + searchName;
    let allData = await subQuery(queryString);

    return allData;
  } else {
    let queryString = URL_CHARACTERS_DEFAULT;
    let allData = await axios.get(queryString);
    
debugger
    return allData.data.results;
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

  return data;
};

import axios from "axios";

const URL_BASE = "https://rickandmortyapi.com/api";
const URL_CHARACTERS = URL_BASE + "/character";

const getChracters = (searchName) => {
  axios
    .get(URL_CHARACTERS+"/?name="+searchName)
    .then((response) => {
        
      if (response.status === axios.HttpStatusCode.Ok) {
        let data = response.data;
        console.log(data);
        return data;
      }

      return [];
    })
    .catch((error) => {
      console.info("Something went wrong", error);
    });
};

export default getChracters;

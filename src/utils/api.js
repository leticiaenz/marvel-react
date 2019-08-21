import axios from "axios";

const BASE_URL = "https://gateway.marvel.com:443";

class Api {
  static async get(uri) {
    return await axios.get(`${BASE_URL}${uri}`);
  }
}

export default Api;

import Api from "../utils/api";

class CharacterService {
  static getCharacters(payload) {
    return Api.get(
      `/v1/public/characters?nameStartsWith=${payload}&apikey=e97c6a23632041c2ac81c754abdd37d1`
    );
  }

  static getCharacterDetail(id) {
    return Api.get(
      `/v1/public/characters/${id}?apikey=e97c6a23632041c2ac81c754abdd37d1`
    );
  }
}

export default CharacterService;

import axios from "axios";

class Api {
  static async getuserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (err) {
      console.warn("Algo de errado não está certo");
    }
  }
}

Api.getuserInfo("RicardoGutz");
Api.getuserInfo("RicardoGutzss");

import axios from "axios";

export default axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/daily/USD-BRL/1",
});

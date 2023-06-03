import axios from "axios";

const http = async (
  method,
  api,
  payload,
  url = "http://dyfdwm.natappfree.cc"
) => {
  let res;
  switch (method) {
    case "post":
      res = await axios.post(url + api, payload);
      break;
    case "get":
      res = await axios.get(url + api, payload);
      break;
    case "put":
      res = await axios.put(url + api, payload);
      break;
    default:
      res = await axios.delete(url + api, payload);
      break;
  }
  console.log(res);
  return res;
};

export default http;

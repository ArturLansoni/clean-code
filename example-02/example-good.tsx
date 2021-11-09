import axios from "axios";
import { getActiveUsers, formatUsers } from "@/data/users";

async function fetchUser(pageNumber = 1, perPage = 10) {
  const response = await axios.request({
    url: "http://localhost:3000",
    params: { pageNumber, perPage },
    method: "GET",
  });

  const users = formatUsers(response.data);
  getActiveUsers(users);
  return users;
}

export default fetchUser;

/*
  Use valores default para argumentos
  Funções devem fazer uma coisa  
*/

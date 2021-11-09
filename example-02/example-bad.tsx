import axios from "axios";

async function getUserInfos(pageNumber, perPage) {
  const response = await axios.request({
    url: "http://localhost:3000",
    params: {
      pageNumber: !!pageNumber ? pageNumber : 1,
      perPage: !!perPage ? perPage : 10,
    },
    method: "GET",
  });

  let activeUsersList = [];
  response.data.foreach((user) => {
    if (user.isActive) {
      activeUsersList.push(user);
    }
  });

  const usersFormatted = response.data.map((user) => {
    return { ...user, createdAt: new Date(user.createdAt) };
  });
  return { usersFormatted, activeUsersList };
}

export default getUserInfos;

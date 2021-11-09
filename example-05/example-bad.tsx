import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, Flex } from "@chakra-ui/react";

function HomePage() {
  const [user, setUser] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    const list = fetchList();
    if (list) setList(list);

    const user = fetchUser();
    if (user) setUser(user);
  }, []);

  async function fetchList() {
    const responseUser = await axios.request({
      url: "http://localhost:3000/list",
      method: "GET",
    });
    return responseUser.data;
  }
  async function fetchUser() {
    const responseUser = await axios.request({
      url: "http://localhost:3000/list",
      method: "GET",
    });
    return responseUser.data;
  }

  return (
    <Flex>
      <Text>{user.id}</Text>
      <Text>{user.name}</Text>
      <Text>{user.socialCode}</Text>
      <Text>{user.birthday}</Text>
      {list.map((item) => (
        <Text>{item}</Text>
      ))}
    </Flex>
  );
}

export default HomePage;

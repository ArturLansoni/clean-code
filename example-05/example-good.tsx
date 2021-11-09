import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, Flex } from "@chakra-ui/react";

function HomePage() {
  const [user, setUser] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    const list = httpClient({ url: "/list", method: "GET" });
    if (list) setList(list);

    const user = httpClient({ url: "/user", method: "GET" });
    if (user) setUser(user);
  }, []);

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

async function httpClient({ url, method }) {
  const response = await axios.request({
    url: `http://localhost:3000/${url}`,
    method,
  });
  return response.data;
}

export default HomePage;

/*
  Reaproveite código
  Isole o bibliotecas externas
*/

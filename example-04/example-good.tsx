import React, { useEffect, useState } from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useAppContext } from "@/contexts";

function HomePage() {
  const { getUser, getList } = useAppContext();
  const [user, setUser] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    const responseUser = getUser();
    setUser(responseUser.data);

    const responseList = getList();
    responseList.data.foreach((element) => {
      if (element.isActive) {
        setList([...list, element]);
      }
    });
  }, []);

  return (
    <Flex>
      <Text>{user?.id}</Text>
      <Text>{user?.name}</Text>
      <Text>{user?.socialCode}</Text>
      <Text>{user?.birthday}</Text>
      {list.map((item) => (
        <Text>{item}</Text>
      ))}
    </Flex>
  );
}

export default HomePage;

/*
  Evite Efeitos Colaterais
  Use os hooks
*/

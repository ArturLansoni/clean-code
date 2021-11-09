import React, { useEffect } from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useAppContext } from "@/contexts";

function HomePage() {
  const { getUser, getList } = useAppContext();
  let list = [];
  let user = null;
  useEffect(() => {
    const responseUser = getUser();
    user = responseUser.data;

    const responseList = getList();
    responseList.data.forEach((element) => {
      if (element.isActive) {
        list.push(element);
      }
    });
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

export default HomePage;

import React from "react";
import { Text, Flex } from "@chakra-ui/react";

function Homepage() {
  const userData = {
    user_Id: "13",
    userName: "Artur Lansoni",
    "user-social-code": "46295874142414",
    UserBirthday: "13/03/2001",
  };

  const languages = ["javascript", "typescript", "java", "elixir", "c++"];

  return (
    <Flex>
      <Text>{userData.user_Id}</Text>
      <Text>{userData.userName}</Text>
      <Text>{userData["user-social-code"]}</Text>
      <Text>{userData.UserBirthday}</Text>
      {languages.map((i) => (
        <Text>{i}</Text>
      ))}
    </Flex>
  );
}

export default Homepage;

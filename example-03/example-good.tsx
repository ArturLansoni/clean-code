import React from "react";
import { Text, Flex } from "@chakra-ui/react";

function Homepage() {
  const user = {
    id: "13",
    name: "Artur Lansoni",
    socialCode: "46295874142414",
    birthday: "13/03/2001",
  };

  const languages = ["javascript", "typescript", "java", "elixir", "c++"];

  return (
    <Flex>
      <Text>{user.id}</Text>
      <Text>{user.name}</Text>
      <Text>{user.socialCode}</Text>
      <Text>{user.birthday}</Text>
      {languages.map((language) => (
        <Text>{language}</Text>
      ))}
    </Flex>
  );
}

export default Homepage;

/*
  Evite adicionar contexto desnecessário aos seus nomes
  Mantenha consistencia entre as convenções de nomenclaturas (camelCase, kebab-case, snake_case, etc...)
  Evite deixar implicito o valor de mapeamentos
*/

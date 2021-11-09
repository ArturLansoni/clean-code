import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useCounterContext } from "@/contexts";
import { Loading } from "@/components";

const ONE_MINUTE = 60000;

function CounterContainer() {
  const { counter, addAMinuteToCounter, resetCounter, isLoading } =
    useCounterContext();

  useEffect(() => {
    resetCounter();
    const event = setInterval(() => {
      addAMinuteToCounter();
    }, ONE_MINUTE);

    return () => {
      clearInterval(event);
    };
  }, []);

  return isLoading ? <Loading /> : <Text>{counter}</Text>;
}

export default CounterContainer;

/*
  Use nomes legiveis e pesquisáveis para numeros aleatorios
  Mantenha o nome das funções / variaveis consistentes
  Use is... para valores boleanos
  Remover comentarios inuteis
*/

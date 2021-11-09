import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useCounterContext } from "@/contexts";
import { Loading } from "@/components";

function TimerContainer() {
  const { counter, setTime, resetTimer, loading } = useCounterContext();

  useEffect(() => {
    // Reinicia o timer
    resetTimer();

    // Adiciona um minuto no timer
    const event = setInterval(() => {
      setTime();
    }, 60000);

    return () => {
      clearInterval(event);
    };
  }, []);

  return !loading ? <Text>{counter}</Text> : <Loading />;
}

export default TimerContainer;

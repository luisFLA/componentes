import React from 'react';
import { View, Text } from 'react-native';

type Operaciones = 'multiplicar' | 'Sumar' | 'Restar';

interface Parametros {
  a: number;
  b: number;
  tipoOperacion: Operaciones;
}

export default function OperacionesAritmeticas(props: Parametros) {

  function fnOperacionesAritmeticas(a: number, b: number, op: Operaciones): number {
    if (op === 'multiplicar') return a * b;
    if (op === 'Sumar') return a + b;
    return a - b;
  }

  return (
    <View>
      <Text>Resultados Operaciones</Text>
      <Text>Resultado de la operación: {fnOperacionesAritmeticas(props.a, props.b, props.tipoOperacion)}</Text>
    </View>
  );
}

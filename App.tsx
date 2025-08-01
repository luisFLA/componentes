import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import CalculoEjercicio from './Components/CalculoEjercicio';
import OperacionesAritmeticas from './Components/OperacionesAritmeticas';

export default function App() {
  const horas = [3, 0, 2, 4.5, 0, 3, 1];
  const objetivo = 2;

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <CalculoEjercicio horasDiarias={horas} objetivo={objetivo} />

        <View style={{ marginTop: 20 }}>
          <OperacionesAritmeticas a={5} b={3} tipoOperacion="multiplicar" />
          <OperacionesAritmeticas a={10} b={4} tipoOperacion="Sumar" />
          <OperacionesAritmeticas a={8} b={2} tipoOperacion="Restar" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

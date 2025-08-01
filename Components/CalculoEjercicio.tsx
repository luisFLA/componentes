import React from 'react';
import { View, Text } from 'react-native';

interface ResultadoEjercicio {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Props {
  horasDiarias: number[];
  objetivo: number;
}

export default function CalculoEjercicio(props: Props) {

  function calculateExercises(dailyHours: number[], target: number): ResultadoEjercicio {
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter(h => h > 0).length;
    const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);
    const average = totalHours / periodLength;

    let rating = 1;
    let ratingDescription = '';

    if (average >= target) {
      rating = 3;
      ratingDescription = '¡Excelente! Cumpliste tu objetivo.';
    } else if (average >= target * 0.75) {
      rating = 2;
      ratingDescription = 'No está tan mal, pero podría ser mejor';
    } else {
      rating = 1;
      ratingDescription = 'Necesitas mejorar tu rutina de ejercicios';
    }

    return {
      periodLength,
      trainingDays,
      success: average >= target,
      rating,
      ratingDescription,
      target,
      average
    };
  }

  const resultado = calculateExercises(props.horasDiarias, props.objetivo);

  return (
    <View>
      <Text>📌 Resultados de Ejercicios</Text>
      <Text>Días del período: {resultado.periodLength}</Text>
      <Text>Días con entrenamiento: {resultado.trainingDays}</Text>
      <Text>Objetivo diario: {resultado.target}</Text>
      <Text>Promedio alcanzado: {resultado.average.toFixed(2)}</Text>
      <Text>¿Se alcanzó el objetivo?: {resultado.success ? 'Sí' : 'No'}</Text>
      <Text>Calificación: {resultado.rating}</Text>
      <Text>Descripción: {resultado.ratingDescription}</Text>
    </View>
  );
}

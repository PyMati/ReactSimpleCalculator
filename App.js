import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from "react";

import Colors from './utils/colors';
import ButtonDisplay from './components/ButtonsDisplay';
import CalculationDisplay from './components/CalculationDisplay';


export default function App() {
  const [calculation, setCalculation] = useState();
  const [expression, setExpression] = useState();
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(calculation != undefined){
      setData(data => [...data, {index: index, result: calculation, exp: expression}]);
    }
    
  }, [calculation, index, expression]);

  const addToCalcList = (result, expression) => {
    setCalculation(result);
    setExpression(expression);
    setIndex(index + 1);
  };

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <CalculationDisplay data = {data}/>
      <ButtonDisplay dataHandler={addToCalcList}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

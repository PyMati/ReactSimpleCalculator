import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import Colors from "../utils/colors";
import CalculatorButton from "./CalculatorButton";

const ButtonDisplay = ({ dataHandler }) =>{
    const [currentcalc, setCalc] = useState('');

    const resetCalc = () => {
        setCalc('');
    };

    const addToCalc = (text) => {
        setCalc(currentcalc + text);
    };
    
    const evalExpr = () => {
        dataHandler(eval(currentcalc), currentcalc);
        resetCalc();
    };

    return(
        <>
        <View style = {styles.prmContainer}>
            <View style = {styles.textContainer}>
                <Text style = {styles.testStyle}>{currentcalc}</Text>
            </View>
            <View style = {styles.container}>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>0</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>1</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>2</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>3</CalculatorButton>
            </View>
            <View style = {styles.container}>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>4</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>5</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>6</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>+</CalculatorButton>
            </View>
            <View style = {styles.container}>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>7</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>8</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>9</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>-</CalculatorButton>
            </View>
            <View style = {styles.container}>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>*</CalculatorButton>
                <CalculatorButton pressHandler={addToCalc} needToAdd = {true}>/</CalculatorButton>
                <CalculatorButton pressHandler={evalExpr} needToAdd = {false}>=</CalculatorButton>
                <CalculatorButton pressHandler={resetCalc} needToAdd = {false}>C</CalculatorButton>
            </View>
        </View>
        </>
    );
};

export default ButtonDisplay;

const styles = StyleSheet.create({
    prmContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flexDirection: 'row'
    },

    textContainer: {
        borderBottomColor: Colors.secondShadow,
        borderBottomWidth: 5,
        width: '100%'
    },

    testStyle: {
        color: Colors.accent,
        fontSize: 32,
        textAlign: 'center',
    }
})
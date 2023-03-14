import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../utils/colors";

const CalculatorButton = ({ children, pressHandler, needToAdd }) =>{

    const addNewChar = () => {
        if (needToAdd === true){
            pressHandler(children);
        }
        else{
            pressHandler();
        }
    };

    return(
        <>
        <View style = {styles.primContainer}>
            <Pressable android_ripple = {{color: Colors.secondShadow}}
            onPress = {addNewChar}>
                <Text style = {styles.testStyle}> {children} </Text>
            </Pressable>
        </View>
        </>
    );
};

export default CalculatorButton;

const styles = StyleSheet.create({
    primContainer: {
        backgroundColor: Colors.second,
        borderRadius: 8,
        margin: 12,
        shadowColor: 'white',
        shadowRadius: 8,
        shadowOffset: {width: 21, height: 21},
        shadowOpacity: 0.7,
        overflow: 'hidden',
        width: 60,
        height: 60,
        justifyContent: 'center'
    },


    testStyle: {
        fontSize: 18,
        color: Colors.accent,
        textAlign: 'center',
        fontSize: 24
    },
});
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../utils/colors";


const CalculationDisplay = ({data}) => {

    const renderProp = (index, res, exp) => {
        return(
            <>
                <Text style ={styles.itemTextStyle} >#{index} Result: {res}</Text>
                <Text style ={styles.itemTextStyle}>Expression: {exp}</Text>
            </>
        );
    };

    return(
        <>
        <View style = {styles.container}>
            <View style = {styles.displayContainer}>
                <FlatList 
                    data = {data}
                    renderItem = {({item}) => renderProp(item.index, item.result, item.exp)}
                />
            </View>
        </View>
        </>
    );
};

export default CalculationDisplay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    displayContainer: {
        flex: 1,
        marginTop: 64,
        marginBottom: 16,
    },

    itemTextStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.accent
    },
});
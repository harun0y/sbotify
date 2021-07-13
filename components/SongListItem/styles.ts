import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer: { 
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    image: {
        width: 75,
        height: 75,
    },
    title: {
        color: 'white',
        fontSize: 23,
    },
    artist: {
        color: 'lightgray',
        fontSize: 19,
    },
})

export default styles;
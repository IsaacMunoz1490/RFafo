import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';



class DisplayBottoms extends Component {
    render() {
        return (
                <View style={styles.container}>
                <Image 
                    style={styles.imgDisplay}
                    source={require('../assets/jeans.jpg')}
                />
                <Image 
                    style={styles.imgDisplay2}
                    source={require('../assets/sweater.jpg')}
                />
                <Image 
                    style={styles.imgDisplay3}
                    source={require('../assets/shirt.jpg')}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        flexDirection: 'column',
    },
    imgDisplay: {
        width: 150,
        height: 170,
    },
    imgDisplay2: {
        width: 150,
        height: 170,
    },
    imgDisplay3: {
        width: 150,
        height: 170,
    },
})
export default DisplayBottoms;
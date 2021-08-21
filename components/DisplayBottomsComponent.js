import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';



class DisplayBottoms extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.col}>
                    <Image
                        style={styles.sweater}
                        source={require('../assets/sweater.jpg')}
                    />
                    <Image
                        style={styles.jeans}
                        source={require('../assets/jeans.jpg')}
                    />
                    <Image
                        style={styles.tShirt}
                        source={require('../assets/shirt.jpg')}
                    />
                </View>
                <View style={styles.colTwo}>
                    <Image
                        style={styles.coat}
                        source={require('../assets/coat.jpg')}
                    />
                    <Image
                        style={styles.hat}
                        source={require('../assets/hat.jpeg')}
                    />
                    <Image
                        style={styles.shoes}
                        source={require('../assets/shoes.jpeg')}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 20,
        marginBottom: 10,
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', 
    },
    colTwo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    sweater: {
        width: 190,
        height: 220,
        borderRadius: 20,
    },
    jeans: {
        width: 190,
        height: 300,
        borderRadius: 20,
    },
    tShirt: {
        width: 190,
        height: 220,
        borderRadius: 20,
    },
    coat: {
        width: 190,
        height: 300,
        borderRadius: 20,
    },
    hat: {
        width: 190,
        height: 220,
        borderRadius: 20,
    },
    shoes: {
        width: 190,
        height: 150,
        borderRadius: 20,
    },
    
})
export default DisplayBottoms;
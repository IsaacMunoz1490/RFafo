import React, {Component } from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';
import ClosetInfo from './ClosetInfoComponent';

class ButtonPanel extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Button 
                    id={0}
                    title= "Closet"
                    onPress={() => Alert.alert('ClosetInfo')}
                />
                <Button 
                    id={1}
                    title= "Weather"
                    onPress={ () => Alert.alert('View Weather')}
                />
                <Button 
                    id={2}
                    title= "Camera"
                    onPress={ () => Alert.alert('Towards Camera Options')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
    }
})
export default ButtonPanel;
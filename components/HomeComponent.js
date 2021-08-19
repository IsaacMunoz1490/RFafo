import React, { Component } from 'react';
import { CLOSETS } from '../shared/closets';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import DisplayBottoms from './DisplayBottomsComponent';
import ButtonPanel from './ButtonPanel';

// this is a card displaying a text that will be resued later to place a banner or a footer component.
function RenderItem({ item }) {  //rendering the items
    if (item) {
        return (
            <View>
            <Card
                featuredTitle={item.name}
            > 
                <Text style={{ margin: 10 }}>
                    {item.name} {"\n"}
                    {item.description}
                </Text>
            </Card> 
            <DisplayBottoms />
            <ButtonPanel />
            </View>
        );
    }
    return <View />
}




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { //add the rest of shared components
            closets: CLOSETS
        }
    }

    static navigationOptions ={
        title : 'Home'
    }
    render() {
        return (  
        <ScrollView> 
            <RenderItem  
                item={this.state.closets.filter(closet => closet.featured)[0]}
            />
            <View>
            </View>
        </ScrollView>
        ); 
    }
}

export default Home;
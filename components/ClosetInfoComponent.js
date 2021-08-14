import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CLOSETS } from '../shared/closets';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';


function RenderCloset(props) {

    const { closet } = props;

    if (closet) {
        return (
            <Card
                featuredTitle={closet.name}
            >
                <Text style={{ margin: 10 }}>
                    {closet.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}
class ClosetInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closets: CLOSETS
        };
    }
    static navigationOptions = {
        title: 'Closet Information'
    }
    render() {
        const { navigate } = this.props.navigation;
        const closetId = this.props.navigation.getParam('closetId');
        const closet = this.state.closets.filter(closet => closet.id === closetId)[0];

        const renderClosetListItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('ClosetList', { closetId: item.id })}
                />
            );
        };

        return (
            <ScrollView>
                <RenderCloset
                    closet={closet}

                />
                <FlatList
                    data={this.state.closets}
                    renderItem={renderClosetListItem}
                    keyExtractor={item => item.id.toString()} //always add the toString function even if you dont need it.
                />
            </ScrollView>
        );
    }
}

export default ClosetInfo;
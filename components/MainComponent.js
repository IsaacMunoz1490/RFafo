import React, { Component } from 'react';
import Home from './HomeComponent';
import ClosetInfo from './ClosetInfoComponent';
import addBottomsComponent from './addBottomsComponent';
import addTopsComponent from './addTopsComponent';
import addCoatsComponent from './addCoatsComponent';
import addHatComponent from './addHatComponent';
import addScarfComponent from './addScarfComponent';
import addShoesComponent from './addShoesComponent';

import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';





// this is the closet screen, we will connect those buttons to their respective screen.
const ClosetListNavigator = createStackNavigator(
    {
        Closet: { screen: ClosetInfo }
    },
    {
        initialRouteName: 'Closet',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const BottomsNavigator = createStackNavigator(
    {
        Bottoms: { screen: addBottomsComponent }
    },
    {
        initialRouteName: 'Bottoms',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const TopsNavigator = createStackNavigator(
    {
        Tops: { screen: addTopsComponent }
    },
    {
        initialRouteName: 'Tops',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const CoatsNavigator = createStackNavigator(
    {
        Coats: { screen: addCoatsComponent }
    },
    {
        initialRouteName: 'Coats',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const HatsNavigator = createStackNavigator(
    {
        Hats: { screen: addHatComponent }
    },
    {
        initialRouteName: 'Hats',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const ScarfNavigator = createStackNavigator(
    {
        Scarf: { screen: addScarfComponent }
    },
    {
        initialRouteName: 'Scarf',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const ShoesNavigator = createStackNavigator(
    {
        Shoes: { screen: addShoesComponent }
    },
    {
        initialRouteName: 'Shoes',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
// Masonry component goes into the home page with a footer.
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
// this is where we add the components creted and their screen.
const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Closet: { screen: ClosetListNavigator },
        Bottoms: { screen: BottomsNavigator},
        Tops: { screen: TopsNavigator},
        Coats: { screen: CoatsNavigator},
        Hats: { screen: HatsNavigator},
        Scarf: { screen: ScarfNavigator},
        Shoes: { screen: ShoesNavigator},

    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View 
                style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;
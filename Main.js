import React from 'react';
//createMaterialBottomTabNavigator component allows for an easy to implement material design bottom tab navigator
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RentFeed from './Screens/RentFeed';
import BuyFeed from './Screens/BuyFeed';
import SellFeed from './Screens/SellFeed';
import SettingsFeed from './Screens/SettingsFeed';
import ChatFeed from './Screens/ChatFeed';

export default createMaterialBottomTabNavigator({
    Rent: { 
        //This syntax is technically redundant at the moment but other things could be added in the future
        screen: RentFeed 
    },
    Buy: { 
        screen: BuyFeed,
    },
    Sell: { 
        screen: SellFeed 
    },
    Chat: { 
        screen: ChatFeed 
    },
    Settings: { 
        screen: SettingsFeed 
    },
},
{
    initialRouteName: 'Rent',
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            //There's probably a better way to do this
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Rent') {
                iconName = `hand${focused ? '-peace-variant' : '-pointing-up'}`;
            }
            else if (routeName === 'Buy'){
                iconName = `cart${focused ? '' : '-outline'}`;
            }
            else if (routeName === 'Sell'){
                iconName = `cash${focused ? '-multiple' : ''}`;
            }
            else if (routeName === 'Chat'){
                iconName = `message${focused ? '' : '-outline'}`;
            }
            else if (routeName === 'Settings'){
                iconName = `settings${focused ? '' : '-outline'}`;
            }
            return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
        },
        
    }),
    //Represents the icon colors on the navbar when selected/not selected
    //There's probably a better way to handle this but I'm not aware of it at the moment
    activeTintColor: '#000',
    inactiveTintColor: '#000',
    //To move to Styles.js
    barStyle: { backgroundColor: '#fff'},
});
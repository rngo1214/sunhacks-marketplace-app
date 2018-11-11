import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import RentFeed from './Screens/RentFeed';
import BuyFeed from './Screens/BuyFeed';
import SellFeed from './Screens/SellFeed';
import SettingsFeed from './Screens/SettingsFeed';
import ChatFeed from './Screens/ChatFeed';

export default createMaterialBottomTabNavigator({
    Rent: RentFeed,
    Buy: BuyFeed,
    Sell: SellFeed,
    Chat: ChatFeed,
    Settings: SettingsFeed,
},
{
    initialRouteName: 'Rent'
})
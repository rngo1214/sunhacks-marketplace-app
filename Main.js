import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation';

import RentFeed from './Screens/RentFeed';
import BuyFeed from './Screens/BuyFeed';
import SellFeed from './Screens/SellFeed';
import SettingsFeed from './Screens/SettingsFeed';

export default createMaterialBottomTabNavigator({
    Rent: RentFeed,
    Buy: BuyFeed,
    Sell: SellFeed,
    Settings: SettingsFeed
},
{
    initialRouteName: 'Rent'
})
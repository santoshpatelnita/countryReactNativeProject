/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../scenes/SplashScr';
import Home from '../scenes/HomeScr';
import List from '../scenes/CountryListScr';
import information from '../scenes/informationScr';


const RootStack = createStackNavigator();

const RootNavigator = (props:any) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                options={({}) => ({headerShown: false})
                }
                name="Splash" component={Splash} />
            <RootStack.Screen
            options={({ route, navigation }) => ({
                    headerShown: false,
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="Home"
                component={Home}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Country List',
                    headerTitleAlign: 'center',
                    headerTintColor: '#ffffff',
                    headerStyle: { backgroundColor: '#718fa8', },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="CountryList"
                component={List}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Country Detail',
                    headerTitleAlign: 'center',
                    headerTintColor: '#047574',
                    headerStyle: { backgroundColor: '#dfc7fc'},                  
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation },
                    headerShown: false
                })
                }
                name="CountryInformation"
                component={information}
            />
        </RootStack.Navigator>
    );
};

export default RootNavigator;
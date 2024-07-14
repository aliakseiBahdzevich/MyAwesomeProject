import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import homeScreen from '../screens/homeScreen';
import listScreen from '../screens/listScreen';
import confirmScreen from '../screens/confirmedScreen';
import confirmedScreen from '../screens/confirmedScreen';


const Stack = createNativeStackNavigator();

export type Person = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {name: string, url: string};
    location: {name: string, url: string};
    image: string;
    episode: string[];
    url: string;
    created: string;
}

const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='home'
                    component={homeScreen}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name='list'
                    component={listScreen}
                    options={{title: 'List of personalities'}}
                />
                <Stack.Screen
                    name='confirm'
                    component={confirmedScreen}
                    options={{title: 'Confirmed'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack
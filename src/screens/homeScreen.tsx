import * as React from 'react';
import { Person } from '../navigation/rootNavigation';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import FlatListItem from '../components/FlatListItem';
import { getPersons } from '../api';




const HomeScreen = ({navigation}: any) => {

    
    
    return(
        <View style = {{zIndex: 2}}>
            <TouchableOpacity onPress={()=>navigation.navigate('list')} style={{backgroundColor: 'rgb(60, 62, 68)', margin: 5, marginTop: 0, borderRadius: 5, height: 45, zIndex: 1}}>
                <Text style = {{fontWeight: '900',color: 'rgb(245, 245, 245)', fontSize: 30, textAlign:'center'}}>ALL PERSONALITIES</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('confirm')} style={{backgroundColor: 'rgb(60, 62, 68)', margin: 5, marginTop: 0, borderRadius: 5, height: 45, zIndex: 1}}>
                <Text style = {{fontWeight: '900',color: 'rgb(245, 245, 245)', fontSize: 30, textAlign:'center'}}>SAVED PERSONALITIES</Text>
            </TouchableOpacity>
        </View>
    );

}











export default HomeScreen;
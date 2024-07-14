import * as React from 'react';
import { Person } from '../navigation/rootNavigation';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { getPersons } from '../api';


type Props = {
    item: Person
    onPress: ()=>void;
}

const FlatListSavedItem = ({item, onPress}: Props) => {
    return (
        <>
        <View>
            <View style = {{flexDirection: 'row', backgroundColor: 'rgb(60, 62, 68)', margin: 5, borderRadius: 5}}>
                <Image style = {{width: 150, height: 150, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} source = {{uri: item.image}}/>
                <View style={{margin: 3}}>
                    <View style={{margin: 3}}>
                        <Text style={{fontWeight: '900',color: 'rgb(245, 245, 245)'}}>{item.name}</Text>
                        <Text style={{fontWeight: '300',color: 'rgb(245, 245, 245)'}}>{item.status} - {item.species}</Text>
                    </View>
                    <View style={{margin: 3}}>
                        <Text style={{fontWeight: '300',color: 'rgb(158, 158, 158)'}}>Last known location:</Text>
                        <Text style={{fontWeight: '300',color: 'rgb(245, 245, 245)'}}>{item.location.name}</Text>
                    </View>
                    <View style={{margin: 3}}>
                        <Text style={{fontWeight: '300',color: 'rgb(158, 158, 158)'}}>First seen in:</Text>
                        <Text style={{fontWeight: '300',color: 'rgb(245, 245, 245)'}}>{}</Text>
                    </View>
                </View>
            </View>
        </View>
        <View>
            <TouchableOpacity onPress={onPress} style={{backgroundColor: 'rgb(60, 62, 68)', margin: 5, marginTop: 0, borderRadius: 5, height: 45}}>
                <Text style = {{fontWeight: '900',color: 'rgb(245, 245, 245)', fontSize: 30, textAlign:'center'}}>delete item</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}


export default FlatListSavedItem;
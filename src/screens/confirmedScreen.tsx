import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Person } from '../navigation/rootNavigation';
import { useEffect, useState } from 'react';
import FlatListSavedItem from '../components/FlatListSavedItems';
import { serializer } from '../../metro.config';
import AsyncStorage from '@react-native-async-storage/async-storage';



const ConfirmedScreen = ({navigation, route}: any) => {

    const [newArray, setNewArray] = useState<Person[]>([])
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState<string>('');

    useEffect(()=>{
    
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('persons');
                console.log(jsonValue)
                jsonValue && setNewArray(JSON.parse(jsonValue))
    
            } catch (e) {
                setError((e)=>e)
                console.log(e)
            }
        };
        getData();

    }, [])
    
    

    const deleteItem = async (item: Person) => {
        try{
            const arrWithoutItem = newArray.filter(pers => pers.id!==item.id);
            await AsyncStorage.setItem('persons', JSON.stringify(arrWithoutItem))
            setNewArray(arrWithoutItem)
        }catch(e){}
    }

    return(
        <View>
            <FlatList data={newArray} renderItem={({item})=><FlatListSavedItem onPress={()=>deleteItem(item)} item={item}/>} onEndReachedThreshold={10} onEndReached={()=>setPage(page+1)} />
        </View>
    );
    

}


export default ConfirmedScreen;
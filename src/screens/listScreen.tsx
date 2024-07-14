import * as React from 'react';
import { Person } from '../navigation/rootNavigation';
import { FlatList, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import FlatListItem from '../components/FlatListItem';
import { getPersons } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';




const ListScreen = ({navigation, route}: any) => {

    const [myArray, setMyArray] = useState<Person[]>([])
    const [error, setError] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState(false)

    
    useEffect(()=>{
        setIsLoading(true)
        getPersons(page)
            .then(res=>{
                setMyArray([...myArray, ...res])
                setIsLoading(false)
                
            })
            .catch(er=>setError(er))
    }, [page])

    

    
    

    const saveItem = async (item: Person, setDisabledFalse: ()=>void, setIsLoading: (param: boolean)=>void) => {
        const jsonValue = await AsyncStorage.getItem('persons')
        const array: Person[] = await JSON.parse(jsonValue!)

        if(array){
            setIsLoading(true)
            await AsyncStorage.setItem('persons', JSON.stringify([...array, item]))
            setTimeout(()=>{setDisabledFalse(), setIsLoading(false)}, 2000)
        } else {
            setIsLoading(true)
            await AsyncStorage.setItem('persons', JSON.stringify([item]))
            setTimeout(()=>{setDisabledFalse(), setIsLoading(false)}, 2000)
        }
    }

    if(isLoading) return <View><Text>Загрузка</Text></View>
    return(
        <View>
            <FlatList 
            data={myArray} 
            keyExtractor={(item, index)=>item.id.toString()+index}
            renderItem={({item})=>
                <FlatListItem 
                    onPress={(setDisabledTrue, setIsLoading)=>{
                        saveItem(item, setDisabledTrue, setIsLoading);                       
                    }}
                    item={item}/> 
                } 
            onEndReachedThreshold={10} 
            onEndReached={()=>setPage(page+1)} />
        </View>
    );

}

export default ListScreen;
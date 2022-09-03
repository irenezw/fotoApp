import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gallery from './Gallery.jsx'


export default function Home() {
  const [tenDogs, setTenDogs] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getDogsFromApi = () => {
    return fetch('https://dog.ceo/api/breed/retriever/golden/images/random/10')
    .then((response) => response.json())
    .then((json)=> {
      setTenDogs(json["message"])
      console.log(tenDogs)
    })
    .catch((err) => {
      console.error(err);
    });
  }
//TODO understand how useEffect and return statement inside of it
  useEffect(()=> {
    getDogsFromApi()
    .then((res) => {
      //make sure data is loaded before continuing
      setLoaded(true);
    })
    .catch((err) => {console.log('useEffect: ', err)})
  }, [])


  return (
    <View style={styles.container}>
      <Text>fotoApp</Text>
      {loaded && <Gallery tenDogs={tenDogs}/>}
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

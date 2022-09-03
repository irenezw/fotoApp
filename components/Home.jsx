import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, RefreshControl} from 'react-native';
import { React, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gallery from './Gallery.jsx';
import Nav from './Nav.jsx';


export default function Home() {
  const [tenDogs, setTenDogs] = useState({});
  const [loaded, setLoaded] = useState(false);


  const getDogsFromApi = () => {
    return fetch('https://dog.ceo/api/breed/retriever/golden/images/random/10')
    .then((response) => response.json())
    .then((json)=> {
      setTenDogs(json["message"])
      // console.log(tenDogs)
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
    <View style={styles.container} >
      <Text style={styles.title}>fotoApp</Text>
      {loaded && <Gallery tenDogs={tenDogs} getDogsFromApi={getDogsFromApi}/>}
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "pink",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 4,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,

  }
});

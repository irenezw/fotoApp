import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gallery from './Gallery.jsx'

export default function HomeScreen() {
  const [tenDogs, setTenDogs] = useState({})

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

  useEffect(()=> {
    getDogsFromApi()
    .then((res) => {
      return(res)
    })
    .catch((err) => {console.log('useEffect: ', err)})
  }, [])

  return (
    <View style={styles.container}>
      <Text>fotoApp</Text>
      <Gallery  tenDogs={tenDogs}/>
    <StatusBar style="auto" />
    </View>
  );
}

// export default Gallery = (props) => {
//   console.log(props.tenDogs[0])
//   return (
//     <View>
//       {/* <View {props.tenDogs.map(dogImg => {(<Text>{console.log(dogImg)}</Text>)})}></View> */}
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

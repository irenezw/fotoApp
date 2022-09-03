import React from 'react';
import { Text, View, FlatList, Image} from 'react-native';

const Gallery = ({tenDogs}) => {
  return (
    <View>
      {/* {console.log(`"${tenDogs[0]}"`)} */}
      {tenDogs.map((dog, i) => {(<Image
        // key={i}
        style={{width: 200, height: 200}}
        // source={{uri:`${dog}`}}
        // source={{uri:{dog}}}
        source = {{uri: dog}}
      />)})}

      {tenDogs.map((dog, i) => {url={dog}})}

       {/* {tenDogs.map((dog, i) => {(<Text key={i}>{dog}</Text>)})} */}

      {/* <Image
        style={{width: 200, height: 200}}
        source={{uri:"https://images.dog.ceo/breeds/retriever-golden/Z6A_4650_200812.jpg"}}/> */}

    </View>
    // {tenDogs.map((dog, i) => (<Text key={i}>{i}: {dog}</Text>))}
    // <Image source={{uri: imageUrl}} />

    // <Image {tenDogs[0]}/>

    // <FlatList
    //   data={tenDogs}
    //   renderItem={<Text>{tenDogs}</Text>}
    //   />
  )
}




export default Gallery;


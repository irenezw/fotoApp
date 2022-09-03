import {React, useState, useCallback} from 'react';
import Image from './Image.jsx';
import { Text, View, FlatList, ImageBackground, ScrollView, TouchableOpacity, Pressable, StyleSheet, RefreshControl} from 'react-native';
import { Icon } from "@rneui/themed";

const Nav = () => {

  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});


export default Nav;


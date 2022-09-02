import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

export default function App() {
  return (
    <View style={styles.container}>
      <Text>fotoApp</Text>

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

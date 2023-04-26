import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cats, dogs } from './breeds';
import Item from './Item';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>By Breeds!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Dogs')}
      >
        <Text style={styles.button}>Dog Breeds 🐕</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cats')}
      >
        <Text style={styles.button}>🐈 Cat Breeds</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function DogsScreen() {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <FlatList 
        data={dogs}
        renderItem={({ item, index }) => <Item  breedIndex={index} breedInfo={item}/>}
        keyExtractor={item => item.breed}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
    <StatusBar style="auto" />
  </View>
  )
}

function CatsScreen() {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <FlatList 
        data={cats}
        renderItem={({ item, index }) => <Item  breedIndex={index} breedInfo={item}/>}
        keyExtractor={item => item.breed}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
    <StatusBar style="auto" />
  </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dogs" component={DogsScreen} />
      <Stack.Screen name="Cats" component={CatsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 20,
    margin: 10,
    width: 200,
    textAlign: 'center',
  },
});

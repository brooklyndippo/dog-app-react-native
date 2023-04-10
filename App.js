import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { dogs } from './breeds';
import Item from './Item';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList 
          data={dogs}
          renderItem={({ item, index }) => <Item title={`${index} ${item.breed}`}  />}
          keyExtractor={item => item.breed}
        />
      </SafeAreaView>
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
